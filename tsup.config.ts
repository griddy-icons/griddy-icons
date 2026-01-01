import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!src/scripts/**/*"],
  dts: false,
  format: ["esm", "cjs"],
  clean: false, // Clean is handled by the build script sequence now
  target: "es2019",
  external: ["react"],
  sourcemap: false,
  minify: false,
  bundle: false,
});
