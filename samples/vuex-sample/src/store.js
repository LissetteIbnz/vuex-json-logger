import Vue from 'vue';
import Vuex from 'vuex';
import logger from '../../../lib/src/VuexJsonLogger';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    count: 0,
  },
  mutations: {
    increaseCounter(state) {
      state.count++;
    },
    decreaseCounter(state) {
      state.count--;
    },
    setCounter(state, payload) {
      state.count = payload;
    },
    hola(){},
    exportToJson(state) {},
  },
  plugins: [logger({mutationListener: "hola"})],
});
