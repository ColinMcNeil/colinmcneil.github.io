import Vue from 'vue'

import {VMinTileGrid, VMinTile} from 'mina-vue';

const MinaVue = {

  install(Vue, options) {
    Vue.component('VMinTileGrid', VMinTileGrid)
    Vue.component('VMinTile', VMinTile)
  }

};

Vue.use(MinaVue);

export default MinaVue;
