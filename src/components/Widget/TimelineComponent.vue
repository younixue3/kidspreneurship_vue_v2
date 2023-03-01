<template>
  <div class="grid justify-items-center grid-cols-1 gap-5">
    <div v-for="(item, key) in this.data" :key="key" class="flex h-full w-full p-5">
      <div class="flex flex-col">
        <FontAwesomeIcon class="text-5xl text-white pb-3" :class="item.status ? 'text-yellow-500' : 'text-white'" icon="fa-solid fa-circle-check" />
        <div class="flex h-full w-full" v-if="key != this.data.length - 1">
          <div class="w-1.5 m-auto h-full w-full rounded-full" :class="item.status ? 'bg-yellow-500' : 'bg-white'"></div>
        </div>
      </div>
      <div class="m-auto rounded-xl ml-5 w-full h-full text-start py-3 p-5" :class="item.status ? 'bg-yellow-500 text-white' : 'bg-white text-black'">
        <span class="text-sm">{{item.date}}</span>
        <h3 class="text-lg font-bold -mt-2">{{item.title}}</h3>
        <p class="text-sm mt-3">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "TimelineComponent",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      data: [
        {
          status: false,
          date: '22 Februari, 2023, 24 Maret, 2023',
          title: 'Pendaftaran Akun Peserta',
          desc: 'Pendaftaran Akun untuk peserta dan melakukan validasi pembayaran'
        },
        {
          status: false,
          date: '22 Februari, 2023 - 24 Maret, 2023',
          title: 'Submit Karya (Proposal, Pitchdesk)',
          desc: 'Peserta submit karyanya kepada Admin Kidspreneurship 2K23'
        },
        {
          status: false,
          date: '27 Maret, 2023 - 1 April, 2023',
          title: 'Penjurian Seleksi Proposal',
          desc: 'Penjurian seleksi proposal yang telah di submit oleh peserta lomba'
        },
        {
          status: false,
          date: '5 April, 2023',
          title: 'Pengumuman 10 besar tiap Kategori/Jenjang',
          desc: 'Pengumuman top 10 terbesar tiap Kategori/Jenjang'
        },
        {
          status: false,
          date: '5 April, 2023 - 12 Mei, 2023',
          title: 'Coaching & Submit Karya Lanjutan (Mock up & Video)',
          desc: 'Sesi coaching dan Submit Mock Up Karya dan Video Karya lanjutan oleh peserta'
        },
        {
          status: false,
          date: '12 Mei, 2023 - 13 Mei, 2023',
          title: 'Kidspreneur Expo & Peserta 10 Besar',
          desc: 'Kidspreneur Expo & Peserta 10 Besar'
        },
        {
          status: false,
          date: '12 Mei, 2023 - 13 Mei, 2023',
          title: 'Kidspreneur Expo & Voting Juara Favorit',
          desc: 'Kidspreneur Expo & Voting Juara Favorit'
        },
        {
          status: false,
          date: '13 Mei, 2023',
          title: 'Penjurian dan Penghitungan Hasil',
          desc: 'Penjurian dan Penghitungan Hasil'
        },
        {
          status: false,
          date: '13 Mei, 2023',
          title: 'Penutupan dan Pengumuman Pemenang',
          desc: 'Penutupan dan Pengumuman Pemenang'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>