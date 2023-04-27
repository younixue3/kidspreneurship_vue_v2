<template>
  <div v-if="this.status" class="fixed top-0 left-0 h-full w-full z-50 bg-gray-800/50 flex transition-all ease-in-out">
    <div class="m-auto w-[60rem] h-auto bg-white rounded-2xl">
      <div class="flex">
        <button class="ml-auto m-2 h-8 w-8 hover:bg-gray-200 text-lg rounded-xl" @click="closeModal">
          <FontAwesomeIcon icon="fa-solid fa-xmark"/>
        </button>
      </div>
      <div class="p-5 block md:hidden">
        <div v-for="(item, key) in this.data" :key="key"
             class="">
          <img :src="item.file" class="w-full">
          <div class="flex relative text-end w-full h-full">
            <div class="w-full h-full pr-3 lg:pr-6 py-8">
              <h2 class="text-black font-bold text-base lg:text-2xl">{{ item.judul }}</h2>
              <router-link :to="'/berita/'+item.slug"
                           class="px-4 bg-amber-400 text-black text-xs lg:text-2xl rounded-lg">Klik Disini
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-5 hidden md:block">
        <div v-for="(item, key) in this.data" :key="key"
             class="bg-gray-200 rounded-2xl h-72 flex my-5 relative overflow-hidden">
          <img :src="item.file" class="object-cover rounded-l-2xl h-full w-3/5">
          <div class="flex relative text-end w-3/5 h-full">
            <div
                class="absolute rounded-3xl bg-[#143359] w-[50rem] h-96 transform -rotate-12 -translate-y-20 -translate-x-5">

            </div>
            <div class="absolute w-full pr-3 lg:pr-6 py-8">
              <h2 class="text-white font-bold text-base lg:text-2xl truncate">{{ item.judul }}</h2>
              <span class="text-white text-sm font-bold"></span>
              <p class="text-white text-sm mt-10 h-24 overflow-hidden mb-5" v-html="item.isi"></p>
              <a :href="item.slug"
                           class="px-4 bg-amber-400 text-black text-xs lg:text-2xl rounded-lg">Klik Disini
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "ModalComponent",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      status: true,
      data: [
        {
          file: 'https://backend.kidspreneurship.co.id/loginpage_715ncxO.png',
          judul: 'Pendaftaran Lomba Pendukung',
          slug: 'https://forms.gle/rmPs9aPGJqcbuzZB9'
        },
        {
          file: 'https://backend.kidspreneurship.co.id/loginpage_qpez1SN.png',
          judul: 'Register Talkshow',
          slug: 'https://bit.ly/talkshowepik2023'
        }
      ]
    }
  },
  methods: {
    closeModal: function () {
      this.status = false
    }
  }
}
</script>

<style scoped>
</style>