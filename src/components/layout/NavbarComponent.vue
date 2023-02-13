<template>
  <div class="fixed z-50 w-full">
    <div class="py-8 backdrop-blur-md bg-gray-900/80">
      <div class="flex justify-between">
        <div class="w-96 text-white text-2xl font-bold text-center">Kidspreneurship</div>
        <div class="grid grid-cols-4 w-96 text-white mr-auto">
          <div>Home</div>
<!--          <div @mouseover="openModal('virtualexpo')">Virtual Expo</div>-->
          <div @click="">Tentang</div>
          <div @mouseover="openModal('publikasi')">Publikasi</div>
        </div>
        <div class="w-52">
          <div class="grid grid-cols-2 gap-3">
            <button class="bg-transparent border-white border-2 text-white rounded-md">
              Masuk
            </button>
            <button class="bg-white border-2 text-black rounded-md">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
    <NavbarModalComponent>
      <div v-if="this.page == 'virtualexpo'" class="flex flex-col justify-between w-1/4 py-5">
        <router-link to="/event/kidspreneurship-2k23" class="rounded-l-3xl p-5 bg-gray-200">Kidspreneurship 2K23</router-link>
        <router-link to="/event/lomba-pendukung" class="rounded-l-3xl p-5 bg-gray-200">Lomba Pendukung</router-link>
      </div>
      <div v-if="this.page == 'publikasi'" class="flex flex-col justify-between w-1/4 py-5">
        <router-link to="/pengumuman" class="rounded-l-3xl p-5 bg-gray-200">Pengumuman</router-link>
        <router-link to="/gallery" class="rounded-l-3xl p-5 bg-gray-200">Gallery</router-link>
        <router-link to="/berita" class="rounded-l-3xl p-5 bg-gray-200">Berita</router-link>
      </div>
    </NavbarModalComponent>
  </div>
</template>

<script>
import NavbarModalComponent from "@/components/layout/NavbarModalComponent";

export default {
  name: "NavbarComponent",
  data() {
    return {
      page: null
    }
  },
  components: {
    NavbarModalComponent
  },
  methods: {
    openModal: function (halaman) {
      this.page = halaman
      this.$store.commit('openModalNavbar')
    }
  }
}
</script>

<style scoped>

</style>