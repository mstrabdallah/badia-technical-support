import Vuex from 'vuex'
import Vue from 'vue'
 
Vue.use(Vuex)


export default () => new Vuex.Store({
  state: () => ({
counter:0
  }),
  mutations: {},
  actions: {},
  modules: {

  }
})