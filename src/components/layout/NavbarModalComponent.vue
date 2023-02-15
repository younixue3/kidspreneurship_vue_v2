<template>
  <div class="fixed py-5 px-5 lg:px-10 w-full" v-if="this.$store.state.modal.navbar"
       @mouseleave="this.$store.commit('closeModalNavbar')">
    <div class="w-full h-72 lg:h-96 z-50 bg-white m-auto rounded-2xl shadow-xl flex p-5 lg:p-10 justify-between">
      <slot>

      </slot>
      <div class="lg:hidden translate-x-2 -translate-y-3" @click="this.$store.commit('closeModalNavbar')">X</div>
      <div class="bg-gray-200 hidden lg:static rounded-3xl p-10 w-3/4 flex">
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