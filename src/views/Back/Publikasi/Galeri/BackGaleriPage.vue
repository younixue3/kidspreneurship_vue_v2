<template>
  <div class="text-left">
    <button @click="addMenuFormSide" class="bg-emerald-500 px-2 text-white">Add</button>
  </div>
  <div class="cursor-pointer grid grid-cols-4 gap-10">
    <div class="bg-gray-200 h-52" @click="menuFormSide(item.id ,item.tahun, item.image)" v-for="(item, index, key) in this.galeri" :key="key">
      <div class="flex relative">
        <div class="absolute bg-blue-600 px-2  font-bold top-0 right-0">{{ item.tahun }}</div>
        <div class="grid grid-cols-2 gap-2 p-5 w-full">
          <img v-for="(item, index, key) in item.image.slice(0, 4)" :key="key" class="bg-gray-300 h-20 w-full object-cover" :src="item.file">
        </div>
      </div>
    </div>
  </div>
  <ModalComponent>
    <img class="w-full h-full" :src="this.$store.state.modal.popup.content">
  </ModalComponent>
</template>

<script>
import axios from "axios";
import ModalComponent from "@/components/Back/Widget/ModalComponent";

export default {
  name: "GaleriPage",
  components: {
    ModalComponent
  },
  data() {
    return {
      galeri: []
    }
  },
  mounted() {
    axios.post(process.env.VUE_APP_BASE_URL + 'api/token/refresh/', {refresh: this.$store.state.auth.refresh})
        .then(resp => {
          this.$store.state.auth.access = resp.data.access
        })
        .finally(() => {
          this.getGaleri()
        })
  },
  methods: {
    addMenuFormSide: function () {
      this.$store.commit('pushFormSide',
          {
            url: 'api/publikasi/galeri/insertGaleri/',
            methode: 'post',
            data: {
              tahun: {
                content: null,
                type: 'number',
                name: 'tahun'
              }
            }
          }
      )
    },
    getGaleri: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/publikasi/galeri/', {headers: {'Authorization': `Bearer   ${this.$store.state.auth.access}`}})
          .then(resp => {
            this.galeri = resp.data.results
          })
    },
    menuFormSide: function (id, tahun, images) {
      this.$store.commit('pushFormSide',
          {
            url: 'api/publikasi/galeri/' + id + '/',
            from: 'galeri',
            methode: 'put',
            data: {
              tahun: {
                content: tahun,
                type: 'number',
                name: 'tahun'
              },
              images: {
                content: images,
                type: 'images',
                name: 'images'
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