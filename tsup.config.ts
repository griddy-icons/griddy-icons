import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  format: ["esm", "cjs"],
  clean: false, // Clean is handled by the build script sequence now
  target: "es2019",
  external: ["react"],
  sourcemap: false,
  minify: false,
  bundle: false,
});
