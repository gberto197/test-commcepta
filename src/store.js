import Vue from 'vue'
import Vuex from 'vuex'
import * as requests from './requests'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    team: [],
    people: []
  },

  mutations: {
    LOAD_TEAM (state, team) {
      state.team = team
    },

    SELECT_PEOPLE (state, people) {
      state.people = people
    }
  },

  actions: {
    getTeam () {
      return requests.team()
    }
  }
})
