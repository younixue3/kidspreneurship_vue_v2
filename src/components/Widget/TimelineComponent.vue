<template>
  <div class="grid justify-items-center grid-cols-1 gap-5">
    <div v-for="(item, key) in this.data" :key="key" class="flex h-40 w-1/3">
      <div class="flex flex-col">
        <FontAwesomeIcon class="text-5xl text-white pb-3" :class="item.status ? 'text-yellow-500' : 'text-white'" icon="fa-solid fa-circle-check" />
        <div class="flex h-full w-full" v-if="key != this.data.length - 1">
          <div class="w-1.5 m-auto h-full w-full rounded-full" :class="item.status ? 'bg-yellow-500' : 'bg-white'"></div>
        </div>
      </div>
      <div class="m-auto rounded-xl ml-5 w-full h-full text-start py-3 p-5" :class="item.status ? 'bg-yellow-500 text-white' : 'bg-white text-black'">
        <span class="text-sm">{{item.date}}</span>
        <h3 class="text-lg font-bold -mt-2">{{item.title}}</h3>
        <p class="text-sm mt-3">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "TimelineComponent",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      data: [
        {
          status: true,
          date: '18 Juli, 2022',
          title: 'Lorem Ipsum',
          desc: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
          status: true,
          date: '18 Juli, 2022',
          title: 'Lorem Ipsum',
          desc: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
          status: true,
          date: '18 Juli, 2022',
          title: 'Lorem Ipsum',
          desc: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
          status: false,
          date: '18 Juli, 2022',
          title: 'Lorem Ipsum',
          desc: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
          status: false,
          date: '18 Juli, 2022',
          title: 'Lorem Ipsum',
          desc: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>