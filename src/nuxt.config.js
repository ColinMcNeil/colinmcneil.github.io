export default {
  plugins: [
    { src: '~plugins/mina-vue.js', ssr: false }
  ],
  modules: [
    'nuxt-webfontloader',
  ],
  head: {
    title: 'Colin McNeil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The personal website, protfolio, and contact for Colin McNeil.'}
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
    ],
    htmlAttrs: {
      lang: 'en',
    },
  },
  webfontloader: {
    google: {
      families: ['Poiret+One', 'Inconsolata'] //Loads Lato font with weights 400 and 700
    }
  },
  build: {
    cache: false
  },
  
}
