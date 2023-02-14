<template>
 <div class="text-black" v-if="$store.state.formside.url">
   <div v-for="(item, index, key) in this.$store.state.formside.data" :key="key">
     <label v-if="item.type != 'hidden'" class="uppercase text-white">{{ item.name }}</label>
     <div class="my-2">
       <input v-if="item.type == 'text' || item.type == 'number'" :type="item.type" v-model="item.content">
       <img @click="openModal(item.content)" v-if="item.type == 'image'" :src="item.content">
       <Editor v-if="item.type == 'richtext'"
           api-key="no-api-key"
           :init="{
                plugins: [
                 'advlist autolink lists link image charmap print preview anchor',
                 'searchreplace visualblocks code fullscreen',
                 'insertdatetime media table paste code help wordcount'
               ],
               toolbar:
                 'undo redo | formatselect | bold italic backcolor | \
                 bullist numlist | removeformat'
              }"
           v-model="item.content" :value="item.content" />
       <div v-if="item.type == 'images'">
         <InputMultiplePictureComponent name="images" @file="insertFoto(index)" />
         <div class="grid grid-cols-3 gap-2 h-60 overflow-auto scrollbarhidden">
           <div tabindex="1" v-for="(item,index) in item.content" v-bind:key="index"
                class="h-20 bg-gray-200 rounded-md flex relative h-full transition-all ease-in-out">
             <img @click="openModal(item.file)" class="rounded-md h-full w-full object-cover" :src="item.file">
             <button @click="deleteFoto(item.id)"
                     class="bg-red-500 absolute text-xs text-white right-0 m-1 rounded-sm p-1">
               <FontAwesomeIcon icon="fa-solid fa-trash"/>
             </button>
           </div>
         </div>
       </div>
       <input class="text-white w-full" v-if="item.type == 'file'" type="file" @change="imageInput(index)">
     </div>
   </div>
   <div class="mt-10 flex space-x-5" v-if="$store.state.formside.for != 'transaksi'">
     <button @click="submit" class="bg-white text-black px-1" type="submit">Submit</button>
     <button @click="$store.commit('removeFormSide')" class="bg-white text-black px-1">Cancel</button>
     <button @click="remove" class="bg-white text-black px-1">Delete</button>
   </div>
   <div class="mt-10 flex space-x-5" v-if="$store.state.formside.for == 'transaksi'">
     <button @click="submit" class="bg-white text-black px-1" type="submit">Verifikasi</button>
     <button @click="$store.commit('removeFormSide')" class="bg-white text-black px-1">Cancel</button>
   </div>
 </div>
</template>

<script>
import store from "@/store/index";
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
import InputMultiplePictureComponent from "@/components/Back/Widget/InputMultiplePictureComponent";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "FormSide",
  components: {
    store,
    Editor,
    InputMultiplePictureComponent,
    FontAwesomeIcon
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {
    insertFoto: function (index) {
      this.$store.state.formside.data[index].upload = event.target.files
    },
    submit: function () {
      const formData = new FormData()
      this.$store.commit('RefreshToken')
      for (var i in this.$store.state.formside.data) {
        if (this.$store.state.formside.data[i].type === 'file') {
          if (typeof this.$store.state.formside.data[i].content != 'string') {
            formData.append(i, this.$store.state.formside.data[i].content)
          }
        }else if (i === 'images') {
          for (var x in this.$store.state.formside.data[i].upload) {
            formData.append('image' + x, this.$store.state.formside.data[i].upload[x])
          }
        } else {
          formData.append(i, this.$store.state.formside.data[i].content)
        }
      }
      // formData.append('token', this.$store.state.auth.access)
      if (this.$store.state.formside.methode === 'post'){
        axios.post(process.env.VUE_APP_BASE_URL + this.$store.state.formside.url,
            formData, {headers: {
                'Authorization': `Bearer   ${this.$store.state.auth.access}`
              }})
            .then(resp => {
            })

      } else if (this.$store.state.formside.methode === 'put') {
        if (this.$store.state.formside.from == 'galeri') {
          this.$store.state.formside.url = this.$store.state.formside.url + 'updateGaleri/'
        }
        axios.put(process.env.VUE_APP_BASE_URL + this.$store.state.formside.url,
            formData, {headers: {
                'Authorization': `Bearer   ${this.$store.state.auth.access}`
              }})
            .then(resp => {
            })

      }
      this.$store.commit('removeFormSide')
      this.$router.go();
    },
    remove: function () {
      axios.delete(process.env.VUE_APP_BASE_URL + this.$store.state.formside.url, {headers: {
              'Authorization': `Bearer   ${this.$store.state.auth.access}`
            }})
          .then(resp => {
          })
      this.$router.go();
      this.$store.commit('removeFormSide')
    },
    imageInput: function (index) {
      this.$store.state.formside.data[index].content = event.target.files[0]
    },
    deleteFoto: function (id) {
      axios.delete(process.env.VUE_APP_BASE_URL + 'api/publikasi/image-galeri/' + id + '/', {headers: {
          'Authorization': `Bearer   ${this.$store.state.auth.access}`
        }})
          .then(resp => {
          })
      this.$router.go();
    },
    openModal: function (url) {
      this.$store.commit('openModal', url)
    }
  }
}
</script>

<style scoped>
.scrollbarhidden {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbarhidden::-webkit-scrollbar {
  display: none;
}
</style>