<template>
  <div class="flex min-h-screen bg-blue-700" :style="'background-image: url(' + require(`@/assets/3.png`) +')'">
    <div
        class="flex space-x-10 m-auto bg-white w-[75rem] shadow-2xl shadow-slate-400 transition-all ease-in-out duration-300">
      <img src="@/assets/loginpage.png" class="w-2/3 object-comt">
      <div class="flex w-1/2 text-left p-8">
        <div class="m-auto w-full">
          <h1 class="text-2xl">Welcome to
            Kidspreneurship</h1>
          <div v-if="$store.state.profile ? !$store.state.profile.transaksi : true" class="font-light text-sm">Tunjukkan
            Kreativitasmu, Daftar dan Ikuti Lomba Anak Sekolahan yang Keren dan Menyenangkan!
          </div>
          <div v-if="!$store.state.auth.access" class="grid grid-cols-3 gap-2 gap-x-5 my-5">
            <div class="col-span-2">
              <label class="pl-1 text-xs text-gray-500">Alamat Email</label>
              <input
                  class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1"
                  v-model="form.username" type="email">
            </div>
            <div class="col-start-1 col-span-2">
              <label class="pl-1 text-xs text-gray-500">Password</label>
              <input
                  class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1"
                  v-model="form.password" type="password">
            </div>
            <a class="col-start-1 text-xs font-medium text-blue-600 col-span-3 after:content-['_↗']" href="#">
              Belum memiliki akun ?
            </a>
            <button @click="SignIn"
                    class="col-start-1 p-1 my-4 text-white text-lg rounded-lg bg-blue-700 hover:bg-amber-400 transition ease-in-out duration-150">
              Masuk
            </button>
            <router-link to="/"
                    class="p-1 my-4 text-blue-700 text-lg rounded-lg bg-white border px-2 border-blue-700 transition ease-in-out duration-150">
              Kembali
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import store from "@/store/index.js";

export default {
  name: "SignInPage",
  data() {
    return {
      form: {
        username: null,
        password: null
      },
      formAnggota: {
        nama: null,
        event: null,
        total_nominal: null,
        anggota: [
          {nama: null},
          {nama: null},
          {nama: null},
          {nama: null},
          {nama: null},
        ]
      },
      event: [],
      eventchoose: {},
    }
  },
  mounted() {
    // this.$store.commit('Logout')
    if (this.$store.state.auth.access) {
      axios.post(process.env.VUE_APP_BASE_URL + 'api/token/refresh/', {refresh: this.$store.state.auth.refresh})
          .then(resp => {
            this.$store.state.auth.access = resp.data.access
          })
          .finally(() => {
            this.getEvent()
            if (this.$store.state.profile.is_staff) {
              this.$router.push('')
            }
          })
    }
  },
  methods: {
    getEvent: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/event/event/', {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.event = resp.data.results
          })
    },
    SignIn: function () {
      axios.post(process.env.VUE_APP_BASE_URL + 'api/token/', this.form)
          .then(resp => {
            this.$store.commit('Authentiation', resp)
          })
          .finally(() => {
            axios.post(process.env.VUE_APP_BASE_URL + 'api/get_profile/', this.$store.state.auth)
                .then(resp => {
                  this.$store.commit('getProfile', resp.data)
                })
                .finally(() => {
                  this.getEvent()
                  if (this.$store.state.profile.is_staff) {
                    this.$router.push('/dashboard')
                  } else {
                    this.$router.push('/profile')
                  }
                })
          })
    },
  }
}
</script>

<style scoped>

</style>