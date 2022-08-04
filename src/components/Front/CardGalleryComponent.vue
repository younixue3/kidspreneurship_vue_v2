<template>
  <div class="w-full h-full">
    <div class="flex">
      <span class="m-auto grid grid-cols-4 gap-5">
        <div v-for="(item, key) in this.data" :key="key" class="bg-white rounded-lg h-28 w-28">
          <img @click="clickCard(key)" class="object-cover rounded-lg object-top h-full w-full" :src="item.img">
        </div>
      </span>
    </div>
    <div class="flex my-10">
      <div class="m-auto bg-white rounded-lg w-[60rem] h-96 grid grid-cols-3 p-5">
        <div class="flex">
          <img class="object-cover m-auto h-80 w-80 rounded-lg" :src="this.showCard.img">
        </div>
        <div class="col-span-2 pl-10">
          <h3 class="text-3xl font-bold text-start">{{this.showCard.name}}</h3>
          <p class="my-5 text-start">{{this.showCard.desc}}</p>
          <div class="flex">
            <button class="bg-gray-100 mx-2 w-10 h-10 text-lg"><FontAwesomeIcon icon="fa-solid fa-play" /></button>
            <button @click="backCard" class="bg-gray-100 mx-2 w-10 h-10 text-lg"><FontAwesomeIcon icon="fa-solid fa-backward-step" /></button>
            <button @click="nextCard" class="bg-gray-100 mx-2 w-10 h-10 text-lg"><FontAwesomeIcon icon="fa-solid fa-forward-step" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "CardGalleryComponent",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      data: [
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/you-can-call-me-a-tech-user.jpg',
          name: 'Jane Doe',
          desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/wanna-say-something_-say-it-now.jpg',
          name: 'Jane Doe',
          desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/self-confident-young-man.jpg',
          name: 'Jane Doe',
          desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/JaneDoe.webp',
          name: 'Jane Doe',
          desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
        }
      ],
      activeCard: 0,
      showCard: {
        img: null,
        name: null,
        desc: null
      }
    }
  },
  mounted() {
    var activeCard = this.data[0]
    this.showCard.img = activeCard.img
    this.showCard.name = activeCard.name
    this.showCard.desc = activeCard.desc
  },
  methods: {
    clickCard: function (key) {
      var activeCard = this.data[key]
      this.showCard.img = activeCard.img
      this.showCard.name = activeCard.name
      this.showCard.desc = activeCard.desc
    },
    nextCard: function () {
      if (this.activeCard === 3) {
        this.activeCard = 0
      }
      // else if (this.activeCard === 0) {
      //   this.activeCard = 3
      // }
      else {
        this.activeCard++
      }
      var chooseCard = this.data[this.activeCard]
      this.showCard.img = chooseCard.img
      this.showCard.name = chooseCard.name
      this.showCard.desc = chooseCard.desc
    },
    backCard: function () {
      if (this.activeCard === 0) {
        this.activeCard = 3
      }
          // else if (this.activeCard === 0) {
          //   this.activeCard = 3
      // }
      else {
        this.activeCard--
      }
      var chooseCard = this.data[this.activeCard]
      this.showCard.img = chooseCard.img
      this.showCard.name = chooseCard.name
      this.showCard.desc = chooseCard.desc
    }
  }
}
</script>

<style scoped>

</style>