<template>
  <div class="text-black" v-if="$store.state.formside.url">
    <div class="w-full" v-for="(item, index, key) in this.$store.state.formside.data" :key="key">
      <label v-if="item.type != 'hidden'" class="uppercase text-white">{{ item.name }}</label>
      <div class="text-white p-5" v-if="item.type == 'kategori'">
        <div>
          <label class="block">Nama</label>
          <input
              class="w-full border border-gray-400 mt-2 text-black focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1"
              v-model="kategori.nama">
        </div>
        <div>
          <label class="block">Nominal</label>
          <input
              class="w-full border border-gray-400 mt-2 text-black focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1"
              type="number"
              v-model="kategori.nominal">
        </div>
        <div>
          <label class="block">Jenjang</label>
          <select
              class="w-full border border-gray-400 mt-2 text-black focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1"
              type="number"
              v-model="kategori.jenjang">
            <option>sd</option>
            <option>smp</option>
            <option>sma</option>
            <option>tk</option>
          </select>
        </div>
        <div class="mt-4">
          <button @click="addKategori($store.state.formside.id)"
                  class="p-1 px-3 text-white text-lg rounded-lg bg-blue-700 hover:bg-blue-800 transition ease-in-out duration-150">
            Add
          </button>
        </div>
        <div class="my-5">
          <table class="w-full table-auto bg-white rounded-lg">
            <thead class="text-center bg-gray-500">
            <tr>
              <td class="rounded-tl-lg">Nama</td>
              <td>Nominal</td>
              <td>Jenjang</td>
              <td class="w-10 rounded-tr-lg">#</td>
            </tr>
            </thead>
            <tbody>
            <tr class="text-black" v-for="(item, index, key) in this.$store.state.formside.data.kategori.content"
                :key="key">
              <td>{{ item.nama }}</td>
              <td>{{ item.nominal }}</td>
              <td>{{ item.jenjang }}</td>
              <td>
                <button @click="deleteKategori(item.id)">
                  <FontAwesomeIcon class="text-red-500" icon="fa-solid fa-trash-can"/>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="my-2">
        <input
            class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1"
            v-if="item.type == 'text' || item.type == 'number'" :type="item.type" v-model="item.content">
        <img class="w-full" @click="openModal(item.content)" v-if="item.type == 'image'" :src="item.content">
        <Editor v-if="item.type == 'richtext'"
                api-key="myd6mneo80f63ct1oaplcds41f0tlhaveajnuxiiaenjdgol"
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
                v-model="item.content" :value="item.content"/>
        <div class="w-full" v-if="item.type == 'images'">
          <InputMultiplePictureComponent name="images" @file="insertFoto(index)"/>
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
        <input class="block w-full text-sm text-white
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100" v-if="item.type == 'file'" type="file" @change="imageInput(index)">
        <input class="block w-full text-sm text-white
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100" v-if="item.type == 'video'" type="file" @change="imageInput(index)">
        <video v-if="item.type == 'video'">
          <source :src="item.content">
        </video>
      </div>
    </div>
    <div class="mt-10 flex space-x-5" v-if="$store.state.formside.for != 'transaksi'">
      <button @click="submit"
              class="p-1 px-3 text-white text-lg rounded-lg bg-blue-700 hover:bg-blue-800 transition ease-in-out duration-150"
              type="submit">Submit
      </button>
      <button @click="$store.commit('removeFormSide')"
              class="p-1 px-3 text-black text-lg rounded-lg bg-white hover:bg-gray-200 transition ease-in-out duration-150">
        Cancel
      </button>
      <button @click="remove"
              class="p-1 px-3 text-white text-lg rounded-lg bg-red-700 hover:bg-red-800 transition ease-in-out duration-150">
        Delete
      </button>
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
      kategori: {
        nama: null,
        nominal: null,
        jenjang: null
      },
      file_url: null
    }
  },
  mounted() {
  },
  methods: {
    addKategori: function (id) {
      axios.post(process.env.VUE_APP_BASE_URL + 'api/event/kategori/' + id + '/addKategori/', this.kategori,
          {
            headers: {
              'Authorization': `Bearer   ${this.$store.state.auth.access}`
            }
          })
          .then(resp => {
            console.log(resp)
          })
          .finally(() => {
            this.$router.go()
          })
    },
    deleteKategori: function (id) {
      axios.delete(process.env.VUE_APP_BASE_URL + 'api/event/kategori/' + id + '/',
          {
            headers: {
              'Authorization': `Bearer   ${this.$store.state.auth.access}`
            }
          })
          .then(resp => {
            console.log(resp)
          })
          .finally(() => {
            this.$router.go()
          })
    },
    insertFoto: function (index) {
      this.$store.state.formside.data[index].upload = event.target.files
    },
    submit: function () {
      var formData = new FormData()
      this.$store.commit('RefreshToken')
      for (var i in this.$store.state.formside.data) {
        if (this.$store.state.formside.data[i].type === 'file' || this.$store.state.formside.data[i].type === 'video') {
          if (typeof this.$store.state.formside.data[i].content != 'string') {
            formData.append('file', this.$store.state.formside.data[i].content)
          }
        } else if (i === 'images') {
          for (var x in this.$store.state.formside.data[i].upload) {
            const formDataStorage = new FormData()

            formDataStorage.append('image', this.$store.state.formside.data[i].upload[x])
            axios.post(process.env.VUE_APP_STORAGE_URL + 'storage/?single=true', formDataStorage)
                .then(resp => {
                  formData.append('image' + x, resp.data)
                })
            if (this.$store.state.formside.data[i].upload.length - 1 == x) {
              formData.append('image'+x, this.$store.state.formside.data[i].upload[x])
              console.log('stop')
              break
            }
          }
        } else {
          formData.append(i, this.$store.state.formside.data[i].content)
        }
      }
      if (this.$store.state.formside.methode === 'post') {
        const formDataStorage = new FormData()
        for (var key of formData.entries()) {
          console.log(key[0] + ', ' + key[1]);
        }

        formDataStorage.append('image', formData.get('file'))
        axios.post(process.env.VUE_APP_STORAGE_URL + 'storage/?single=true', formDataStorage)
            .then(resp => {
              formData.set('file', resp.data)
              formData.set('logo', resp.data)
            })
            .finally(() => {
              for (var key of formData.entries()) {
                console.log(key[0] + ', ' + key[1]);
              }
              axios.post(process.env.VUE_APP_BASE_URL + this.$store.state.formside.url,
                  formData, {
                    headers: {
                      'Authorization': `Bearer   ${this.$store.state.auth.access}`
                    }
                  })
                  .then(resp => {
                    // console.log(resp)
                  })
            })
      } else if (this.$store.state.formside.methode === 'put') {
        if (this.$store.state.formside.from == 'galeri') {
          this.$store.state.formside.url = this.$store.state.formside.url + 'updateGaleri/'
          for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
          }
        }
        const formDataStorage = new FormData()

        formDataStorage.append('image', formData.get('file'))
        axios.post(process.env.VUE_APP_STORAGE_URL + 'storage/?single=true', formDataStorage)
            .then(resp => {
              formData.set('file', resp.data)
            })
            .finally(() => {
              axios.put(process.env.VUE_APP_BASE_URL + this.$store.state.formside.url,
                  formData, {
                    headers: {
                      'Authorization': `Bearer   ${this.$store.state.auth.access}`
                    }
                  })
                  .then(resp => {
                    console.log(resp)
                  })

            })
      }
      // this.$store.commit('removeFormSide')
      // this.$router.go()
    },
    remove: function () {
      axios.delete(process.env.VUE_APP_BASE_URL + this.$store.state.formside.url, {
        headers: {
          'Authorization': `Bearer   ${this.$store.state.auth.access}`
        }
      })
          .then(resp => {
          })
      this.$store.commit('removeFormSide')
      this.$router.go()
    },
    imageInput: function (index) {
      this.$store.state.formside.data[index].content = event.target.files[0]
    },
    deleteFoto: function (id) {
      axios.delete(process.env.VUE_APP_BASE_URL + 'api/publikasi/image-galeri/' + id + '/', {
        headers: {
          'Authorization': `Bearer   ${this.$store.state.auth.access}`
        }
      })
          .then(resp => {
          })
    },
    openModal: function (url) {
      this.$store.commit('openModal', url)
    }
  }
}
</script>

<style scoped>
.scrollbarhidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbarhidden::-webkit-scrollbar {
  display: none;
}
</style>