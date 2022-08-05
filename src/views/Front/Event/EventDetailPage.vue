<template>
  <div class="pt-24">
    <div class="p-10 text-white">
      <img class="w-full h-96 object-cover rounded-2xl" src="https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/andras-vas-Bd7gNnWJBkU-unsplash.webp">
      <h1 class="text-5xl mt-8 text-amber-400 font-bold">Kids Preneurship</h1>
      <p class="text-center font-bold text-lg mt-5 px-60">Kidspreneurship kembali hadir di tahun yang ke-9 dengan konsep dan semangat yang baru. Berbeda dengan tahun-tahun sebelumnya, di tahun 2022 ini seluruh rangakain event Kidspreneurship akan diselenggarakan secara daring. Dengan mengusung tema “FESTIVAL EPIK 2K22 (Entrepreneur Pelajar Indonesia Kreatif)”, Kidspreneurship menggaet para Sobat Preneur Muda khususnya di tingkat SMP/MTS, SMA/SMK/MAN se-Indonesia untuk berkompetisi dan menunjukkan kreativitas mereka dalam menyusun konsep bisnis terbaik.</p>
      <button class="bg-yellow-500 mt-10 rounded-xl px-10 py-2 font-bold text-2xl">
        Lihat Lomba
      </button>
    </div>
    <div class="my-10 grid grid-cols-2 gap-10 px-32">
      <div v-for="(item, key) in this.data" :key="key" class="bg-gray-200 rounded-2xl h-72 flex relative overflow-hidden">
        <img :src="item.img" class="object-cover rounded-l-2xl h-full w-3/5">
        <div class="flex relative text-start w-2/5 h-full">
          <div class="absolute rounded-3xl bg-yellow-500 w-[50rem] h-96 transform rotate-12 -translate-y-3 -translate-x-20">

          </div>
          <div class="absolute w-full pr-6 py-8">
            <h2 class="text-white font-bold text-2xl truncate">{{item.title}}</h2>
            <p class="text-white text-sm mt-5">{{item.desc}}</p>
            <button class="px-4 bg-[#143359] text-white rounded-lg mt-5">Read More</button>
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
          title: 'Lorem Ipsum Dolor sir amet',
          desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/domenico-loia-hGV2TfOh0ns-unsplash.webp',
          title: 'Lorem Ipsum Dolor sir amet',
          desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/ea56e996-74fc-4fc2-a522-43b43dd13045-1536x1024.webp',
          title: 'Lorem Ipsum Dolor sir amet',
          desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.webp',
          title: 'Lorem Ipsum Dolor sir amet',
          desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/luca-bravo-XJXWbfSo2f0-unsplash.webp',
          title: 'Lorem Ipsum Dolor sir amet',
          desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/IMG_20201103_152022.webp',
          title: 'Lorem Ipsum Dolor sir amet',
          desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>