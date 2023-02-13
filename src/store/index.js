import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import axios from "axios";

export default createStore({
  state: {
    auth: {
      access: null,
      refresh: null
    },
    profile: {},
    profileEvent: null,
    darkmode: false,
    modal: {
      navbar: false,
      popup: {
        status: false,
        content: null
      },
    },
    formside: {

    }
  },
  getters: {
  },
  mutations: {
    getProfile (state, data) {
      state.profile = data
      console.log(state.profile)
    },
    closeModal (state) {
      state.modal.popup.status = false
      document.body.classList.remove('removescrollbar', 'overflow-hidden')
    },
    openModal (state, url) {
      state.modal.popup.content = url
      state.modal.popup.status = true
      document.body.classList.add('removescrollbar', 'overflow-hidden')
    },
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
    },
    Logout (state) {
      state.auth.access = null
      state.auth.refresh = null
      state.profile = null
    },
    RefreshToken (state) {
      axios.post(process.env.VUE_APP_BASE_URL + 'api/token/refresh/', {refresh:state.auth.refresh})
          .then(resp => {
            state.auth.access = resp.data.access
          })
    },
    pushFormSide (state, data) {
      state.formside = {}
      state.formside = data
    },
    removeFormSide(state) {
      state.formside = {}
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
