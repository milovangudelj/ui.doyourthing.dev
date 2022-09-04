import fs from "fs";
import path from "path";
import esbuild from "esbuild";
import chalk from "chalk";
import { resolveFiles } from "./resolve-files.mjs";

const src = "./src/components";
const dst = "./dist";

// Create dist before build if not exist
const dist = path.join(process.cwd(), "dist");

if (!fs.existsSync(dist)) {
	fs.mkdirSync(dist);
}

// get files and print them for reference
const files = resolveFiles(src, "/**/*.{ts,tsx}");
console.log(`Files:\n  ${chalk.bold(files.join("\n  "))}`);

// shared build options between cjs and esm outputs
const shared = {
	// define: { global: "window" },
	sourcemap: true,
	platform: "browser",
	target: ["es2019"],
	minify: true,
	pure: ["React.createElement"],
};

// esm output
esbuild
	.build({
		...shared,
		entryPoints: files,
		format: "esm",
		outdir: dst,
		outbase: src,
	})
	.catch(() => process.exit(1));

// cjs output bundle
esbuild
	.build({
		...shared,
		entryPoints: [`${src}/index.ts`],
		format: "cjs",
		outfile: `${dst}/index.cjs`,
		bundle: true,
		external: ["react", "react-dom", "next", "classnames", "phosphor-react"],
	})
	.catch(() => process.exit(1));
