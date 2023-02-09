<template>
  <div class="flex flex-col space-y-5">
    <div class="bg-gray-600 flex p-2 px-3">
      <div class="flex w-full p-5 space-x-8">
        <img class="bg-white h-60 w-1/3 object-cover" src="">
        <div class="w-2/3 text-left">
          <h1 class="text-2xl mb-10">Lorem Ipsum Dolor Sit Amet</h1>
          <p class="w-96 h-40">Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Lorem
            Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet,
            Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, </p>
        </div>
      </div>
      <div>
        <button @click="menuFormSide('1','Lorem Ipsum Dolor Sit Amet', 'Lorem Ipsum Dolor Sit Amet', 'Lorem Ipsum Dolor Sit Amet')">
          <font-awesome-icon class="text-xl" icon="fa-solid fa-ellipsis"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "BeritaPage",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {}
  },
  methods: {
    menuFormSide: function (id, judul, isi, file) {
      this.$store.commit('pushFormSide',
          {
            id:id,
            data: {
              judul: {
                content: judul,
                type: 'text',
                name: 'judul'
              },
              isi: {
                content: isi,
                type: 'text',
                name: 'isi'
              },
              gambar: {
                content: file,
                type: 'file',
                name: 'file'
              }
            }
          }
      )
    }
  }
}
</script>

<style scoped>

</style>