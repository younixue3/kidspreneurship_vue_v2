<template>
  <div @click="closeModal">
    <div class="overflow-hidden h-[40rem] lg:h-[52rem] z-0">
      <HeroCardComponent></HeroCardComponent>
    </div>
    <div class="-mt-96 lg:-mt-[40rem] w-full relative z-40 mb-10">
      <div class="flex">
        <img class=" w-52 lg:w-[40rem] m-auto" src="@/assets/epik2k23.png">
      </div>
    </div>
    <div class="flex mt-52 lg:my-10 lg:mt-96 px-1 lg:px-52">
      <div class="m-auto bg-white w-full h-full rounded-lg p-5 lg:p-10 text-justify indent-8 flex-col space-y-5">
        <h1 class="text-3xl lg:text-6xl text-yellow-400 font-bold text-center mb-10 indent-0">Kidspreneurship</h1>
        <p class="text-xs lg:text-base"><a class="text-blue-500" href="#">Kidspreneurship</a> merupakan event tahunan <a class="text-blue-500" href="https://hbics.sch.id/">Sekolah Harapan Bangsa Balikpapan</a>. Kidsprenurship sendiri lahir karena keprihatinan sekolah akan rendahnya angka wiraswasta di Indonesia di tahun 2013. Untuk itu <a class="text-blue-500" href="https://hbics.sch.id/">Sekolah Harapan Bangsa Balikpapan</a> mengadakan event <a class="text-blue-500" href="#">Kidspreneurship</a> pertama kali di tahun 2013 bagi siswa-siswi SD Harapan Bangsa Balikpapan, dan inilah yang menjadi latar belakang dari nama Kidsprenurship. Dengan hadirnya <a class="text-blue-500" href="#">Kidspreneurship</a>, diharapkan mampu mengasah kemampuan wirausaha serta kreatifitas anak-anak sejak dini. Sehingga dapat mempersiapkan generasi yang memiliki kemampuan dalam wirausaha dan meningkatkan angka wirausaha di Indonesia nantinya.</p>
        <p class="text-xs lg:text-base">Namun seiring berjalannya waktu dan semakin meningkatnya antusiasme masyarakat terhadap <a class="text-blue-500" href="#">Kidspreneurship</a> maka sejak tahun 2019 event <a class="text-blue-500" href="#">Kidspreneurship</a> telah dibuka untuk umum dan mengalami peningkatan dalam segi jenis dan macam-macam kegiatan lomba. Hal ini juga mengantarkan <a class="text-blue-500" href="#">Kidspreneurship</a> menjadi salah satu event bergengsi bagi para pelajar di kota Balikpapan, Kalimantan Timur. Kehadiran <a class="text-blue-500" href="#">Kidspreneurship</a> memberikan ruang bagi para pelajar di Kota Balikpapan untuk menunjukkan dan menggali kemampuan mereka sebagai seorang wirausaha muda.</p>
        <p class="text-xs lg:text-base">Sejak tahun 2019, <a class="text-blue-500" href="#">Kidspreneurship</a> juga sudah mulai memperkenalkan dan menjadikan Business Model Canvas sebagai salah satu fokus dalam kompetisi <a class="text-blue-500" href="#">Kidspreneurship</a>. Business Model Canvas mulai diperkenalkan dalam kompetisi <a class="text-blue-500" href="#">Kidspreneurship</a> bertujuan agar dapat menambah wawasan dan pengetahuan peserta dalam proses perencanaan sebuah bisnis yang terstruktur sejak dini. Business Model Canvas merupakan tools yang dapat digunakan peserta dalam proses perencanaan proposal bisnis pada kompetisi <a class="text-blue-500" href="#">Kidspreneurship</a>.</p>
        <p class="text-xs lg:text-base">Berkat dukungan masyarakat dan pemerintah daerah, event <a class="text-blue-500" href="#">Kidspreneurship</a> kembali hadir di tahun 2023. Di tahun penyelenggaraan yang ke-9, <a class="text-blue-500" href="#">Kidspreneurship</a> hadir dengan tema “FESTIVAL EPIK 2K23 (Entrepreneur Pelajar Indonesia Kreatif)”. Berbeda dari tahun-tahun sebelumnya, di tahun 2023 ini <a class="text-blue-500" href="#">Kidspreneurship</a> akan memberikan ruang bagi para-wirausaha muda khususnya di tingkat SMP/MTS, SMA/SMK/MAN se-Indonesia untuk berkompetisi dan menunjukkan kreativitas mereka dalam menyusun konsep bisnis terbaik di berbagai kategori kompetisi yaitu:</p>
        <ol class="text-xs lg:text-base">
          <li>Fashion</li>
          <li>Kriya</li>
          <li>Aplikasi & Game</li>
          <li>Food & Beverage</li>
          <li>Design Grafis</li>
        </ol>
        <p class="text-xs lg:text-base">Event <a class="text-blue-500" href="#">Kidspreneurship</a> FESTIVAL EPIK 2K23 “(Entrepreneur Pelajar Indonesia Kreatif)” juga menghadirkan sesuatu yang baru, yaitu dengan membuat semua proses penyelenggaraan event secara daring. Selain itu di “FESTIVAL EPIK 2K23” akan diselenggarakan sesi Virtual Expo untuk menampilkan hasil karya dari para peserta yang nantinya dapat dengan mudah diakses oleh para pengunjung. Pada sesi Virtual Expo, pengunjung dapat ikut berpartisipasi dengan memberikan dukungan mereka terhadap karya-karya terbaik peserta. <a class="text-blue-500" href="#">Kidspreneurship</a> “FESTIVAL EPIK 2K23” diharapkan dapat menjadi wadah bagi para pelajar Indonesia untuk mengembangkan kemampuan serta kecakapan dalam berinovasi menghasilkan kreasi wirausaha baru.</p>
        <p class="text-xs lg:text-base"><a class="text-blue-500" href="#">Kidspreneurship</a> Festival EPIK 2K23 “Indonesia Bisa, Berkarya Untuk Negeri”</p>
      </div>
    </div>
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
import axios from "axios";

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
  data() {
    return {
      testimoni : []
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
</style>