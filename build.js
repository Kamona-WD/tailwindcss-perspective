const esbuild = require('esbuild')

esbuild.build({
    entryPoints: ['src/index.js'],
    outfile: 'dist/tailwindcss-perspective.esm.js',
    bundle: true,
    platform: 'neutral',
    minify: process.env.NODE_ENV == 'production',
}).catch(() => process.exit(1))

esbuild.build({
    entryPoints: ['src/index.js'],
    outfile: 'dist/tailwindcss-perspective.cjs.js',
    bundle: true,
    platform: 'node',
    minify: process.env.NODE_ENV == 'production',
}).catch(() => process.exit(1))