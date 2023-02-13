<template>
  <div class="text-left">
    <button @click="addMenuFormSide" class="bg-emerald-500 px-2 text-white">Add</button>
  </div>
  <div class="flex flex-col space-y-5">
    <div class="bg-gray-600 flex p-2 px-3" v-for="(item, index, key) in this.event" :key=key>
      <div class="flex w-full p-5 space-x-8">
        <img class="bg-white h-60 w-1/3 object-cover" :src="item.logo">
        <div class="w-2/3 text-left">
          <h1 class="text-2xl mb-10">{{item.nama}}</h1>
          <p class="w-96 h-32" v-html="item.deskripsi"></p>
          <div>Nominal : Rp. {{$filters.formatNumber(item.nominal)}}</div>
        </div>
      </div>
      <div>
        <button
            @click="menuFormSide(item.id,item.nama, item.deskripsi, item.logo, item.nominal)">
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
  name: "BackEventPage",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      event: []
    }
  },
  mounted() {
    axios.post(process.env.VUE_APP_BASE_URL + 'api/token/refresh/', {refresh:this.$store.state.auth.refresh})
        .then(resp => {
          this.$store.state.auth.access = resp.data.access
        })
        .then(() => {
          this.getEvent()
        })
  },
  methods: {
    getEvent: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/event/event/', {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.event = resp.data.results
          })
    },
    addMenuFormSide: function () {
      this.$store.commit('pushFormSide',
          {
            url: 'api/event/event/',
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
              logo: {
                content: null,
                type: 'file',
                name: 'logo'
              },
              nominal: {
                content: null,
                type: 'number',
                name: 'nominal'
              }
            }
          }
      )
    },
    menuFormSide: function (id, nama, deskripsi, logo, nominal) {
      this.$store.commit('pushFormSide',
          {
            url: 'api/event/event/' + id + '/',
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
              logo: {
                content: logo,
                type: 'file',
                name: 'logo'
              },
              nominal: {
                content: nominal,
                type: 'number',
                name: 'nominal'
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