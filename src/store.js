import Vue from 'vue'
import Vuex from 'vuex'
import * as requests from './requests'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    team: []
  },

  mutations: {
    LOAD_TEAM (state, team) {
      state.team = team
    }
  },

  actions: {
    getTeam () {
      return requests.team()
    }
  }
})
