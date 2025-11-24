// src/icons/AnalyzeVoice/index.tsx
import { forwardRef as forwardRef2 } from "react";

// src/IconBase.tsx
import { forwardRef, useContext } from "react";

// src/IconContext.tsx
import React from "react";
var IconContext = React.createContext({
  color: "currentColor",
  size: 24,
  weight: "regular",
  mirrored: false
});
var IconContextProvider = IconContext.Provider;

// src/IconBase.tsx
import { jsx } from "react/jsx-runtime";
var IconBase = forwardRef(function IconBase2({ color, size, weight, mirrored, weights: weights4, style, ...rest }, ref) {
  var _a, _b, _c, _d, _e, _f, _g;
  const context = useContext(IconContext);
  const finalColor = (_a = color != null ? color : context.color) != null ? _a : "currentColor";
  const finalSize = (_b = size != null ? size : context.size) != null ? _b : 24;
  const finalWeight = (_c = weight != null ? weight : context.weight) != null ? _c : "regular";
  const finalMirrored = (_d = mirrored != null ? mirrored : context.mirrored) != null ? _d : false;
  const chosen = (_g = (_f = (_e = weights4[finalWeight]) != null ? _e : weights4.regular) != null ? _f : weights4.bold) != null ? _g : Object.values(weights4)[0];
  const transform = finalMirrored ? "scale(-1,1)" : void 0;
  const mergedStyle = finalMirrored ? { ...style != null ? style : {}, transformOrigin: "center", transform: "scaleX(-1)" } : style;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: finalSize,
      height: finalSize,
      viewBox: "0 0 256 256",
      fill: finalColor,
      ...transform ? { transform } : {},
      style: mergedStyle,
      ...rest,
      children: chosen
    }
  );
});
var IconBase_default = IconBase;

// src/icons/AnalyzeVoice/bold.tsx
import { Fragment, jsx as jsx2 } from "react/jsx-runtime";
var bold_default = /* @__PURE__ */ jsx2(Fragment, { children: /* @__PURE__ */ jsx2("g", { transform: "scale(10.666666666666666)", children: /* @__PURE__ */ jsx2("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 16a5 5 0 0 0 4.975-4.5H14.75V10c0-.965-.785-1.75-1.75-1.75h-1.5v-4.5H13c.705 0 1.31-.42 1.585-1.025A4.953 4.953 0 0 0 12 2C9.24 2 7 4.24 7 7v4c0 2.76 2.24 5 5 5Zm0 1.5a6.48 6.48 0 0 1-6.005-4.01l-1.385.575a7.978 7.978 0 0 0 6.645 4.9v1.54H7v1.5h10v-1.5h-4.25v-1.54a7.985 7.985 0 0 0 6.645-4.9l-1.385-.575a6.486 6.486 0 0 1-6.005 4.01H12ZM16.25 2h1.5c0 1.79 1.46 3.25 3.25 3.25v1.5c-1.79 0-3.25 1.46-3.25 3.25h-1.5c0-1.79-1.46-3.25-3.25-3.25v-1.5c1.79 0 3.25-1.46 3.25-3.25Zm-.7 4c.585.375 1.08.87 1.45 1.45.375-.585.87-1.08 1.45-1.45A4.775 4.775 0 0 1 17 4.55 4.775 4.775 0 0 1 15.55 6Z", fill: "#202023" }) }) });

// src/icons/AnalyzeVoice/regular.tsx
import { Fragment as Fragment2, jsx as jsx3 } from "react/jsx-runtime";
var regular_default = /* @__PURE__ */ jsx3(Fragment2, { children: /* @__PURE__ */ jsx3("g", { transform: "scale(10.666666666666666)", children: /* @__PURE__ */ jsx3("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.75 2h-1.5c0 1.79-1.46 3.25-3.25 3.25v1.5c1.79 0 3.25 1.46 3.25 3.25h1.5c0-1.79 1.46-3.25 3.25-3.25v-1.5c-1.79 0-3.25-1.46-3.25-3.25ZM17 7.45A4.775 4.775 0 0 0 15.55 6 4.775 4.775 0 0 0 17 4.55c.37.58.865 1.075 1.45 1.45-.58.37-1.075.865-1.45 1.45ZM12 17.5a6.48 6.48 0 0 1-6.005-4.01l-1.385.575a7.978 7.978 0 0 0 6.645 4.9v1.54H7v1.5h10v-1.5h-4.25v-1.54a7.985 7.985 0 0 0 6.645-4.9l-1.385-.575a6.486 6.486 0 0 1-6.005 4.01H12Zm4.975-6A5.003 5.003 0 0 1 12 16c-2.755 0-5-2.245-5-5V7c0-2.755 2.245-5 5-5v1.5c-1.93 0-3.5 1.57-3.5 3.5v4c0 1.93 1.57 3.5 3.5 3.5a3.501 3.501 0 0 0 3.46-3h1.515Z", fill: "#202023" }) }) });

// src/icons/AnalyzeVoice/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var weights = { bold: bold_default, regular: regular_default };
var AnalyzeVoice = forwardRef2((props, ref) => /* @__PURE__ */ jsx4(IconBase_default, { ref, ...props, weights }));
AnalyzeVoice.displayName = "AnalyzeVoice";
var AnalyzeVoice_default = AnalyzeVoice;

// src/icons/ArrowRight/index.tsx
import { forwardRef as forwardRef3 } from "react";

// src/icons/ArrowRight/bold.tsx
import { Fragment as Fragment3, jsx as jsx5, jsxs } from "react/jsx-runtime";
var bold_default2 = /* @__PURE__ */ jsxs(Fragment3, { children: [
  /* @__PURE__ */ jsx5("path", { d: "M44 128H208", stroke: "currentColor", strokeWidth: "24", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ jsx5("path", { d: "M152 72L208 128L152 184", stroke: "currentColor", strokeWidth: "24", strokeLinecap: "round", strokeLinejoin: "round" })
] });

// src/icons/ArrowRight/regular.tsx
import { Fragment as Fragment4, jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var regular_default2 = /* @__PURE__ */ jsxs2(Fragment4, { children: [
  /* @__PURE__ */ jsx6("path", { d: "M48 128H208", stroke: "currentColor", strokeWidth: "16", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ jsx6("path", { d: "M160 80L208 128L160 176", stroke: "currentColor", strokeWidth: "16", strokeLinecap: "round", strokeLinejoin: "round" })
] });

// src/icons/ArrowRight/index.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var weights2 = { bold: bold_default2, regular: regular_default2 };
var ArrowRight = forwardRef3((props, ref) => /* @__PURE__ */ jsx7(IconBase_default, { ref, ...props, weights: weights2 }));
ArrowRight.displayName = "ArrowRight";
var ArrowRight_default = ArrowRight;

// src/icons/Heart/index.tsx
import { forwardRef as forwardRef4 } from "react";

// src/icons/Heart/bold.tsx
import { Fragment as Fragment5, jsx as jsx8 } from "react/jsx-runtime";
var bold_default3 = /* @__PURE__ */ jsx8(Fragment5, { children: /* @__PURE__ */ jsx8("path", { d: "M128 216s-72-44.8-96-86.4C20.8 104 36 72 68 64c20.4-4.8 39.2 4.8 48 20 8.8-15.2 27.6-24.8 48-20 32 8 47.2 40 36 65.6C200 171.2 128 216 128 216Z", stroke: "currentColor", strokeWidth: "24", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) });

// src/icons/Heart/regular.tsx
import { Fragment as Fragment6, jsx as jsx9 } from "react/jsx-runtime";
var regular_default3 = /* @__PURE__ */ jsx9(Fragment6, { children: /* @__PURE__ */ jsx9("path", { d: "M128 216s-72-44.8-96-86.4C20.8 104 36 72 68 64c20.4-4.8 39.2 4.8 48 20 8.8-15.2 27.6-24.8 48-20 32 8 47.2 40 36 65.6C200 171.2 128 216 128 216Z", stroke: "currentColor", strokeWidth: "16", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) });

// src/icons/Heart/index.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var weights3 = { bold: bold_default3, regular: regular_default3 };
var Heart = forwardRef4((props, ref) => /* @__PURE__ */ jsx10(IconBase_default, { ref, ...props, weights: weights3 }));
Heart.displayName = "Heart";
var Heart_default = Heart;
export {
  AnalyzeVoice_default as AnalyzeVoice,
  ArrowRight_default as ArrowRight,
  Heart_default as Heart,
  IconContext
};
//# sourceMappingURL=index.mjs.map