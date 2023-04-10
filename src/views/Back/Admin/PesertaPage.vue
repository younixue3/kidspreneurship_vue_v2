<template>
  <div class="flex flex-col space-y-5">
    <div class="flex justify-between">
      <div class="w-1/3 text-left">
        <label class="pl-1 text-xs text-gray-200">Cari</label>
        <input
            class="w-full border text-black border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1"
            v-model="this.search" @input="searchInput" type="text">
      </div>
      <div class="w-1/3 flex space-x-2">
        <div class="ml-auto mt-auto">
          <button v-if="prevpagi" @click="prevPagi" class="rounded-lg bg-gray-100 border border-gray-400 text-black w-8 h-8"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
          <button v-if="nextpagi" @click="nextPagi" class="rounded-lg bg-gray-100 border border-gray-400 text-black w-8 h-8"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
        </div>
      </div>
    </div>
    <div class="rounded-lg border-gray-300 border-2 bg-gray-700">
      <table class="w-full text-xs md:text-base mb-4 rounded-lg">
        <thead class="text-left border-b bg-gray-600 rounded-lg">
        <tr class=" rounded-lg">
          <th class="pl-7 py-3 border-r rounded-tl-lg">Peserta</th>
          <th class="pl-4 py-3 border-r">Ponsel</th>
          <th class="pl-4 py-3 border-r">Asal Sekolah</th>
          <th class="pl-4 py-3 border-r">Lomba</th>
          <th class="pl-4 py-3 border-r">Bukti Pembayaran</th>
          <th class="pl-3.5 py-3 w-10  rounded-tr-lg">#</th>
        </tr>
        </thead>
        <tbody class="text-left">
        <tr v-for="(item, key) in this.pesertafilter" :key="key" class="border-y border-gray-400 h-10 py-3">
          <td class="truncate px-2 py-3 border-r">
            <div class="text-base">{{ item.first_name + ' ' + item.last_name }}</div>
            <div class="text-xs">{{ item.email }}</div>
          </td>
          <td class="truncate pl-4 border-r">
            {{ item.no_hp }}
          </td>
          <td class="truncate pl-4 border-r">
            {{ item.asal_sekolah }}
          </td>
          <td class="truncate pl-4 border-r">
            {{ item.group_event ? item.group_event.event == 1 ? 'Kidspreneurship 2K23' : 'Lomba Pendukung' : null }}
          </td>
          <td class="truncate pl-4 border-r">
            <button class="font-normal text-white rounded-lg px-2 uppercase mr-2"
                    :class="item.transaksi ? item.transaksi.status == 'pembayaran' ? 'bg-red-500' : item.transaksi.status == 'proses' ? 'bg-blue-500' : 'bg-green-500' : null">
              {{ item.transaksi ? item.transaksi.status : null }}
            </button>
            <a v-if="item.transaksi ? item.transaksi.bukti_pembayaran : false" :href="item.transaksi ? item.transaksi.bukti_pembayaran : '#'" target="_blank"><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></a>
          </td>
          <td class="pl-1">
            <button v-if="item.transaksi ? item.transaksi.bukti_pembayaran : false" class="hover:bg-gray-200 text-center rounded-lg w-7 h-7" @click="menuFormSide(item.transaksi.id, item.transaksi.bukti_pembayaran)">
              <font-awesome-icon icon="fa-solid fa-ellipsis-vertical"/>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <ModalComponent>
    <img class="w-full h-[35rem] object-contain" :src="this.$store.state.modal.popup.content">
  </ModalComponent>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import axios from "axios";
import ModalComponent from "@/components/Back/Widget/ModalComponent";

export default {
  name: "PesertaPage",
  components: {
    ModalComponent,
    FontAwesomeIcon
  },
  data() {
    return {
      peserta: [],
      pesertafilter: [],
      search: '',
      nextpagi: null,
      prevpagi: null
    }
  },
  beforeMount() {
    this.$store.commit('RefreshToken')
  },
  mounted() {
    this.getpeserta()
  },
  methods: {
    searchInput: function () {
      if (this.search != '' && this.search) {
        this.pesertafilter = this.peserta.filter((item) => {
          return item.username.toUpperCase().includes(this.search.toUpperCase()) || item.email.toUpperCase().includes(this.search.toUpperCase()) || item.asal_sekolah.toUpperCase().includes(this.search.toUpperCase()) ||  item.transaksi.status.toUpperCase().includes(this.search.toUpperCase())
        })
      } else {
        return this.pesertafilter = this.peserta
      }
    },
    prevPagi: function () {
      axios.get(this.prevpagi, {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.peserta = resp.data.results
            this.pesertafilter = resp.data.results
            this.nextpagi = resp.data.next
            this.prevpagi = resp.data.previous
            console.log(resp.data.results)
          })
    },
    nextPagi: function () {
      axios.get(this.nextpagi, {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.peserta = resp.data.results
            this.pesertafilter = resp.data.results
            this.nextpagi = resp.data.next
            this.prevpagi = resp.data.previous
            console.log(resp.data.results)
          })
    },
    getpeserta: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/peserta/', {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.peserta = resp.data.results
            this.pesertafilter = resp.data.results
            this.nextpagi = resp.data.next
            this.prevpagi = resp.data.previous
            console.log(resp.data.results)
          })
    },
    menuFormSide: function (id, bukti_pembayaran) {
      this.$store.commit('pushFormSide',
          {
            url: 'api/transaksi/' + id + '/',
            methode: 'put',
            for: 'transaksi',
            data: {
              status: {
                content: 'terverifikasi',
                type: 'hidden',
                name: 'status'
              },
              image: {
                content: bukti_pembayaran,
                type: 'image',
                name: 'image'
              }
            }
          }
      )
    }
  }
}
</script>

<style scoped>

</style>