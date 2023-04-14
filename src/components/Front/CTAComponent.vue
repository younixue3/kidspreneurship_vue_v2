<template>
  <div class="bg-gray-100 flex w-full relative my-32 overflow-hidden hidden">
    <div class="grid grid-cols-4 w-full justify-items-center py-10 gap-20">
      <div class="w-40 h-40 p-9 flex bg-white rounded-2xl transform" v-for="(item, key) in this.data" :class="[key === 5 ? 'col-start-4' : '', key === 0 ? 'rotate-12' : '', key === 1 ? 'rotate-12 scale-75 translate-x-16 translate-y-64 lg:translate-y-72' : '', key === 2 ? '-rotate-12 scale-125 mt-5 translate-y-5 justify-self-end' : '', key === 3 ? '-rotate-12 scale-75' : '', key === 4 ? '-rotate-12' : '', key === 3 ? '-rotate-12 scale-75' : '', key === 5 ? 'rotate-12 scale-75' : '']" :key="key">
        <img class="m-auto bg-white" :src="item.logo">
      </div>
    </div>
    <div class="absolute w-full h-full flex">
      <div class="m-auto">
        <h3 class="font-bold text-xl lg:text-4xl">Supported by</h3>
        <h1 class="font-bold text-4xl lg:text-6xl">
          Excellent Company
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CTAComponent",
  data() {
    return {
      data: [],
    }
  },
  mounted() {
    this.getSponsor()
  },
  methods: {
    getSponsor: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/event/front-sponsor/')
          .then(resp => {
            this.data = resp.data
          })
    }
  }
}
</script>

<style scoped>

</style>