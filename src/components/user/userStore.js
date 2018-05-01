const state = {
  authUser: null
}

const mutations = {
  SET_USER_AUTH (state, userObj) {
    state.authUser = userObj
  }
}

const actions = {
  setUserObj: ({commit}, userObj) => {
    commit('SET_USER_AUTH', userObj)
  }
}

export default {
  state, mutations, actions
}
