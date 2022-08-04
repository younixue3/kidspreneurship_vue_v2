<template>
  <div @click="closeModal">
    <div class="overflow-hidden h-[52rem]">
      <HeroCardComponent></HeroCardComponent>
    </div>
    <div>
      <h1 class="text-5xl text-yellow-500 font-bold">Kids Preneurship</h1>
      <div class="px-20 text-white font-semibold text-lg mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui leo, tempus id quam a, tempus placerat nisl. Aenean posuere felis eu faucibus imperdiet. Proin pellentesque consectetur convallis. Sed eleifend enim at ante placerat aliquet. Donec mollis lacus lacus, ultricies imperdiet arcu ullamcorper ut. Aliquam ornare posuere rutrum. Nam vitae lorem arcu. Sed vel odio sed ex suscipit lacinia. Vestibulum suscipit odio eu elit semper consequat quis in libero. Mauris commodo nibh a vehicula lacinia. Sed purus erat, auctor id sollicitudin et, congue accumsan sem. Sed purus nunc, viverra sed augue id, finibus convallis felis. Praesent nisl arcu, scelerisque at laoreet vitae, consequat ac quam.</div>
    </div>
    <div class="my-40 overflow-hidden flex relative">
      <Carousel class="w-full" ref="HeroCarousel" :itemsToShow="2.50" :wrapAround="true">
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item text-white bg-white w-full h-64 rounded-2xl">{{ slide }}</div>
        </Slide>
      </Carousel>
      <div class="absolute w-full h-full flex justify-between px-3">
        <button @click="prevCarousel" class="my-auto w-10 h-10 bg-gray-400/50 rounded-xl backdrop-blur-sm"><FontAwesomeIcon icon="fa-solid fa-angle-left" /></button>
        <button @click="nextCarousel" class="my-auto w-10 h-10 bg-gray-400/50 rounded-xl backdrop-blur-sm"><FontAwesomeIcon icon="fa-solid fa-angle-right" /></button>
      </div>
    </div>
    <CardGalleryComponent />
    <CTAComponent />
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import HeroCardComponent from "@/components/Front/HeroCardComponent";
import { Carousel, Slide } from "vue3-carousel";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import CardGalleryComponent from "@/components/Front/CardGalleryComponent";
import CTAComponent from "@/components/Front/CTAComponent";

export default {
  name: "HomePage",
  components: {
    HeroCardComponent,
    Carousel,
    Slide,
    FontAwesomeIcon,
    CardGalleryComponent,
    CTAComponent
  },
  methods: {
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
</style>