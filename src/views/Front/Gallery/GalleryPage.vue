<template>
  <div class="pt-40 p-20">
    <div class="flex h-full w-full">
      <div class="grid grid-cols-2 w-3/4 px-20 gap-10 mr-10">
        <div v-for="(item, key) in this.data" :key="key" class="bg-gray-200 rounded-2xl h-96 flex relative">
          <img :src="item.img" class="object-cover rounded-2xl h-full w-full">
          <div class="absolute bottom-0 rounded-2xl bg-blue-900 px-5 py-8 text-end w-full h-36">
            <h3 class="text-white text-3xl font-bold">{{item.year}}</h3>
            <p class="text-white font-bold text-lg">{{item.photo}} Foto</p>
          </div>
        </div>
      </div>
      <div class=" h-0 flex relative">
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