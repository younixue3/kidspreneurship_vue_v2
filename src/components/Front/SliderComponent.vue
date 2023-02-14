<template>
  <div ref="slider" class="w-full float-right flex transition-all duration-[50000ms]">
    <div class="flex">
      <div v-bind:id="'card'+index" v-for="(item, index) in dataimage" class="absolute bg-red-500 h-20 w-80 transition-all ease-linear duration-100" :style="{transform: 'translateX('+item.position+'rem)'}">
        {{item.nama}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  data() {
    return {
      dataimage: [
        {nama: '1', position: 10},
        {nama: '2', position: 20},
        {nama: '3', position: 30},
        {nama: '4', position: 40},
        {nama: '5', position: 50},
        {nama: '6', position: 100}
      ]
    }
  },
  mounted() {
    this.repeat()
  },
  methods: {
    repeat: function () {
      const self = this
      setInterval( function () {
        for (const i of self.dataimage) {
          i.position = i.position - 1
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>