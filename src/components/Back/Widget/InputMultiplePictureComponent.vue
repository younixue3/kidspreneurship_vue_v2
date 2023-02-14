<template>
  <div class="relative w-full">
    <label tabindex="1"
           class="absolute px-2 -translate-y-6 text-sm flex items-center transition-all ease-in-out">{{ label }}</label>
    <div class="grid grid-cols-3 gap-2">
      <div tabindex="1" v-for="(item,index) in this.preview" v-bind:key="index"
           class="h-20 bg-gray-200 rounded-md flex relative h-full transition-all ease-in-out">
        <img class="rounded-md h-full w-full object-cover" :src="item">
        <button @click="deleteFoto(index)"
                class="bg-red-500 absolute text-xs text-white right-0 m-1 rounded-sm p-1">
          <font-awesome-icon icon="fa-solid fa-trash"/>
        </button>
      </div>
      <div tabindex="1"
           class="h-32 bg-gray-200 rounded-md flex relative h-full hover:bg-blue-300/100 transition-all ease-in-out">
        <div class="m-auto h-full">
          <div class="h-full">
            <label type="button" :for="'rdev-'+name"
                   class="h-full text-2xl cursor-pointer px-3 rounded-l-md text-center flex transition-all ease-in-out">
              <div class="m-auto">
                <font-awesome-icon class="" icon="fa-solid fa-arrow-up-from-bracket"/>
                <div class="text-sm font-thin mt-2 ">Upload Gambar</div>
              </div>
            </label>
          </div>
          <div class="hidden">
            <input :disabled="disabled" @change="insertFotoRumah" :name="name" :id="'rdev-'+name" type="file"
                   multiple hidden
                   class="cursor-pointer w-full text-md text-center px-1.5 font-thin peer outline-none file:hidden"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputMultiplePictureComponent",
  data() {
    return {
      input: null,
      preview: [],
      uploaded: [],
    }
  },
  props: {
    label: String,
    type: String,
    name: String,
    disabled: String
  },
  methods: {
    insertFotoRumah: function () {
      this.input = event.target.files
      for (let i = 0; i < this.input.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(this.input[i])
        reader.onload = () => {
          this.preview.push(reader.result)
          this.uploaded.push(this.input[i])
        }
      }
      this.fileInput()
    },
    deleteFoto: function (key) {
      this.preview.splice(key)
      this.uploaded.splice(key)
    },
    fileInput: function () {
      this.$emit('file', this.uploaded)
    },
  }
}
</script>

<style scoped>

</style>