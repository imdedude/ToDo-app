import Vue from 'vue'
import {uid} from 'quasar'
import addTask from "components/addTask";

const state = {
  tasks: {
    'ID1': {
      name: 'Go to shop',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:30'
    },
    'ID2': {
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '14:00'
    },
    'ID3': {
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/14',
      dueTime: '16:00'
    }
  }
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.update)
  },
  deleteTask(state, id) {
    delete state.tasks[id]
  },
  addTask(state, payload) {
    Object.assign(state.tasks, payload)
  }
}

const actions = {
  updateTask({commit}, payload) {
    commit('updateTask', payload)
  },
  deleteTask({commit}, id) {
    commit('deleteTask', id)
  },
  addTask({commit}, task) {
    let taskId = uid();
    let payload = {
      [taskId]: {
        name: task.name,
        completed: false,
        dueDate: task.dueDate,
        dueTime: task.dueTime
      }
    }
    commit('addTask', payload)
  }

}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
