import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    addList(state){
      var json = {
        title: "",
        description: "",
      }
      state.listas.push(json)
    },
    deleteList(state, index){
      state.listas.splice(index, 1)
    },
    addTask(state, index){
      var json = {
        text:"",
        progress: 0,
        image:null,
        tag:null
      }
      state.listas[index].tareas.push(json)
    },
    deleteTask(state, positions){
      state.listas[positions.lista].tareas.splice(positions.index, 1)
    },
    updateTask(state, task){

      state.listas[task.listaIndex].tareas[task.tareaIndex].text = task.text
      state.listas[task.listaIndex].tareas[task.tareaIndex].progress = task.progress
      state.listas[task.listaIndex].tareas[task.tareaIndex].image = task.image
      state.listas[task.listaIndex].tareas[task.tareaIndex].tag = task.tag

    }
  },
  actions: {
    
  },
  modules: {

  }
})