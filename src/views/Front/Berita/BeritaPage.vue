<template>
  <div class="pt-40 p-2 lg:p-20">
    <div class="flex h-full w-full relative">
      <div class="grid grid-cols-1 w-full lg:w-3/4 px-2 lg:px-20 gap-3 lg:gap-10 mr-3 lg:mr-10">
        <div v-for="(item, key) in this.data" :key="key" class="bg-gray-200 rounded-2xl h-72 flex relative overflow-hidden">
          <img :src="item.file" class="object-cover rounded-l-2xl h-full w-3/5">
          <div class="flex relative text-end w-3/5 h-full">
            <div class="absolute rounded-3xl bg-[#143359] w-[50rem] h-96 transform -rotate-12 -translate-y-20 -translate-x-5">

            </div>
            <div class="absolute w-full pr-3 lg:pr-6 py-8">
              <h2 class="text-white font-bold text-base lg:text-2xl truncate">{{item.judul}}</h2>
              <span class="text-white text-sm font-bold"></span>
              <p class="text-white text-sm mt-10 h-24 overflow-hidden mb-5" v-html="item.isi"></p>
              <router-link :to="'/berita/'+item.slug" class="px-4 bg-amber-400 text-black text-xs lg:text-base rounded-lg">Read More</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="grow shrink hidden lg:flex">
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