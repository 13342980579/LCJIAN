import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
  },
  getters,
  state,
  mutations
})

export default store
