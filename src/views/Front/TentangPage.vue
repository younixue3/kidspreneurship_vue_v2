<template>
  <div @click="closeModal">
    <div class="overflow-hidden h-[52rem]">
      <HeroCardComponent></HeroCardComponent>
    </div>
    <div class="flex my-10">
      <div class="m-auto bg-white w-[75rem] h-full rounded-lg p-10 text-justify indent-8 flex-col space-y-5">
        <h1 class="text-6xl text-yellow-400 font-bold text-center mb-10">Kids Preneurship</h1>
        <p>Kidspreneurship merupakan event tahunan <a class="text-blue-500" href="https://hbics.sch.id/">Sekolah Harapan Bangsa Balikpapan</a>. Kidsprenurship sendiri lahir karena keprihatinan sekolah akan rendahnya angka wiraswasta di Indonesia di tahun 2013. Untuk itu <a class="text-blue-500" href="https://hbics.sch.id/">Sekolah Harapan Bangsa Balikpapan</a> mengadakan event Kidspreneurship pertama kali di tahun 2013 bagi siswa-siswi SD Harapan Bangsa Balikpapan, dan inilah yang menjadi latar belakang dari nama Kidsprenurship. Dengan hadirnya Kidspreneurship, diharapkan mampu mengasah kemampuan wirausaha serta kreatifitas anak-anak sejak dini. Sehingga dapat mempersiapkan generasi yang memiliki kemampuan dalam wirausaha dan meningkatkan angka wirausaha di Indonesia nantinya.</p>
        <p>Namun seiring berjalannya waktu dan semakin meningkatnya antusiasme masyarakat terhadap Kidspreneurship maka sejak tahun 2019 event Kidspreneurship telah dibuka untuk umum dan mengalami peningkatan dalam segi jenis dan macam-macam kegiatan lomba. Hal ini juga mengantarkan Kidspreneurship menjadi salah satu event bergengsi bagi para pelajar di kota Balikpapan, Kalimantan Timur. Kehadiran Kidspreneurship memberikan ruang bagi para pelajar di Kota Balikpapan untuk menunjukkan dan menggali kemampuan mereka sebagai seorang wirausaha muda.</p>
        <p>Sejak tahun 2019, Kidspreneurship juga sudah mulai memperkenalkan dan menjadikan Business Model Canvas sebagai salah satu fokus dalam kompetisi Kidspreneurship. Business Model Canvas mulai diperkenalkan dalam kompetisi Kidspreneurship bertujuan agar dapat menambah wawasan dan pengetahuan peserta dalam proses perencanaan sebuah bisnis yang terstruktur sejak dini. Business Model Canvas merupakan tools yang dapat digunakan peserta dalam proses perencanaan proposal bisnis pada kompetisi Kidspreneurship.</p>
        <p>Berkat dukungan masyarakat dan pemerintah daerah, event Kidspreneurship kembali hadir di tahun 2022. Di tahun penyelenggaraan yang ke-9, Kidspreneurship hadir dengan tema “FESTIVAL EPIK 2K22 (Entrepreneur Pelajar Indonesia Kreatif)”, yang rangkaian eventnya berlangsung sejak tanggal 15 November 2021 hingga 11 Mei 2022. Berbeda dari tahun-tahun sebelumnya, di tahun 2022 ini Kidspreneurship akan memberikan ruang bagi para-wirausaha muda khususnya di tingkat SMP/MTS, SMA/SMK/MAN se-Indonesia untuk berkompetisi dan menunjukkan kreativitas mereka dalam menyusun konsep bisnis terbaik di berbagai kategori kompetisi yaitu:</p>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
        <p>Event Kidspreneurship FESTIVAL EPIK 2K22 “(Entrepreneur Pelajar Indonesia Kreatif)” juga menghadirkan sesuatu yang baru, yaitu dengan membuat semua proses penyelenggaraan event secara daring. Selain itu di “FESTIVAL EPIK 2K22” akan diselenggarakan sesi Virtual Expo untuk menampilkan hasil karya dari para peserta yang nantinya dapat dengan mudah diakses oleh para pengunjung. Pada sesi Virtual Expo, pengunjung dapat ikut berpartisipasi dengan memberikan dukungan mereka terhadap karya-karya terbaik peserta. Kidspreneurship “FESTIVAL EPIK 2K22” diharapkan dapat menjadi wadah bagi para pelajar Indonesia untuk mengembangkan kemampuan serta kecakapan dalam berinovasi menghasilkan kreasi wirausaha baru.</p>
        <p>Kidspreneurship Festival EPIK 2K22 “Indonesia Bisa, Berkarya Untuk Negeri”</p>
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