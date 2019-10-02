import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // co2List: null,
    adventureJSON: null,
    pickedAdventure: null,
    isLoading: false
  },
  mutations: {
    updateAdventure (state, data) {
      state.adventureJSON = data
    }
    // updateCO2 (state, data) {
    //   state.co2List = data
    // }
  },
  actions: {
    // Not using this at the moment, but keeping in case I want it later
    // getAdventureList ({ commit }) {
    //   axios.get('/adventures.json')
    //     .then((res) => {
    //         commit('updateAdventure', res.data)
    //     })
    //     .catch((error) => {
    //         console.log('header get adventures error: ' + error)
    //     })
    //     .finally(event => {
    //         console.log('finally')
    //     })
    // }
    // Not using this at the moment, but keeping in case I want it later
  //   getCO2List ({ commit }) {
  //     // http://www.hqcasanova.com/co2/
  //     // https://www.esrl.noaa.gov/gmd/webdata/ccgg/trends/rss.xml
  //     axios.get('http://www.hqcasanova.com/co2/')
  //       .then((res) => {
  //         console.log(res)
  //       })
  //       .catch((error) => {
  //         console.log('get co2 xml error: ' + error)
  //       })
  //       .finally(event => {
  //         console.log('finally')
  //       })
  //   }
  },
  getters: {
    adventureList (state) {
      return state.adventureJSON
    },
    // co2List (state) {
    //   return state.co2List
    // },
    isLoading (state) {
      return state.isLoading
    }
  }
})
