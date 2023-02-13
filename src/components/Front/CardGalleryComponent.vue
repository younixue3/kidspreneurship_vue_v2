<template>
  <div class="w-full h-full">
    <div class="flex">
      <span class="m-auto grid grid-cols-4 gap-5">
        <div v-for="(item, index, key) in this.data" :key="key" class="bg-white rounded-lg h-28 w-28">
          <img @click="clickCard(key)" class="object-cover rounded-lg object-top h-full w-full" :src="item.image">
        </div>
      </span>
    </div>
    <div class="flex my-10">
      <div class="m-auto bg-white rounded-lg w-[60rem] h-96 grid grid-cols-3 p-5">
        <div class="flex">
          <img class="object-cover m-auto h-80 w-80 rounded-lg" :src="this.showCard.image">
        </div>
        <div class="col-span-2 pl-10">
          <h3 class="text-3xl font-bold text-start">{{this.showCard.nama}}</h3>
          <p class="my-5 text-start">{{this.showCard.deskripsi}}</p>
          <div class="flex">
            <button @click="openModal()" class="bg-gray-100 mx-2 w-10 h-10 text-lg"><FontAwesomeIcon icon="fa-solid fa-play" /></button>
            <button @click="backCard" class="bg-gray-100 mx-2 w-10 h-10 text-lg"><FontAwesomeIcon icon="fa-solid fa-backward-step" /></button>
            <button @click="nextCard" class="bg-gray-100 mx-2 w-10 h-10 text-lg"><FontAwesomeIcon icon="fa-solid fa-forward-step" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalComponent>
    <video class="w-full h-[35rem]" controls>
      <source :src="this.showCard.video">
    </video>
  </ModalComponent>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import axios from "axios";
import ModalComponent from "@/components/Back/Widget/ModalComponent";

export default {
  name: "CardGalleryComponent",
  components: {
    FontAwesomeIcon,
    ModalComponent
  },
  data() {
    return {
      data: [],
      activeCard: 0,
      showCard: {
        image: null,
        nama: null,
        deskripsi: null,
        video: null
      }
    }
  },
  mounted() {
    this.getJuri()

  },
  methods: {
    getJuri: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/event/front-juri/')
          .then(resp => {
            this.data = resp.data
          })
          .finally(() => {
            var activeCard = this.data[0]
            this.showCard.image = activeCard.image
            this.showCard.deskripsi = activeCard.deskripsi
            this.showCard.nama = activeCard.nama
            this.showCard.video = activeCard.video
          })
    },
    openModal: function (url) {
      this.$store.commit('openModal', url)
    },
    clickCard: function (key) {
      var activeCard = this.data[key]
      this.showCard.image = activeCard.image
      this.showCard.deskripsi = activeCard.deskripsi
      this.showCard.nama = activeCard.nama
      this.showCard.video = activeCard.video
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
      this.showCard.image = chooseCard.image
      this.showCard.deskripsi = chooseCard.deskripsi
      this.showCard.nama = chooseCard.nama
      this.showCard.video = chooseCard.video
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
      this.showCard.image = chooseCard.image
      this.showCard.deskripsi = chooseCard.deskripsi
      this.showCard.nama = chooseCard.nama
      this.showCard.video = chooseCard.video
    }
  }
}
</script>

<style scoped>

</style>