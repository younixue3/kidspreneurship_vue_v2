<template>
  <div class="w-full h-full">
    <div class="text-2xl lg:text-5xl text-white font-bold my-10">Juri dan Mentor</div>
    <div class="flex">
      <span class="m-auto grid grid-cols-9 gap-5">
        <div v-for="(item, index, key) in this.data" :key="key" class="bg-white rounded-lg h-14 lg:h-28 w-14 lg:w-28">
          <img @click="clickCard(key)" class="object-cover rounded-lg object-top h-full w-full" :src="require('@/assets/juri/' + item.image)">
        </div>
      </span>
    </div>
    <div class="flex my-10">
      <div class="m-auto bg-white rounded-lg w-[19rem] lg:w-[60rem] h-full grid grid-cols-1 lg:grid-cols-3 p-5">
        <div class="flex">
          <img v-if="this.showCard.nama" class="object-cover object-top m-auto h-44 lg:h-80 w-full lg:w-80 rounded-lg" :src="require('@/assets/juri/' + this.showCard.image)">
        </div>
        <div class="col-span-2 pl-10">
          <h3 class="text-3xl font-bold text-start">{{this.showCard.nama}}</h3>
          <p class="my-5 text-start">{{this.showCard.deskripsi}}</p>
          <div class="flex">
<!--            <button @click="openModal()" class="bg-gray-100 mx-2 w-10 h-10 text-lg"><FontAwesomeIcon icon="fa-solid fa-play" /></button>-->
            <button @click="backCard" class="bg-gray-100 mx-2 w-10 h-10 text-lg"><FontAwesomeIcon icon="fa-solid fa-backward-step" /></button>
            <button @click="nextCard" class="bg-gray-100 mx-2 w-10 h-10 text-lg"><FontAwesomeIcon icon="fa-solid fa-forward-step" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
<!--  <ModalComponent>-->
<!--    <video class="w-full h-[35rem]" controls>-->
<!--      <source :src="this.showCard.video">-->
<!--    </video>-->
<!--  </ModalComponent>-->
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
      data: [
        {
          image: 'WhatsApp Image 2023-05-02 at 15.46.35.jpg',
          deskripsi: 'Juri & Coach Kidspreneurship Kategori Fashion Design',
          nama: 'Tjiang Novita Adipati Chandra, S.E.'
        },
        {
          image: 'WhatsApp Image 2023-05-02 at 15.47.42.jpg',
          deskripsi: 'Juri & Coach Kidspreneurship Kategori Application & Games',
          nama: 'Hari Sulistiyo, S.Kom, M.Kom'
        },
        {
          image: 'WhatsApp Image 2023-05-02 at 15.48.59.jpg',
          deskripsi: 'Juri & Coach Kidspreneurship Kategori Graphic Design',
          nama: 'Vincent Oktavian Kaulika'
        },
        {
          image: 'WhatsApp Image 2023-05-02 at 15.49.52.jpg',
          deskripsi: 'Juri & Coach Kidspreneurship Kategori Kriya',
          nama: 'Ken Arif Danuharja Ng, B. IT.'
        },
        {
          image: 'bu_rani.jpg',
          deskripsi: 'Juri & Coach Kidspreneurship Kategori Food & Beverages',
          nama: 'Rani Ichwanto, S.E., MA., M.Pd.'
        },
        {
          image: 'sulthan.png',
          deskripsi: 'merupakan salah satu pemuda asal dari kota Balikpapan, Kalimantan Timur yang memiliki cita-cita memajukan daerah asal melalui pengembangan impact kepemudaan Juri & Coach Creative Product Innovation',
          nama: 'Sulthan Nur Hidayatullah, S.E,'
        },
        {
          image: 'ahmad.jpg',
          deskripsi: 'Juri & Coach Creative Product Innovation',
          nama: 'Ahmad Wahid Idhomi, S.H., M.H.'
        },
        {
          image: 'salman.jpg',
          deskripsi: 'Juri & Coach Creative Product Innovation',
          nama: 'Salman Farisi, S.T., M.T., M.M.'
        },
        {
          image: 'niniek.jpg',
          deskripsi: 'Juri & Coach Kidspreneurship Kategori Food & Beverages',
          nama: 'Niniek Susanto'
        },
      ],
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
    // this.getJuri()
    var activeCard = this.data[0]
    this.showCard.image = activeCard.image
    this.showCard.deskripsi = activeCard.deskripsi
    this.showCard.nama = activeCard.nama
    this.showCard.video = activeCard.video

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
    },
    nextCard: function () {
      if (this.activeCard === 8) {
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
        this.activeCard = 8
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