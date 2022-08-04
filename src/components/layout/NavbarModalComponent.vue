<template>
  <div class="fixed py-5 px-10 w-full" v-if="this.$store.state.modal.navbar" @="closeModal">
    <div class="w-full h-96 z-50 bg-white m-auto rounded-2xl shadow-xl"></div>
  </div>
</template>

<script>
export default {
  name: "NavbarModalComponent",
  methods: {
  }
}
</script>

<style scoped>

</style>