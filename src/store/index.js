import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    auth: {
      access: null,
      refresh: null
    },
    darkmode: false,
    modal: {
      navbar: false
    }
  },
  getters: {
  },
  mutations: {
    closeModalNavbar (state) {
      state.modal.navbar = false
      // document.body.classList.remove('removescrollbar', 'overflow-hidden')
    },
    openModalNavbar (state) {
      state.modal.navbar = true
      // document.body.classList.add('removescrollbar', 'overflow-hidden')
    },
    Authentiation (state, data) {
      state.auth.access = data.data.access
      state.auth.refresh = data.data.refresh
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
