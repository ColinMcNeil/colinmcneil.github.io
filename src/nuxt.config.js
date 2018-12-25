export default {
  plugins: [
    { src: '~plugins/mina-vue.js', ssr: false }
  ],
  modules: [
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Poiret+One', 'Inconsolata'] //Loads Lato font with weights 400 and 700
    }
  },
}
