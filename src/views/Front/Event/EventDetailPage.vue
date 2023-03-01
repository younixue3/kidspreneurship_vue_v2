<template>
  <div class="pt-24">
    <div class="p-10 text-white">
      <img class="w-full h-96 object-cover rounded-2xl" src="https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/andras-vas-Bd7gNnWJBkU-unsplash.webp">
      <h1 class="text-3xl lg:text-5xl mt-8 text-amber-400 font-bold">Kids Preneurship</h1>
      <p class="text-xs lg:text-lg text-center font-bold text-lg mt-5 px-5 lg:px-60">Kidspreneurship kembali hadir di tahun yang ke-10 dengan konsep dan semangat yang baru. Berbeda dengan tahun-tahun sebelumnya, di tahun 2023 ini seluruh rangakain event Kidspreneurship akan diselenggarakan secara daring. Dengan mengusung tema “FESTIVAL EPIK 2K23 (Entrepreneur Pelajar Indonesia Kreatif)”, Kidspreneurship menggaet para Sobat Preneur Muda khususnya di tingkat SMP/MTS, SMA/SMK/MAN se-Kalimantan Timur untuk berkompetisi dan menunjukkan kreativitas mereka dalam menyusun konsep bisnis terbaik.</p>
      <button class="bg-yellow-500 mt-10 rounded-xl px-10 py-2 font-bold text-2xl">
        Lihat Lomba
      </button>
    </div>
    <div class="my-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-32">
      <div v-for="(item, key) in this.data" :key="key" class="bg-gray-200 rounded-2xl h-72 flex relative overflow-hidden">
        <img :src="item.img" class="object-cover rounded-l-2xl h-full w-2/5">
        <div class="flex relative text-start w-3/5 h-full">
          <div class="absolute rounded-3xl bg-yellow-500 w-[50rem] h-96 transform rotate-12 -translate-y-3 -translate-x-7">

          </div>
          <div class="absolute w-full pr-6 py-8">
            <h2 class="text-white font-bold text-lg lg:text-2xl truncate">{{item.title}}</h2>
            <p class="text-white text-xs lg:text-sm mt-5">{{item.desc}}</p>
            <a :href="item.file" class="px-4 bg-[#143359] text-sm lg:text-base text-white rounded-lg mt-5">Kententuan</a>
          </div>
        </div>
      </div>
    </div>
    <CardGalleryComponent class="mt-32" />
    <TimelineComponent />
    <CTAComponent />
  </div>
</template>

<script>
import CardGalleryComponent from "@/components/Front/CardGalleryComponent";
import TimelineComponent from "@/components/Widget/TimelineComponent";
import CTAComponent from "@/components/Front/CTAComponent";

export default {
  name: "EventDetailPage",
  components: {
    CardGalleryComponent,
    TimelineComponent,
    CTAComponent
  },
  data() {
    return {
      data: [
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/andras-vas-Bd7gNnWJBkU-unsplash.webp',
          title: 'Aplikasi & Game',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/adg.docx',
          desc: 'Kompetisi dalam pembangunan Aplikasi dan Game'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/domenico-loia-hGV2TfOh0ns-unsplash.webp',
          title: 'Desain Grafis',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/dg.docx',
          desc: 'Kompetisi di bidang Design Grafis'
        },
        {
          img: 'https://img.freepik.com/free-vector/set-sketches-beautiful-diverse-female-fashion-outfits_1150-50902.jpg?t=st=1677639831~exp=1677640431~hmac=5100d60fb7448f81ea08bafd3ffde510e591bb85ed775e4f201c824dea9ea43c',
          title: 'Fashion',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/fash.docx',
          desc: 'Kompetisi dalam bidang Fashion Design'
        },
        {
          img: 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?t=st=1677639902~exp=1677640502~hmac=7a5900d4414fe0968cee84f98edf0eff8c5af5aeececcf81ab6adb36ee34403b',
          title: 'Food & Beverage',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/fdb.docx',
          desc: 'Kompetisi Food and Beverage'
        },
        {
          img: 'https://img.freepik.com/free-photo/giving-final-touches-artwork_1098-18131.jpg?t=st=1677640057~exp=1677640657~hmac=e34a24939bb35bda7da3410ad1379db22efaf73da37ae01a551f86276c9d985b',
          title: 'Kriya',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/kriy.docx',
          desc: 'Kompetisi Kriya'
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>