<template>
  <div v-if="$store.state.modal.popup.status" class="fixed top-0 left-0 h-full w-full z-50 bg-gray-800/50 flex transition-all ease-in-out">
    <div class="m-auto h-auto bg-white rounded-2xl" :class="width ? width : 'w-[40rem]'">
      <div class="flex">
        <button class="ml-auto m-2 h-8 w-8 text-black hover:bg-gray-200 text-lg rounded-xl" @click="closeModal"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
      </div>
      <div class="p-5">
        <slot></slot>
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
  props: [
    'width',
  ],
  methods: {
    closeModal: function () {
      this.$store.commit('closeModal')
    }
  }
}
</script>

<style scoped>

</style>