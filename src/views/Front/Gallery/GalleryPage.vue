<template>
  <div class="pt-40 p-20">
    <div class="flex h-full w-full">
      <div class="grid grid-cols-2 w-3/4 px-20 gap-10 mr-10">
        <router-link :to="'/gallery/' + item.id" v-for="(item, key) in this.data" :key="key" class="bg-gray-200 rounded-2xl h-96 flex relative">
          <img :src="item.image[0].file" class="object-cover rounded-2xl h-full w-full">
          <div class="absolute bottom-0 rounded-2xl bg-blue-900 px-5 py-8 text-end w-full h-36">
            <h3 class="text-white text-3xl font-bold">{{item.tahun}}</h3>
            <p class="text-white font-bold text-lg">{{item.image_count}} Foto</p>
          </div>
        </router-link>
      </div>
      <div class="h-screen flex relative">
        <div class="sticky top-28 bg-gray-200 rounded-2xl w-72 h-96"></div>
      </div>
    </div>
    <PaginationComponent />
  </div>
</template>

<script>
import PaginationComponent from "@/components/Widget/PaginationComponent";
import axios from "axios";

export default {
  name: "GalleryPage",
  data() {
    return {
      data: [],
    }
  },
  components: {
    PaginationComponent
  },
  created() {
    document.documentElement.classList.remove('default')
    document.documentElement.classList.add('light')
  },
  mounted() {
    this.getGaleri()
  },
  methods: {
    getGaleri: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/publikasi/front-galeri/')
          .then(resp => {
            this.data = resp.data.results
          })
    }
  }
}
</script>

<style scoped>

</style>