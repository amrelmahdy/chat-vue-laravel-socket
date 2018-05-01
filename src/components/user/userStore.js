const state = {
  authUser: null
}

const mutations = {
  SET_USER_AUTH (state, userObj) {
    state.authUser = userObj
  },
  SET_USER_LOGOUT (state) {
    state.authUser = null
  }
}

const actions = {
  setUserObj: ({commit}, userObj) => {
    commit('SET_USER_AUTH', userObj)
  },
  removeUserObj: ({commit}) => {
    commit('SET_USER_LOGOUT')
  }
}

export default {
  state, mutations, actions
}
