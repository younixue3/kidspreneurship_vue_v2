<template>
  <div class="pt-32 md:pt-40 p-5 md:p-20">
    <div>
      <h1 class="text-4xl font-bold">{{data.judul}}</h1>
      <div class="flex mt-4">
        <img class="w-[55rem] m-auto h-96 rounded-3xl object-cover" :src="data.file">
      </div>
    </div>
    <div class="-mt-40 bg-[#143359] w-full rounded-3xl px-5 md:px-20">
      <div class="pt-52 pb-20 grid grid-cols-1 gap-5 text-white text-sm md:text-base font-medium" v-html="data.isi">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BeritaDetailPage",
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
    this.getBerita()
  },
  methods: {
    getBerita: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/publikasi/front-berita/' + this.$route.params.slug + '/')
          .then(resp => {
            this.data = resp.data
          })
    }
  }
}
</script>

<style scoped>

</style>