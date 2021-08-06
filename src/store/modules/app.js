const appModule = {
  namespaced: true,
  state: {
    currentActiveTabIndex: 0,
    popup: false
  },

  mutations: {
    SET_USER_NAME(state, name) {
      state.userName = name
    },

    setCurrentActiveTabIndex(state, index) {
      state.currentActiveTabIndex = index
    },

    setPopup(state, { value }) {
      state.popup = value
    }
  },

  actions: {
    setUserName({ commit }, name) {
      commit('SET_USER_NAME', name)
    }
  }
}

export default appModule
