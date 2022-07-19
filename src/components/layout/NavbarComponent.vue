<template>
  <div class="px-5 py-8 bg-gray-800 backdrop-blur-sm opacity-90">
    <div class="flex justify-between">
      <div class="w-96 text-yellow-400 font-bold text-center">Kidspreneurship</div>
      <div class="grid grid-cols-4 w-96 text-white mr-auto">
        <div>Home</div>
        <div>Virtual Expo</div>
        <div>Tentang</div>
        <div>Publikasi</div>
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
</template>

<script>
export default {
  name: "NavbarComponent"
}
</script>

<style scoped>

</style>