import { createStore } from 'vuex'

export default createStore({
  state: {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
