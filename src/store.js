import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adventureJSON: null,
    pickedAdventure: null,
    isLoading: false
  },
  mutations: {
    updateAdventure(state, data){
      state.adventureJSON = data
    }
  },
  actions: {
    getAdventureList ({ commit }) {
      axios.get('/adventures.json')
        .then((res) => {
            //console.log(JSON.parse(res.data))
            //console.log(res.data)
            
            commit('updateAdventure', res.data)
        })
        .catch((error) => {
            console.log('header get adventures error: ' + error)
        })
        .finally(event => {
            console.log('finally')
        })
    }
  },
  getters: {
    adventureList (state) {
      return state.adventureJSON
    },
    isLoading (state) {
      return state.isLoading
    }
  }
})
