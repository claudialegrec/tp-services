// import axios from 'axios'

const state = {
  listas:[
    {
      title: "Servicio 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Servicio 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Servicio 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]
};

const getters = {
  getListas: (state) => state.listas
};

const actions = {
  addServiceList({ commit }, json) {
    commit('addService', json)
  }
};

const mutations = {
  addService:(state, service) => state.servicio = service
};

export default {
    namespaced: true,
    state : {
        ...state
    },
    getters: {
        ...getters
    },
    actions: {
        ...actions
    },
    mutations: {
        ...mutations
    }
}