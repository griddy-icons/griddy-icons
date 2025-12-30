import fs from "node:fs";
import path from "node:path";

const SRC_DIR = path.join(process.cwd(), "icons-src");
const OUT_DIR = path.join(process.cwd(), "src/icons");
const INDEX_FILE = path.join(process.cwd(), "src/index.ts");

const WEIGHTS = ["regular", "filled"] as const;

function toPascalCase(str: string) {
  return str
    .replace(/(-\w)/g, (m) => m[1].toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase());
}

function getIconContent(svgContent: string) {
  // Extract content between <svg ...> and </svg>
  const match = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  return match ? match[1].trim() : "";
}

function processSvgContent(content: string) {
  return content
    .replace(/([a-z]+)-([a-z]+)/g, (_, p1, p2) => {
      // Skip known non-camelCase attributes if any (usually none for React SVG)
      // Common ones: fill-rule -> fillRule, clip-rule -> clipRule, stroke-width -> strokeWidth
      return `${p1}${p2.charAt(0).toUpperCase()}${p2.slice(1)}`;
    })
    .replace(/class=/g, "className=")
    .replace(/#[0-9a-fA-F]{3,6}/g, "currentColor");
}

async function main() {
  if (fs.existsSync(OUT_DIR)) {
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const iconMap = new Map<string, Record<string, string>>();

  // Read icons from each weight directory
  for (const weight of WEIGHTS) {
    const weightDir = path.join(SRC_DIR, weight);
    if (!fs.existsSync(weightDir)) continue;

    const files = fs.readdirSync(weightDir).filter((f) => f.endsWith(".svg"));

    for (const file of files) {
      const iconNameKebab = path.basename(file, ".svg");
      const iconNamePascal = toPascalCase(iconNameKebab);
      const content = fs.readFileSync(path.join(weightDir, file), "utf-8");

      const innerContent = getIconContent(content);
      const processedContent = processSvgContent(innerContent);

      if (!iconMap.has(iconNamePascal)) {
        iconMap.set(iconNamePascal, {});
      }
      iconMap.get(iconNamePascal)![weight] = processedContent;
    }
  }

  const generatedIcons: string[] = [];

  // Generate component files
  for (const [iconName, weights] of iconMap) {
    const iconDir = path.join(OUT_DIR, iconName);
    fs.mkdirSync(iconDir, { recursive: true });

    const availableWeights = Object.keys(weights);

    // Generate individual weight files
    for (const [weight, content] of Object.entries(weights)) {
      const componentContent = `import React from "react";
export default (
  <>
    ${content}
  </>
);
`;
      fs.writeFileSync(path.join(iconDir, `${weight}.tsx`), componentContent);
    }

    // Generate icon index.tsx
    const indexContent = `import React, { forwardRef } from "react";
import IconBase from "../../IconBase";
import type { IconProps } from "../../IconBase";
${availableWeights.map((w) => `import ${w} from "./${w}";`).join("\n")}

const weights = { ${availableWeights.join(", ")} } as const;

const ${iconName}Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

${iconName}Icon.displayName = "${iconName}";
export default ${iconName}Icon;
`;
    fs.writeFileSync(path.join(iconDir, "index.tsx"), indexContent);
    generatedIcons.push(iconName);
  }

  // Generate main index.ts
  const mainIndexContent = `${generatedIcons
    .map((name) => `export { default as ${name} } from "./icons/${name}";`)
    .join("\n")}

export type { IconProps } from "./IconBase";
`;

  fs.writeFileSync(INDEX_FILE, mainIndexContent);
  console.log(`Generated ${generatedIcons.length} icons.`);
}

main().catch(console.error);
