<template>
 <div>
   <div v-for="(item, index, key) in this.$store.state.formside.data" :key="key">
     <label class="uppercase">{{ item.name }}</label>
     <div class="my-2">
       <input v-if="item.type != 'file'" v-model="item.content">
       <input v-if="item.type == 'file'" type="file" @change="imageInput(index)">
     </div>
   </div>
   <div class="mt-10 flex space-x-5">
     <button @click="submit" class="bg-white text-black px-1" type="submit">Submit</button>
     <button class="bg-white text-black px-1">Cancel</button>
   </div>
 </div>
</template>

<script>
import store from "@/store/index";

export default {
  name: "FormSide",
  components: {
    store
  },
  data() {
    return {}
  },
  mounted() {
    console.log(store.state.formside)
  },
  methods: {
    submit: function () {
      console.log(this.$store.state.formside)
    },
    imageInput: function (index) {
      this.$store.state.formside.data[index].content = event.target.files[0]
      console.log(this.$store.state.formside.data[index].content)
    }
  }
}
</script>

<style scoped>

</style>