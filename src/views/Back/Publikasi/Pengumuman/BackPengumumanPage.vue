<template>
  <div class="text-left">
    <button @click="addMenuFormSide" class="bg-emerald-500 px-2 text-white">Add</button>
  </div>
  <div class="flex flex-col space-y-5">
    <div class="bg-gray-600 flex p-2 px-3" v-for="(item, index, key) in this.pengumuman" :key=key>
      <div class="flex w-full p-5 space-x-8">
        <img class="bg-white h-60 w-1/3 object-cover" :src="item.file">
        <div class="w-2/3 text-left">
          <h1 class="text-2xl mb-10">{{item.judul}}</h1>
          <p class="w-96 h-40" v-html="item.isi"></p>
        </div>
      </div>
      <div>
        <button
            @click="menuFormSide(item.id,item.judul, item.isi, item.file)">
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
  name: "BackPengumumanPage",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      pengumuman: []
    }
  },
  beforeMount() {
    this.$store.commit('RefreshToken')
  },
  mounted() {
    this.getPengumuman()
  },
  methods: {
    getPengumuman: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/publikasi/pengumuman/', {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.pengumuman = resp.data.results
          })
      console.log(this.pengumuman)
    },
    addMenuFormSide: function () {
      this.$store.commit('pushFormSide',
          {
            url: 'api/publikasi/pengumuman/',
            methode: 'post',
            data: {
              judul: {
                content: null,
                type: 'text',
                name: 'judul'
              },
              isi: {
                content: null,
                type: 'richtext',
                name: 'isi'
              },
              file: {
                content: null,
                type: 'file',
                name: 'file'
              }
            }
          }
      )
    },
    menuFormSide: function (id, judul, isi, file) {
      this.$store.commit('pushFormSide',
          {
            url: 'api/publikasi/pengumuman/' + id + '/',
            methode: 'put',
            data: {
              judul: {
                content: judul,
                type: 'text',
                name: 'judul'
              },
              isi: {
                content: isi,
                type: 'text',
                name: 'isi'
              },
              file: {
                content: file,
                type: 'file',
                name: 'file'
              }
            }
          }
      )
      console.log(this.$store.state.formside)
    }
  }
}
</script>

<style scoped>

</style>