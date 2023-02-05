<template>
  <div class="pt-40 p-20">
    <div class="flex h-full w-full">
      <div class="grid grid-cols-1 w-3/4 px-20 gap-10 mr-10">
        <div v-for="(item, key) in this.data" :key="key" class="bg-gray-200 rounded-2xl h-72 flex relative overflow-hidden">
          <img :src="item.img" class="object-cover rounded-l-2xl h-full w-3/5">
          <div class="flex relative text-end w-2/5 h-full">
            <div class="absolute rounded-3xl bg-[#143359] w-[50rem] h-96 transform -rotate-12 -translate-y-20 -translate-x-20">

            </div>
            <div class="absolute w-full pr-6 py-8">
              <h2 class="text-white font-bold text-2xl truncate">{{item.title}}</h2>
              <span class="text-white text-sm font-bold">{{item.date}}</span>
              <p class="text-white text-sm mt-10">{{item.desc}}</p>
              <button class="px-4 bg-amber-400 text-white rounded-lg mt-5">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div class="h-0 flex relative">
        <div class="fixed bg-gray-200 rounded-2xl w-1/5 h-96"></div>
      </div>
    </div>
    <PaginationComponent />
  </div>
</template>

<script>
import PaginationComponent from "@/components/Widget/PaginationComponent";

export default {
  name: "GalleryPage",
  data() {
    return {
      data: [
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/andras-vas-Bd7gNnWJBkU-unsplash.webp',
          photo: 96,
          year: 2017
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/domenico-loia-hGV2TfOh0ns-unsplash.webp',
          photo: 69,
          year: 2018
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/ea56e996-74fc-4fc2-a522-43b43dd13045-1536x1024.webp',
          photo: 29,
          year: 2019
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.webp',
          photo: 43,
          year: 2020
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/luca-bravo-XJXWbfSo2f0-unsplash.webp',
          photo: 50,
          year: 2021
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/IMG_20201103_152022.webp',
          photo: 20,
          year: 2022
        }
      ],
    }
  },
  components: {
    PaginationComponent
  },
  created() {
    document.documentElement.classList.remove('default')
    document.documentElement.classList.add('light')
  }
}
</script>

<style scoped>

</style>