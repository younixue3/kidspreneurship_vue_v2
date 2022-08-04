<template>
  <div class="fixed z-50 w-full">
    <div class="py-8 backdrop-blur-md bg-gray-900/80">
      <div class="flex justify-between">
        <div class="w-96 text-white text-2xl font-bold text-center">Kidspreneurship</div>
        <div class="grid grid-cols-4 w-96 text-white mr-auto">
          <div>Home</div>
          <div @click="openModal">Virtual Expo</div>
          <div @click="openModal">Tentang</div>
          <div @click="openModal">Publikasi</div>
        </div>
        <div class="w-52">
          <div class="grid grid-cols-2 gap-3">
            <button class="bg-transparent border-white border-2 text-white rounded-md">
              Sign In
            </button>
            <button class="bg-white border-2 text-black rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    <NavbarModalComponent />
  </div>
</template>

<script>
import NavbarModalComponent from "@/components/layout/NavbarModalComponent";

export default {
  name: "NavbarComponent",
  components: {
    NavbarModalComponent
  },
  methods: {
    openModal: function () {
      this.$store.commit('openModalNavbar')
    }
  }
}
</script>

<style scoped>

</style>