<template>
  <div @click="closeModal">
    <div class="overflow-hidden w-full relative h-[40rem] lg:h-[52rem] z-0">
      <HeroCardComponent></HeroCardComponent>
    </div>
    <div class="-mt-96 lg:-mt-[40rem] w-full relative z-40 mb-10">
      <div class="flex">
        <img class=" w-52 lg:w-[40rem] m-auto" src="@/assets/epik2k23.png">
      </div>
      <div class="flex mt-10">
        <div class="lg:h-[30rem]  m-auto bg-white rounded-lg p-5">
          <div class=" w-full h-full bg-gray-900 flex">
            <video class="h-full m-auto" controls>
              <source src="@/assets/videokp.mp4">
            </video>
          </div>
        </div>
      </div>
      <h1 class="text-3xl m-auto w-[30rem] text-center rounded-lg lg:text-6xl font-bold bg-amber-400 text-blue-800 mt-10 pb-2 pt-1">Coming Soon</h1>
    </div>
    <div class="mt-20 lg:mt-52">
      <h1 class="text-4xl lg:text-5xl text-yellow-500 font-bold">Kidspreneurship</h1>
      <div class="px-5 lg:px-20 text-white font-semibold text-sm lg:text-lg mt-5"><a class="text-sky-400" href="#">Kidspreneurship</a> merupakan event tahunan <a class="text-sky-400" href="https://hbics.sch.id/">Sekolah Harapan Bangsa Balikpapan</a>. Kidsprenurship sendiri lahir karena keprihatinan sekolah akan rendahnya angka wiraswasta di Indonesia di tahun 2013. Untuk itu <a class="text-sky-400" href="https://hbics.sch.id/">Sekolah Harapan Bangsa Balikpapan</a> mengadakan event <a class="text-sky-400" href="#">Kidspreneurship</a> pertama kali di tahun 2013 bagi siswa-siswi SD Harapan Bangsa Balikpapan, dan inilah yang menjadi latar belakang dari nama Kidsprenurship. Dengan hadirnya <a class="text-sky-400" href="#">Kidspreneurship</a>, diharapkan mampu mengasah kemampuan wirausaha serta kreatifitas anak-anak sejak dini. Sehingga dapat mempersiapkan generasi yang memiliki kemampuan dalam wirausaha dan meningkatkan angka wirausaha di Indonesia nantinya.
      </div>
    </div>
    <div class="my-14 lg:my-40 overflow-hidden flex relative">
      <div class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 scrollbarhidden">
        <div class="snap-center shrink-0 w-20 lg:w-[15rem]"></div>
        <div v-for="slide in this.testimoni" :key="slide"
             class="snap-center shrink-0 text-black bg-white w-full h-40 lg:h-64 w-[20rem] lg:w-[35rem] rounded-2xl flex p-5 space-x-5 text-left">
          <img class="bg-gray-300 w-1/3 rounded-xl object-cover" :src="slide.image">
          <div class="py-2 lg:py-4 w-2/3 overflow-hidden">
            <h2 class="text-sm lg:text-xl font-bold mb-2 lg:mb-4">{{ slide.nama }}</h2>
            <p class="h-full text-xs lg:text-sm">{{ slide.testimoni }}</p>
          </div>
        </div>
        <div class="snap-center shrink-0 w-20 lg:w-[15rem]"></div>
      </div>
    </div>
    <CardGalleryComponent/>
    <CTAComponent />
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