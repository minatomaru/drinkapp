
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/sass/main.scss";`
        // additionalData: `@import "@/assets/sass/main.scss";`
      }
    }
  }
}