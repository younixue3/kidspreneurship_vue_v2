<template>
  <div class="flex h-full w-full pt-40 p-20">
    <div class="grid grid-cols-2 w-full px-20 gap-10 mr-10">
      <div class="bg-gray-200"></div>
      <div class="bg-gray-200"></div>
    </div>
    <div class="w-96 h-96 bg-gray-200 rounded-xl"></div>
  </div>
</template>

<script>
export default {
  name: "GalleryPage",
  created() {
    document.documentElement.classList.remove('default')
    document.documentElement.classList.add('light')
  }
}
</script>

<style scoped>

</style>