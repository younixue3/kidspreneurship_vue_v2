<template>
  <div class="overflow-hidden w-screen transform scale-110 -rotate-3 mt-20 z-0">
    <div class="grid grid-cols-8 h-full gap-5 w-full mb-5">
      <img v-for="(item, index, key) in this.images" :key="key" :src="item.file" class="mx-3 h-80 w-60 bg-white rounded-2xl object-cover">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeroCardComponent",
  data() {
    return {
      images : []
    }
  },
  mounted() {
    this.getImage()
  },
  methods: {
    getImage: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/publikasi/front-images/')
          .then(resp => {
            this.images = resp.data
          })
    }
  }
}
</script>

<style scoped>

</style>