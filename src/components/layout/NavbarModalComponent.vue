<template>
  <div class="fixed py-5 px-10 w-full" v-if="this.$store.state.modal.navbar"
       @mouseleave="this.$store.commit('closeModalNavbar')">
    <div class="w-full h-96 z-50 bg-white m-auto rounded-2xl shadow-xl flex p-10 justify-between">
      <slot>

      </slot>
      <div class="bg-gray-200 rounded-3xl p-10 w-3/4 flex">
        <div class="p-5">
          <h4></h4>
        </div>
        <img class="bg-gray-300 rounded-xl">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarModalComponent",
  methods: {}
}
</script>

<style scoped>

</style>