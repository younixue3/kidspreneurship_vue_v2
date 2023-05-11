<template>
  <div @click="closeModal">
<!--    <ModalComponent />-->
    <div class="overflow-hidden w-full relative h-[40rem] lg:h-[52rem] z-0">
      <HeroCardComponent></HeroCardComponent>
    </div>
    <div class="-mt-96 lg:-mt-[40rem] w-full relative z-40 mb-10">
      <div class="flex">
        <img class=" w-52 lg:w-[40rem] m-auto" src="@/assets/epik2k23.png">
      </div>
    </div>
    <div class="mt-52 lg:mt-52">
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
    <div class="bg-gray-100 flex w-full relative my-32 overflow-hidden">
      <div class="grid grid-cols-6 p-20 w-full justify-items-center py-10 gap-10">
        <div class="w-40 h-40 flex bg-white rounded-2xl transform overflow-hidden" v-for="(item, key) in this.data" :class="key == 8 || key == 12 ? 'col-start-5': key == 14 ? 'col-start-2' : ''" :key="key">
          <img class="m-auto bg-white object-contain" :src="require('@/assets/edufair/' + item.logo)">
        </div>
      </div>
      <div class="absolute w-full h-full flex">
        <div class="m-auto">
          <h3 class="font-bold text-xl lg:text-4xl">Participating Universities in</h3>
          <h1 class="font-bold text-4xl lg:text-6xl">
            Education Fair
          </h1>
        </div>
      </div>
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
import ModalComponent from "@/components/Widget/ModalComponent";

export default {
  name: "HomePage",
  components: {
    HeroCardComponent,
    FontAwesomeIcon,
    CardGalleryComponent,
    CTAComponent,
    ModalComponent
  },
  data() {
    return {
      testimoni: [],
      data: [
        {
          logo: '1.png'
        },
        {
          logo: '2.jpg'
        },
        {
          logo: '3.png'
        },
        {
          logo: '4.png'
        },
        {
          logo: '5.jpeg'
        },
        {
          logo: '6.png'
        },
        {
          logo: '7.png'
        },
        {
          logo: '8.jpg'
        },
        {
          logo: '9.png'
        },
        {
          logo: '10.png'
        },
        {
          logo: '11.jpg'
        },
        {
          logo: '12.png'
        },
        {
          logo: '13.jpg'
        },
        {
          logo: '14.jpg'
        },
        {
          logo: '15.png'
        },
        {
          logo: '16.png'
        },
        {
          logo: '17.jpeg'
        },
        {
          logo: '18.png'
        },
      ]
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