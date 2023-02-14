<template>
  <div class="flex min-h-screen bg-blue-700">
    <div
        class="flex space-x-10 m-auto bg-white w-[75rem] shadow-2xl shadow-slate-900 shadow-blue-900 transition-all ease-in-out duration-300">
      <img src="@/assets/educs.jpg" class="w-1/2 object-cover">
      <div class="flex w-1/2 text-left p-8">
        <div class="m-auto w-full">
          <h1 class="text-2xl">Welcome to
            Kidspreneurship</h1>
          <div v-if="$store.state.profile.transaksi" class="font-light text-sm">Tunjukkan
            Kreativitasmu, Daftar dan Ikuti Lomba Anak Sekolahan yang Keren dan Menyenangkan!
          </div>
          <div v-if="$store.state.profile ? $store.state.profile.transaksi : false"
               class="grid grid-cols-3 gap-2 gap-x-5 my-5">
            <div class="col-span-3 text-4xl">
              Detail Pembayaran
            </div>
            <div class="font-bold text-2xl col-span-3">
              <div class="my-4">
                <div>
                  <label class="pl-1 text-xs text-gray-500">Status Pembayaran</label>
                </div>
                <button class="font-normal text-white rounded-lg px-2 uppercase"
                        :class="$store.state.profile.transaksi.status == 'pembayaran' ? 'bg-red-500' : $store.state.profile.transaksi.status == 'proses' ? 'bg-blue-500' : 'bg-green-500'">
                  {{ $store.state.profile.transaksi.status }}
                </button>
              </div>
              <div>
                Rp. {{ $filters.formatNumber($store.state.profile.group_event.total_nominal) }}
              </div>
              <div class="my-2">
                <div>
                  <label class="pl-1 text-xs text-gray-500">Deskripsi</label>
                </div>
                <p class="text-base font-normal">{{ $store.state.profile.transaksi.deskripsi }}</p>
              </div>
              <div class="col-span-2" v-if="$store.state.profile.transaksi.status == 'pembayaran'">
                <label class="pl-1 text-xs text-gray-500">Input Pembayaran</label>
                <input
                    class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    @change="imageInput(index)" type="file">
              </div>
            </div>
            <button v-if="$store.state.profile.transaksi.status == 'pembayaran'" @click="inputPembayaran"
                    class="col-start-1 p-1 my-4 text-white text-lg rounded-lg bg-blue-700 hover:bg-amber-400 transition ease-in-out duration-150">
              Pembayaran
            </button>
          </div>
          <div v-if="$store.state.auth.access && $store.state.profile ? !$store.state.profile.transaksi : false"
               class="grid grid-cols-3 gap-2 gap-x-5 my-5">
            <div>
              <label class="pl-1 text-xs text-gray-500">Lomba</label>
              <select
                  class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none uppercase rounded-lg px-1 py-1"
                  v-model="formAnggota.event" @change="eventChoose">
                <option v-for="(item, index, key) in this.event" :key="key" :value="item.id">{{ item.nama }}</option>
              </select>
            </div>
            <div v-if="formAnggota.event" class="col-span-2 col-start-1">
              <label class="pl-1 text-xs text-gray-500">Nama Kelompok</label>
              <input
                  class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1"
                  v-model="formAnggota.nama" type="email">
            </div>
            <div v-if="formAnggota.event" class="col-start-1 col-span-3 mt-5 font-bold">Anggota Kelompok</div>
            <div v-if="formAnggota.event" class="col-span-2 col-start-1" v-for="(item, index, key) in this.formAnggota.anggota" :key="key">
              <label class="pl-1 text-xs text-gray-500">Nama Lengkap Anggota</label>
              <input
                  class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1"
                  v-model="item.nama" type="email">
            </div>
            <button v-if="formAnggota.event" @click="addAnggota" class="bg-emerald-500 rounded-lg text-sm text-white col-start-1">Tambah
              Anggota
            </button>
            <button v-if="formAnggota.event" @click="hapusAnggota" class="bg-rose-500 rounded-lg text-sm text-white">Hapus Anggota
            </button>
            <button v-if="formAnggota.event" @click="daftarAnggota"
                    class="col-start-1 p-1 my-4 text-white text-lg rounded-lg bg-blue-700 hover:bg-amber-400 transition ease-in-out duration-150">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SliderComponent from "@/components/Front/SliderComponent";
import axios from "axios";
export default {
  name: "Signin",
  data() {
    return {
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
  components: {
    SliderComponent
  },
  mounted() {
    axios.post(process.env.VUE_APP_BASE_URL + 'api/token/refresh/', {refresh: this.$store.state.auth.refresh})
        .then(resp => {
          this.$store.state.auth.access = resp.data.access
        })
        .catch(e => {
          this.$store.commit('Logout')
        })
        .finally(() => {
          this.getEvent()
          if (this.$store.state.profile.is_staff) {
            this.$router.push('')
          }
        })
  },
  methods: {
    getEvent: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/event/event/', {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.event = resp.data.results
          })
    },
    eventChoose: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/event/event/' + this.formAnggota.event + '/', {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.eventchoose = resp.data
          })
    },
    addAnggota: function () {
      if (this.formAnggota.event === 1) {
        if (this.formAnggota.anggota.length + 1 > 10) {
          alert("Kuota anggota melebihi kapasitas")
        } else {
          this.formAnggota.anggota.push({nama: null})
        }
      }
    },
    hapusAnggota: function () {
      if (this.formAnggota.event === 1) {
        if (this.formAnggota.anggota.length <= 5) {
          alert("Kuota anggota mencapai batas minimal")
        } else {
          this.formAnggota.anggota.splice(0, 1)
          console.log(this.formAnggota.anggota, this.formAnggota.anggota.length + 1 )
        }
      }
    },
    daftarAnggota: function () {
      this.formAnggota.total_nominal = this.eventchoose.nominal
      axios.post(process.env.VUE_APP_BASE_URL + 'api/event/group-event/', this.formAnggota, {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.$store.state.profileEvent = resp.data
          })
          .finally(() => {
            axios.post(process.env.VUE_APP_BASE_URL + 'api/get_profile/', this.$store.state.auth)
                .then(resp => {
                  this.$store.commit('getProfile', resp.data)
                })
                .finally(() => {
                  this.$router.push('/profile')
                })
          })
    },
    imageInput: function (index) {
      this.$store.state.profile.transaksi.butki_pembayaran = event.target.files[0]
    },
    inputPembayaran: function () {
      const formData = new FormData()
      formData.append('bukti_pembayaran', this.$store.state.profile.transaksi.butki_pembayaran)
      formData.append('status', 'proses')
      axios.put(process.env.VUE_APP_BASE_URL + 'api/transaksi/' + this.$store.state.profile.transaksi.id + '/', formData, {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            axios.post(process.env.VUE_APP_BASE_URL + 'api/get_profile/', this.$store.state.auth)
                .then(resp => {
                  this.$store.commit('getProfile', resp.data)
                })
          })
    },
  }
}
</script>

<style scoped>

</style>