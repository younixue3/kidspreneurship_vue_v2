<template>
  <div class="flex min-h-screen bg-blue-700">
    <div class="flex space-x-10 m-auto bg-white w-[75rem] shadow-2xl shadow-slate-900 shadow-blue-900 transition-all ease-in-out duration-300">
      <img src="@/assets/educs.jpg" class="w-1/2 object-cover">
      <div class="flex w-1/2 text-left p-8">
        <div class="m-auto">
          <h1 class="text-2xl">Welcome to Kidspreneurship</h1>
          <div class="font-light text-sm">Tunjukkan Kreativitasmu, Daftar dan Ikuti Lomba Anak Sekolahan yang Keren dan Menyenangkan!</div>
          <div v-if="$store.state.auth.access" class="grid grid-cols-3 gap-2 gap-x-5 my-5">
            <div>
              <label class="pl-1 text-xs text-gray-500">Lomba</label>
              <select class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none uppercase rounded-lg px-1 py-1" v-model="formAnggota.event" @change="eventChoose">
                <option v-for="(item, index, key) in this.event" :key="key" :value="item.id">{{ item.nama }}</option>
              </select>
            </div>
            <div class="col-span-2 col-start-1">
              <label class="pl-1 text-xs text-gray-500">Nama Kelompok</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="formAnggota.nama" type="email">
            </div>
            <div class="col-span-2 col-start-1" v-for="(item, index, key) in this.formAnggota.anggota" :key="key">
              <label class="pl-1 text-xs text-gray-500">Nama Lengkap Anggota</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="item.nama" type="email">
            </div>
            <button @click="addAnggota" class="bg-emerald-500 rounded-lg text-sm text-white col-start-1">Tambah Anggota</button>
            <button @click="daftarAnggota" class="col-start-1 p-1 my-4 text-white text-lg rounded-lg bg-blue-700 hover:bg-amber-400 transition ease-in-out duration-150">Masuk</button>
          </div>
          <div v-if="!$store.state.auth.access" class="grid grid-cols-3 gap-2 gap-x-5 my-5">
            <div class="col-span-2">
              <label class="pl-1 text-xs text-gray-500">Alamat Email</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="form.username" type="email">
            </div>
            <div class="col-start-1 col-span-2">
              <label class="pl-1 text-xs text-gray-500">Password</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="form.password" type="password">
            </div>
            <a class="col-start-1 text-xs font-medium text-blue-600 col-span-3 after:content-['_↗']" href="#">
              Belum memiliki akun ?
            </a>
            <button @click="SignIn" class="col-start-1 p-1 my-4 text-white text-lg rounded-lg bg-blue-700 hover:bg-amber-400 transition ease-in-out duration-150">Masuk</button>
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
        anggota: []
      },
      event: [],
      eventchoose: {},
    }
  },
  mounted() {

    if (this.$store.state.auth.access) {
      axios.post(process.env.VUE_APP_BASE_URL + 'api/token/refresh/', {refresh:this.$store.state.auth.refresh})
          .then(resp => {
            this.$store.state.auth.access = resp.data.access
          })
          .finally(() => {
            this.getEvent()
          })
    }
  },
  methods: {
    eventChoose: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/event/event/' + this.formAnggota.event + '/', {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.eventchoose = resp.data
          })
    },
    addAnggota: function () {

      if (this.formAnggota.event === 1) {
        console.log(this.formAnggota.anggota.length + 1)
        if (this.formAnggota.anggota.length + 1 > 5) {
          alert("Kuota anggota melebihi kapasitas")
        } else {
          this.formAnggota.anggota.push({nama:null})
          this.formAnggota.total_nominal = this.eventchoose.nominal * this.formAnggota.anggota.length
        }
      }
    },
    getEvent: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/event/event/', {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.event = resp.data.results
          })
      console.log(this.event)
    },
    SignIn: function () {

      axios.post(process.env.VUE_APP_BASE_URL + 'api/token/', this.form)
          .then(resp => {
            this.$store.commit('Authentiation', resp)
          })
          .finally(() =>{
            axios.post(process.env.VUE_APP_BASE_URL + 'api/get_profile/', this.$store.state.auth)
                .then(resp => {
                  this.$store.commit('getProfile', resp.data)
                })
          })
    },
    daftarAnggota: function () {
      axios.post(process.env.VUE_APP_BASE_URL + 'api/event/group-event/', this.formAnggota, {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            console.log(resp)
          })
    }
  }
}
</script>

<style scoped>

</style>