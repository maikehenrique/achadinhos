export const mutations = {
  CLEAR_STATE(state) {
    state.titulo = ''
    localStorage.removeItem('vuex')
  },
}

export const getters = {
  urlHostApi: (state) => {
    return process.env.hostApi
  },
}

export const actions = {}
