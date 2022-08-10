<template>
  <div class="pt-40 p-20">
    <div class="flex h-full w-full">
      <div class="grid grid-cols-2 w-3/4 px-20 gap-10 mr-10">
        <div v-for="(item, key) in this.data" :key="key" class="bg-gray-200 rounded-2xl h-96 flex relative">
          <img :src="item.img" class="object-cover rounded-2xl h-full w-full">
          <div class="absolute bottom-0 rounded-2xl bg-blue-900 px-5 py-8 text-end w-full h-36 flex">
            <div class="absolute -top-8 l-0 w-16 h-16 rounded-lg bg-yellow-500 p-1">
              <img class="w-full h-full object-cover rounded-lg" :src="item.img">
            </div>
            <div class="w-full pl-20">
              <h3 class="text-white text-2xl font-bold">{{item.title}}</h3>
            </div>
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
  name: "LombaPage",
  data() {
    return {
      data: [
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/andras-vas-Bd7gNnWJBkU-unsplash.webp',
          photo: 96,
          title: "Lorem Ipsum Dolor Sit Amet"
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/domenico-loia-hGV2TfOh0ns-unsplash.webp',
          photo: 69,
          title: 'Lorem Ipsum Dolor Sit Amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/ea56e996-74fc-4fc2-a522-43b43dd13045-1536x1024.webp',
          photo: 29,
          title: 'Lorem Ipsum Dolor Sit Amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.webp',
          photo: 43,
          title: 'Lorem Ipsum Dolor Sit Amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/luca-bravo-XJXWbfSo2f0-unsplash.webp',
          photo: 50,
          title: 'Lorem Ipsum Dolor Sit Amet'
        },
        {
          img: 'https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/IMG_20201103_152022.webp',
          photo: 20,
          title: 'Lorem Ipsum Dolor Sit Amet'
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