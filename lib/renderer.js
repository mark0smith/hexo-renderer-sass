'use strict'

const sass = require('node-sass')

module.exports = (ext) => function (data) {
  // support global and theme-specific config
  const userConfig = Object.assign({},
    this.theme.config.node_sass || {},
    this.config.node_sass || {}
  )

  const config = Object.assign({}, {
    data: data.text,
    file: data.path,
    outputStyle: 'nested',
    sourceComments: false,
    indentedSyntax: (ext === 'sass')
  }, userConfig)

  try {
    // node-sass result object:
    // https://github.com/sass/node-sass#result-object
    const result = sass.renderSync(config)
    // result is now Buffer instead of String
    // https://github.com/sass/node-sass/issues/711
    return result.css.toString()
  } catch (error) {
    console.error(error.toString())
    throw error
  }
}
