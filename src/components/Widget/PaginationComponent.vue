<template>
  <div class="mt-10 border-t-2 h-full border-gray-200 grid grid-cols-8">
    <div class="py-4 -mt-1">Previous</div>
    <div class="col-span-6 -mt-1">
      <div class="flex justify-center">
        <button class="py-4 px-4">1</button>
        <button class="py-4 px-4 border-t-4 border-blue-800">2</button>
        <button class="py-4 px-4">3</button>
        <button class="py-4 px-4">4</button>
        <button class="py-4 px-4">5</button>
        <button class="py-4 px-4">6</button>
      </div>
    </div>
    <div class="py-4 -mt-1">Next</div>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent"
}
</script>

<style scoped>

</style>