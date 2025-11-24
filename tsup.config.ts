import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	dts: true,
	format: ["esm", "cjs"],
	clean: true,
	target: "es2019",
	external: ["react"],
	sourcemap: true,
	minify: false
});


