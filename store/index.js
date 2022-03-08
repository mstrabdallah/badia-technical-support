import Vue from "vue";
import Vuex from "vuex";

import todos from "./modules/todos";
import login from "./modules/login";

// Load Vuex
Vue.use(Vuex);

// Create store
export default () => new Vuex.Store({
  modules: {
    todos,
    login
  }
});