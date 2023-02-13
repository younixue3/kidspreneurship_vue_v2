<template>
  <div class="pt-40 p-20">
    <div class="flex h-full w-full">
      <div class="grid grid-cols-1 w-3/4 px-20 gap-10 mr-10">
        <div v-for="(item, key) in this.data" :key="key" class="bg-gray-200 rounded-2xl h-72 flex relative overflow-hidden">
          <img :src="item.file" class="object-cover rounded-l-2xl h-full w-3/5">
          <div class="flex relative text-end w-2/5 h-full">
            <div class="absolute rounded-3xl bg-[#143359] w-[50rem] h-96 transform -rotate-12 -translate-y-20 -translate-x-20">

            </div>
            <div class="absolute w-full pr-6 py-8">
              <h2 class="text-white font-bold text-2xl truncate">{{item.judul}}</h2>
              <span class="text-white text-sm font-bold"></span>
              <p class="text-white text-sm mt-10 h-24 overflow-hidden" v-html="item.isi"></p>
              <router-link :to="'/berita/'+item.slug" class="px-4 bg-amber-400 text-white rounded-lg mt-5">Read More</router-link>
            </div>
          </div>
        </div>
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
    this.getberita()
  },
  methods: {
    getberita: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/publikasi/front-berita/')
          .then(resp => {
            this.data = resp.data.results
          })
    }
  }
}
</script>

<style scoped>

</style>