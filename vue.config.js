// vue.config.js
module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: '@import "~@/sassPrependData.scss";',
      },
    },
  },
}
