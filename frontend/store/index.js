export const mutations = {
  CLEAR_STATE(state) {
    state.titulo = ''
    localStorage.removeItem('vuex')
  },
}

export const getters = {
  urlHostApi: (state) => {
    if (process.env.NODE_ENV === 'production') {
      return process.env.hostApi
    } else {
      return `http://127.0.0.1:3001`
    }
  },
}

export const actions = {}
