<template>
  <div class="pt-32 md:pt-40 p-5 md:p-20">
    <h1 class="text-4xl mb-20">{{this.data.tahun}}</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <img v-for="(item, key) in this.data.image" :key="key" class="w-80 h-80 bg-white object-cover bg-gray-100 rounded-2xl" :src="item.file">
    </div>
    <PaginationComponent />
  </div>
</template>

<script>
import PaginationComponent from "@/components/Widget/PaginationComponent";
import axios from "axios";

export default {
  name: "GalleryDetailPage",
  components: {
    PaginationComponent
  },
  data() {
    return {
      data: {}
    }
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
      axios.get(process.env.VUE_APP_BASE_URL + 'api/publikasi/front-galeri/' + this.$route.params.id + '/')
          .then(resp => {
            this.data = resp.data
          })
    }
  }
}
</script>

<style scoped>

</style>