// vue.config.js
module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/scss/variables.scss";@import "~@/assets/scss/mixins.scss";',
      },
    },
  },
}
