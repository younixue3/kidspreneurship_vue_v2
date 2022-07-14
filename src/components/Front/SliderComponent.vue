<template>
  <div ref="slider" class="w-full float-right flex transition-all duration-[50000ms]">
    <div class="flex">
      <div v-bind:id="'card'+index" v-for="(item, index) in dataimage" class="bg-red-500 h-20 w-80 transition-all ease-linear duration-1000" :style="{transform: 'translateX(-'+item.position+'rem)'}">
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
        {nama: '1', position: null},
        {nama: '2', position: null},
        {nama: '3', position: null},
        {nama: '4', position: null},
        {nama: '5', position: null},
        {nama: '6', position: null}
      ]
    }
  },
  mounted() {
    console.log(this.$refs.slider.getBoundingClientRect())
    this.repeat()
  },
  methods: {
    repeat: function () {
      const self = this
      setInterval( function () {
        for (const i of self.dataimage) {
          // console.log(i)
          // console.log(document.getElementById('card'+i.nama).classList.remove('-translate-x-'+i.position))
          console.log(i.position = i.position + 1)
          // console.log(document.getElementById('card'+i.nama).classList.add('-translate-x-'+i.position))
          // console.log(self.dataimage[i])
        }
        // console.log(document.getElementById('card').getBoundingClientRect())
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>