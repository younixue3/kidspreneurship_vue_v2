<template>
  <div class="flex h-screen bg-blue-700">
    <div class="flex space-x-10 m-auto bg-white w-[75rem] shadow-2xl shadow-slate-900 shadow-blue-900">
      <img src="@/assets/educs.jpg" class="w-1/2 object-cover">
      <div class="flex w-1/2 text-left p-8">
        <div class="m-auto">
          <h1 class="text-2xl">Welcome to Kidspreneurship</h1>
          <div class="font-light text-sm">Tunjukkan Kreativitasmu, Daftar dan Ikuti Lomba Anak Sekolahan yang Keren dan Menyenangkan!</div>
          <div class="grid grid-cols-3 gap-2 gap-x-5">
            <div>
              <label class="pl-1 text-xs text-gray-500">Nama Depan</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="form.first_name" type="text">
            </div>
            <div>
              <label class="pl-1 text-xs text-gray-500">Nama Belakang</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="form.last_name" type="text">
            </div>
            <div class="col-start-1">
              <label class="pl-1 text-xs text-gray-500">Nomor Handpone</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1"  v-model="form.no_hp" type="number">
            </div>
            <div class="col-span-2">
              <label class="pl-1 text-xs text-gray-500">Alamat Email</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="form.email" type="email">
            </div>
            <div>
              <label class="pl-1 text-xs text-gray-500">Jenjang</label>
              <select class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none uppercase rounded-lg px-1 py-1" v-model="form.jenjang">
                <option>smp</option>
                <option>sma</option>
                <option>sd</option>
                <option>tk</option>
              </select>
            </div>
            <div class="col-start-1 col-span-2">
              <label class="pl-1 text-xs text-gray-500">Asal Sekolah</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="form.asal_sekolah" type="text">
            </div>
            <div class="col-start-1">
              <label class="pl-1 text-xs text-gray-500">Provinsi</label>
              <select class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="form.provinsi">
                <option v-for="(item, index, key) in provinsi" :value="item.id" :key="key">{{item.provinsi}}</option>
              </select>
            </div>
            <div>
              <label class="pl-1 text-xs text-gray-500">Kota</label>
              <select class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="form.kota">
                <option v-for="(item, index, key) in kota_kab" :value="item.id"  :key="key">{{item.kota}}</option>
              </select>
            </div>
            <div class="col-start-1 col-span-2">
              <label class="pl-1 text-xs text-gray-500">Password</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="form.password" type="password">
            </div>
            <div class="col-start-1 col-span-2">
              <label class="pl-1 text-xs text-gray-500">Konfirmasi Password</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" v-model="form.konfirmasi_password" type="password">
            </div>
            <a class="col-start-1 text-xs font-medium text-blue-600 col-span-3 after:content-['_↗']" href="#">
              Sudah memiliki akun ?
            </a>
            <button @click="signup" class="col-start-1 p-1 my-4 text-white text-lg rounded-lg bg-blue-700 hover:bg-amber-400 transition ease-in-out duration-150">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUpPage",
  data() {
    return {
      provinsi: [],
      kota_kab: [],
      form: {
        first_name: null,
        last_name: null,
        no_hp: null,
        email: null,
        jenjang: null,
        asal_sekolah: null,
        provinsi: null,
        kota: null,
        password: null,
        konfirmasi_password: null
      }
    }
  },
  mounted() {
    this.get_provinsi()
    this.get_kota_kab()
  },
  methods: {
    signup: function () {
      axios.post(process.env.VUE_APP_BASE_URL + 'api/auth/registerAccount/', this.form)
          .then(resp => {
          })
          .finally(() => {
            this.$router.push('/signin')
          })
    },
    get_provinsi: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/get_provinsi/')
          .then(resp => {
            this.provinsi = resp.data
      })
    },
    get_kota_kab: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/get_kota_kab/')
          .then(resp => {
            this.kota_kab = resp.data
          })
    }
  },
}
</script>

<style scoped>

</style>