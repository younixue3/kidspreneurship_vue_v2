<template>
  <div class="flex text-white divide-x divide-gray-700">
    <div class="flex flex-col divide-y divide-gray-700">
      <div class="flex h-20 m-auto space-x-3 px-5 py-3">
        <img class="h-10 w-10 bg-gray-600 rounded-lg p-0.5 object-contain m-auto" src="@/assets/logo_colorfull.png">
        <div class="m-auto">Dashboard</div>
      </div>
      <div class="py-5 px-3 h-screen">
        <div class="flex flex-col space-y-2">
          <button class="hover:bg-gray-500 px-2 rounded-lg flex space-x-3 text-left">
            <div class="m-auto  ">
              <FontAwesomeIcon icon="fa-solid fa-table-columns" />
            </div>
            <div class="text-sm m-auto w-full">Berita</div>
          </button>
          <button class="hover:bg-gray-500 px-2 rounded-lg flex space-x-3 text-left">
            <div class="m-auto ">
              <FontAwesomeIcon icon="fa-solid fa-book" />
            </div>
            <div class="text-sm m-auto w-full">Galeri</div>
          </button>
        </div>
        <div class="flex flex-col space-y-3 border-t border-gray-700 mt-4 pt-4">
          <div class="flex flex-col space-y-3">
            <div class="text-left text-xs font-thin text-gray-400">Publikasi</div>
            <button class="hover:bg-gray-500 px-2 rounded-lg flex space-x-3 text-left">
              <div class="m-auto  ">
                <FontAwesomeIcon icon="fa-solid fa-table-columns" />
              </div>
              <div class="text-sm m-auto w-full">Dashboard</div>
            </button>
            <button class="hover:bg-gray-500 px-2 rounded-lg flex space-x-3 text-left">
              <div class="m-auto ">
                <FontAwesomeIcon icon="fa-solid fa-book" />
              </div>
              <div class="text-sm m-auto w-full">Panduan</div>
            </button>
          </div>
          <div class="flex flex-col space-y-3">
            <div class="text-left text-xs font-thin text-gray-400">Event</div>
            <button class="hover:bg-gray-500 px-2 rounded-lg flex space-x-3 text-left">
              <div class="m-auto  ">
                <FontAwesomeIcon icon="fa-solid fa-table-columns" />
              </div>
              <div class="text-sm m-auto w-full">Event</div>
            </button>

          </div>
          <div class="flex flex-col space-y-3">
            <div class="text-left text-xs font-thin text-gray-400">Admin</div>
            <button class="hover:bg-gray-500 px-2 rounded-lg flex space-x-3 text-left">
              <div class="m-auto  ">
                <FontAwesomeIcon icon="fa-solid fa-table-columns" />
              </div>
              <div class="text-sm m-auto w-full">Peserta</div>
            </button>
            <button class="hover:bg-gray-500 px-2 rounded-lg flex space-x-3 text-left">
              <div class="m-auto ">
                <FontAwesomeIcon icon="fa-solid fa-book" />
              </div>
              <div class="text-sm m-auto w-full">Panitia</div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="grow flex flex-col divide-y divide-gray-700">
      <div class="flex h-20 justify-end space-x-2 px-5">
        <div class="flex relative my-auto">
          <div class="w-2.5 h-2.5 bg-green-500 absolute rounded-full right-0"></div>
          <button class="bg-white text-black w-7 h-7 rounded-full"><FontAwesomeIcon icon="fa-solid fa-moon" /></button>
        </div>
        <div class="flex relative my-auto">
          <div class="w-4 h-4 bg-rose-300 text-black font-bold absolute rounded-full -right-1 -top-2 text-xs">3</div>
          <button class="bg-gray-500 text-white w-7 h-7 rounded-full"><FontAwesomeIcon icon="fa-solid fa-bell" /></button>
        </div>
      </div>
      <div class="flex flex-col space-y-3 py-5 px-3 h-screen">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="flex flex-col divide-y divide-gray-700">
      <div class="flex m-auto space-x-3 px-5 py-3">
        <img class="h-10 w-10 bg-gray-300 rounded-full p-0.5 object-contain" src="@/assets/logo_colorfull.png">
        <div class="m-auto">Ricko Tiaka</div>
      </div>
      <div class="flex flex-col space-y-3 py-5 px-3 h-screen"></div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "MenuBarComponent",
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>

</style>