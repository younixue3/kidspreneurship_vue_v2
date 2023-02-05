<template>
  <div class="">
    <div class="bg-gray-600">
      <h3>Kidspreneurship 2K23</h3>
      <div class="grid grid-cols-3 p-5 gap-10">
        <div class="col-span-1 grid grid-rows-3 gap-y-3">
          <div class="flex bg-gray-500 p-3 text-left">
            <div class="basis-1/3 text-center m-auto"><FontAwesomeIcon class="text-6xl" icon="fa-solid fa-person"/></div>
            <div class="w-full m-auto">
              <div>Peserta Lomba</div>
              <div class="text-2xl">32</div>
            </div>
          </div>
          <div class="flex bg-gray-500 p-3 text-left">
            <div class="basis-1/3 text-center m-auto"><FontAwesomeIcon class="text-6xl" icon="fa-solid fa-box"/></div>
            <div class="w-full m-auto">
              <div>Karya</div>
              <div class="text-2xl">32</div>
            </div>
          </div>
          <div class="flex bg-gray-500 p-3 text-left">
            <div class="basis-1/3 text-center m-auto"><FontAwesomeIcon class="text-5xl" icon="fa-solid fa-people-line"/></div>
            <div class="w-full m-auto">
              <div>Kelompok</div>
              <div class="text-2xl">4</div>
            </div>
          </div>
        </div>
        <div class="col-span-2 bg-gray-100 text-white h-full p-5">
          <ChartLineComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ChartLineComponent from "@/components/Back/Widget/ChartLineComponent";

export default {
  name: "DashboardPage",
  data() {
    return {}
  },
  components: {
    ChartLineComponent,
    FontAwesomeIcon
  }
}
</script>

<style scoped>

</style>