import pkg from './package.json'

export default [
  {
    input: 'src/app.js',
    output: {
      file: pkg.main,
      format: 'cjs'
    },
    external: [
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.peerDependencies)
    ]
  }
]
