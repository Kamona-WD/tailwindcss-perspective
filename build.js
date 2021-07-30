const esbuild = require('esbuild')

esbuild
  .build({
    watch: process.argv.includes('--watch'),
    entryPoints: ['src/index.js'],
    outfile: 'dist/tailwindcss-perspective.esm.js',
    bundle: true,
    platform: 'neutral',
    // minify: !process.argv.includes('--watch'),
  })
  .catch(() => process.exit(1))

esbuild
  .build({
    watch: process.argv.includes('--watch'),
    entryPoints: ['src/index.js'],
    outfile: 'dist/tailwindcss-perspective.cjs.js',
    bundle: true,
    platform: 'node',
    // minify: !process.argv.includes('--watch'),
  })
  .catch(() => process.exit(1))
