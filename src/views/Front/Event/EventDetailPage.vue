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
          file: process.env.VUE_APP_BASE_URL + 'event/logo/adg.pdf',
          desc: 'Kompetisi dalam pembangunan Aplikasi dan Game'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/domenico-loia-hGV2TfOh0ns-unsplash.webp',
          title: 'Desain Grafis',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/dg.pdf',
          desc: 'Kompetisi di bidang Design Grafis'
        },
        {
          img: 'https://img.freepik.com/free-vector/set-sketches-beautiful-diverse-female-fashion-outfits_1150-50902.jpg?t=st=1677639831~exp=1677640431~hmac=5100d60fb7448f81ea08bafd3ffde510e591bb85ed775e4f201c824dea9ea43c',
          title: 'Fashion',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/fash.pdf',
          desc: 'Kompetisi dalam bidang Fashion Design'
        },
        {
          img: 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?t=st=1677639902~exp=1677640502~hmac=7a5900d4414fe0968cee84f98edf0eff8c5af5aeececcf81ab6adb36ee34403b',
          title: 'Food & Beverage',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/fdb.pdf',
          desc: 'Kompetisi Food and Beverage'
        },
        {
          img: 'https://img.freepik.com/free-photo/giving-final-touches-artwork_1098-18131.jpg?t=st=1677640057~exp=1677640657~hmac=e34a24939bb35bda7da3410ad1379db22efaf73da37ae01a551f86276c9d985b',
          title: 'Kriya',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/kriy.pdf',
          desc: 'Kompetisi Kriya'
        },
        {
          img: 'https://img.freepik.com/free-photo/creativity-creative-ideas-imagination-inspiration-design-concept_53876-123736.jpg?w=1060&t=st=1678154053~exp=1678154653~hmac=27fa098ac139bb638b586e7df24f81303992452170d5f5a248ad08f7b62b962d',
          title: 'Creative Product',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/sdcp.pdf',
          desc: 'Kompetisi dalam membangun Creative Product'
        },
        {
          img: 'https://img.freepik.com/free-vector/set-sketches-beautiful-diverse-female-fashion-outfits_1150-50902.jpg?t=st=1677639831~exp=1677640431~hmac=5100d60fb7448f81ea08bafd3ffde510e591bb85ed775e4f201c824dea9ea43c',
          title: 'Fashion Show',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/fs.pdf',
          desc: 'Kompetisi dalam bidang Fashion Show'
        },
        {
          img: 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?t=st=1677639902~exp=1677640502~hmac=7a5900d4414fe0968cee84f98edf0eff8c5af5aeececcf81ab6adb36ee34403b',
          title: 'Food Presentation',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/fp.pdf',
          desc: 'Kompetisi Food Presentation oleh peserta Lomba Pendukung'
        },
        {
          img: 'https://img.freepik.com/free-photo/painting-dark-skinned-primary-school-age-boy-drawing-with-blue-pencil-sideways-camera-while-sitting-table-room-daylight_259150-59521.jpg?w=1060&t=st=1679993347~exp=1679993947~hmac=912c8d792381a178667c595025ae2c679deb3b2cc0ffa24397fc28bd51b62de1',
          title: 'Jenjang TK : Coloring',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/cr.pdf',
          desc: 'Lomba mewarnai oleh peserta Lomba Pendukung'
        },
        {
          img: 'https://img.freepik.com/free-photo/three-kids-reading_23-2147782154.jpg?w=1060&t=st=1679993484~exp=1679994084~hmac=9f99a2c32715594c6716834f0dd126de85f9db2d6f752db45d13699d8f1e3703',
          title: 'Story Telling',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/cr.pdf',
          desc: 'Lomba Storytelling oleh peserta Lomba Pendukung'
        },
        {
          img: 'https://img.freepik.com/free-photo/brother-sister-girl-boy-kid-joy-playful-leisure-concept_53876-71147.jpg?w=740&t=st=1679994375~exp=1679994975~hmac=25f48441d8c9c7ad6b608409ca9dc0e1d84c7473f1c7ca5fcba84c4ca270f5ba',
          title: 'Kids Warrior',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/kw.pdf',
          desc: 'Lomba Kids Warrior oleh peserta Lomba Pendukung'
        },
        {
          img: 'https://img.freepik.com/free-photo/boy-playing-with-plastic-blocks-library-room-school_1249-516.jpg?w=1060&t=st=1679994562~exp=1679995162~hmac=7f7545eae04d848c4ead459b90a3c51f6f33639b7b213309c39b8365732563eb',
          title: 'Lego Race',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/lr.pdf',
          desc: 'Lomba Lego Race oleh peserta Lomba Pendukung'
        },
        {
          img: 'https://img.freepik.com/free-photo/painting-dark-skinned-primary-school-age-boy-drawing-with-blue-pencil-sideways-camera-while-sitting-table-room-daylight_259150-59521.jpg?w=1060&t=st=1679993347~exp=1679993947~hmac=912c8d792381a178667c595025ae2c679deb3b2cc0ffa24397fc28bd51b62de1',
          title: 'Jenjang SD : Coloring',
          file: process.env.VUE_APP_BASE_URL + 'event/logo/crsd.pdf',
          desc: 'Lomba mewarnai oleh peserta Lomba Pendukung'
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>