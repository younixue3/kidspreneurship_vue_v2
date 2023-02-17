<template>
  <div class="bg-amber-400 p-10 lg:p-32 px-12 lg:px-48 lg:flex justify-between">
    <div>
      <img class="h-12 lg:h-24 mb-5 lg:mb-10" src="@/assets/hbics.png">
      <div class="text-left text-xs font-bold">Indrakila Street No. 99 G - Balikpapan 76125 East Borneo - Indonesia</div>
      <div class="text-left text-xs font-bold">Telephone : +62542 8510 / +62812 5051 5333</div>
    </div>
    <div class="mt-10 lg:mt-0">
      <h4 class="text-left text-xl lg:text-2xl font-bold uppercase mb-4">Related Links</h4>
      <ol class="text-left text-sm lg:text-base px-4">
        <li><a href="http://hbics.sch.id/">Harapan Bangsa Integreted Christian School</a></li>
      </ol>
    </div>
    <div class="mt-5 lg:mt-0">
      <h4 class="text-left text-xl lg:text-2xl font-bold uppercase mb-4">Social Media</h4>
      <ol class="list-none text-left text-sm lg:text-base px-4">
        <li class="list-none"><FontAwesomeIcon class="w-5 mr-0.5" icon="fa-brands fa-facebook"/><a href="https://web.facebook.com/HBICS">Facebook</a></li>
        <li class="list-none"><FontAwesomeIcon class="w-5 mr-0.5" icon="fa-brands fa-instagram"/><a href="https://www.instagram.com/harapanbangsa_balikpapan/">Instagram Harapan Bangsa Balikpapan</a></li>
        <li class="list-none"><FontAwesomeIcon class="w-5 mr-0.5" icon="fa-brands fa-instagram"/><a href="https://www.instagram.com/harapanbangsa_balikpapan/">Instagram Kidspreneurship</a></li>
        <li class="list-none"><FontAwesomeIcon class="w-5 mr-0.5" icon="fa-brands fa-youtube"/><a href="https://www.youtube.com/c/HappyHolyKidsHBICSBalikpapan">Youtube</a></li>
        <li class="list-none"><FontAwesomeIcon class="w-5 mr-0.5" icon="fa-brands fa-linkedin"/><a href="https://www.linkedin.com/company/ytcb/mycompany/">LinkedIn</a></li>
      </ol>
    </div>
  </div>
  <div class="py-1"><div class="mt-auto text-xs text-white">Created With <FontAwesomeIcon class="text-rose-500" icon="fa-solid fa-heart"></FontAwesomeIcon> By <a href="https://www.linkedin.com/in/ricko-caesar-aprilla-tiaka-191095200/" target="_blank">Ricko</a></div></div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
  name: "FootbarComponent",
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>

</style>