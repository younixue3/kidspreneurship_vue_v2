<template>
  <div class="flex justify-between">
    <div class="text-left">
      <button @click="addMenuFormSide" class="bg-emerald-500 px-2 text-white">Add</button>
    </div>
    <div class="w-1/3 flex space-x-2">
      <div class="ml-auto mt-auto">
        <button v-if="prevpagi" @click="prevPagi" class="rounded-lg bg-gray-100 border border-gray-400 text-black w-8 h-8"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
        <button v-if="nextpagi" @click="nextPagi" class="rounded-lg bg-gray-100 border border-gray-400 text-black w-8 h-8"><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
      </div>
    </div>
  </div>
  <div class="flex flex-col space-y-5">
    <div class="bg-gray-600 flex p-2 px-3" v-for="(item, index, key) in this.juri" :key=key>
      <div class="flex w-full p-5 space-x-8">
        <img class="bg-white h-60 w-1/3 object-cover" :src="item.image">
        <div class="w-2/3 text-left">
          <h1 class="text-2xl mb-10">{{item.nama}}</h1>
          <p class="w-96 h-40 overflow-hidden" v-html="item.deskripsi"></p>
        </div>
      </div>
      <div>
        <button
            @click="menuFormSide(item.id,item.nama, item.deskripsi, item.image, item.video)">
          <font-awesome-icon class="text-xl" icon="fa-solid fa-ellipsis"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import axios from "axios";

export default {
  name: "BackJuriPage",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      juri: [],
      prevpagi: null,
      nextpagi: null
    }
  },
  mounted() {
    axios.post(process.env.VUE_APP_BASE_URL + 'api/token/refresh/', {refresh: this.$store.state.auth.refresh})
        .then(resp => {
          this.$store.state.auth.access = resp.data.access
        })
        .finally(() => {
          this.getjuri()
        })
  },
  methods: {
    prevPagi: function () {
      axios.get(this.prevpagi, {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.juri = resp.data.results
            this.nextpagi = resp.data.next
            this.prevpagi = resp.data.previous
          })
    },
    nextPagi: function () {
      axios.get(this.nextpagi, {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.juri = resp.data.results
            this.nextpagi = resp.data.next
            this.prevpagi = resp.data.previous
          })
    },
    getjuri: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/event/juri/', {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.juri = resp.data.results
            this.nextpagi = resp.data.next
            this.prevpagi = resp.data.previous
          })
    },
    addMenuFormSide: function () {
      this.$store.commit('pushFormSide',
          {
            url: 'api/event/juri/',
            methode: 'post',
            data: {
              nama: {
                content: null,
                type: 'text',
                name: 'nama'
              },
              deskripsi: {
                content: null,
                type: 'richtext',
                name: 'deskripsi'
              },
              image: {
                content: null,
                type: 'file',
                name: 'image'
              },
              video: {
                content: null,
                type: 'video',
                name: 'video'
              }
            }
          }
      )
    },
    menuFormSide: function (id, nama, deskripsi, image, video) {
      this.$store.commit('pushFormSide',
          {
            url: 'api/event/juri/' + id + '/',
            methode: 'put',
            data: {
              nama: {
                content: nama,
                type: 'text',
                name: 'nama'
              },
              deskripsi: {
                content: deskripsi,
                type: 'richtext',
                name: 'deskripsi'
              },
              image: {
                content: image,
                type: 'file',
                name: 'image'
              },
              video: {
                content: video,
                type: 'video',
                name: 'video'
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