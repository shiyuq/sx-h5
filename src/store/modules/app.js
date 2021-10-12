import cameraService from '../../api/camera-service'
const appModule = {
  namespaced: true,
  state: {
    currentActiveTabIndex: 0,
    popup: false,
    cameras: null
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
    },
    setCameras(state, data) {
      state.cameras = data
    }
  },

  actions: {
    async setCameras({ commit }, params) {
      const { limit = 10, offset = 0, id = '' } = params
      const { data } = await cameraService.getLueyingList({ limit, offset, id })
      commit('setCameras', data)
    },
    setUserName({ commit }, name) {
      commit('SET_USER_NAME', name)
    }
  }
}

export default appModule
