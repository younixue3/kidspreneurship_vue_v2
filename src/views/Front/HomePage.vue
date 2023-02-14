<template>
  <div @click="closeModal">
    <div class="overflow-hidden h-[52rem]">
      <HeroCardComponent></HeroCardComponent>
    </div>
    <div>
      <h1 class="text-5xl text-yellow-500 font-bold">Kids Preneurship</h1>
      <div class="px-20 text-white font-semibold text-lg mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc dui leo, tempus id quam a, tempus placerat nisl. Aenean posuere felis eu faucibus imperdiet. Proin
        pellentesque consectetur convallis. Sed eleifend enim at ante placerat aliquet. Donec mollis lacus lacus,
        ultricies imperdiet arcu ullamcorper ut. Aliquam ornare posuere rutrum. Nam vitae lorem arcu. Sed vel odio sed
        ex suscipit lacinia. Vestibulum suscipit odio eu elit semper consequat quis in libero. Mauris commodo nibh a
        vehicula lacinia. Sed purus erat, auctor id sollicitudin et, congue accumsan sem. Sed purus nunc, viverra sed
        augue id, finibus convallis felis. Praesent nisl arcu, scelerisque at laoreet vitae, consequat ac quam.
      </div>
    </div>
    <div class="my-40 overflow-hidden flex relative">
      <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 scrollbarhidden">
        <div class="snap-center shrink-0 w-[15rem]"></div>
        <div v-for="slide in this.testimoni" :key="slide"
             class="snap-center shrink-0 text-black bg-white w-full h-64 w-[35rem] rounded-2xl flex p-5 space-x-5 text-left">
          <img class="bg-gray-300 w-1/3 rounded-xl object-cover" :src="slide.image">
          <div class="py-4 w-2/3">
            <h2 class="text-xl font-bold mb-4">{{ slide.nama }}</h2>
            <p class="h-full text-sm">{{ slide.testimoni }}</p>
          </div>
        </div>
        <div class="snap-center shrink-0 w-[15rem]"></div>
      </div>
<!--      <div class="absolute w-full h-full flex justify-between px-3">-->
<!--        <button @click="prevCarousel"-->
<!--                class="my-auto w-10 h-10 bg-gray-400/50 rounded-xl backdrop-blur-sm backdrop-opacity-20">-->
<!--          <FontAwesomeIcon icon="fa-solid fa-angle-left"/>-->
<!--        </button>-->
<!--        <button @click="nextCarousel" class="my-auto w-10 h-10 bg-gray-400/50 rounded-xl backdrop-blur-sm">-->
<!--          <FontAwesomeIcon icon="fa-solid fa-angle-right"/>-->
<!--        </button>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import HeroCardComponent from "@/components/Front/HeroCardComponent";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import CardGalleryComponent from "@/components/Front/CardGalleryComponent";
import CTAComponent from "@/components/Front/CTAComponent";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    HeroCardComponent,
    FontAwesomeIcon,
    CardGalleryComponent,
    CTAComponent
  },
  data() {
    return {
      testimoni: []
    }
  },
  mounted() {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('default')
    this.getTestimoni()
  },
  methods: {
    getTestimoni: function () {
      axios.get(process.env.VUE_APP_BASE_URL + 'api/publikasi/front-testimoni/')
          .then(resp => {
            this.testimoni = resp.data
          })
    },
    nextCarousel: function () {
      this.$refs.HeroCarousel.next()
    },
    prevCarousel: function () {
      this.$refs.HeroCarousel.prev()
    },
    closeModal: function () {
      this.$store.commit('closeModalNavbar')
    }
  }
}
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  transition: 0.5s;
}

.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: scale(0.87);
}

.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}

.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}

.carousel__slide--active > .carousel__item {
  transform: scale(1);
}
.scrollbarhidden {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbarhidden::-webkit-scrollbar {
  display: none;
}
</style>