const esbuild = require('esbuild')
const esbuildSvelte = require("esbuild-svelte");
const sveltePreprocess = require("svelte-preprocess");

console.time('⚡ build');

esbuild.build({
        entryPoints: ["src/main.js"],
        mainFields: ["svelte", "browser", "module", "main"],
        bundle: true,
        outfile: "./public/build/bundle.js",
        minify: true,
        plugins: [
            esbuildSvelte({
                preprocess: sveltePreprocess(),
                compilerOptions: {css: true}
            }),
        ],
    })
    .catch(() => process.exit(1)).then(() => {
        console.timeEnd('⚡ build');
        console.log()
    });;