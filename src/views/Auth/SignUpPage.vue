<template>
  <div class="flex h-screen bg-blue-700">
    <div class="flex space-x-10 m-auto bg-white w-[75rem] shadow-2xl shadow-slate-900 shadow-blue-900">
      <img src="@/assets/educs.jpg" class="w-1/2 object-cover">
      <div class="flex w-1/2 text-left p-8">
        <div class="m-auto">
          <h1 class="text-2xl">Welcome to Kidspreneurship</h1>
          <div class="font-light text-sm">Tunjukkan Kreativitasmu, Daftar dan Ikuti Lomba Anak Sekolahan yang Keren dan Menyenangkan!</div>
          <div class="grid grid-cols-3 gap-2 gap-x-5">
            <div>
              <label class="pl-1 text-xs text-gray-500">Nama Depan</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" type="text">
            </div>
            <div>
              <label class="pl-1 text-xs text-gray-500">Nama Belakang</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" type="text">
            </div>
            <div class="col-start-1">
              <label class="pl-1 text-xs text-gray-500">Nomor Handpone</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" type="number">
            </div>
            <div class="col-span-2">
              <label class="pl-1 text-xs text-gray-500">Alamat Email</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" type="email">
            </div>
            <div>
              <label class="pl-1 text-xs text-gray-500">Jenjang</label>
              <select class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1">
                <option>SMP</option>
                <option>SMA</option>
              </select>
            </div>
            <div class="col-start-1">
              <label class="pl-1 text-xs text-gray-500">Provinsi</label>
              <select class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1">
                <option>SMP</option>
                <option>SMA</option>
              </select>
            </div>
            <div>
              <label class="pl-1 text-xs text-gray-500">Kota</label>
              <select class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1">
                <option>SMP</option>
                <option>SMA</option>
              </select>
            </div>
            <div class="col-start-1 col-span-2">
              <label class="pl-1 text-xs text-gray-500">Password</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" type="password">
            </div>
            <div class="col-start-1 col-span-2">
              <label class="pl-1 text-xs text-gray-500">Konfirmasi Password</label>
              <input class="w-full border border-gray-400 mt-2 focus:border-blue-500 focus:border-2 outline-none rounded-lg px-1 py-1" type="password">
            </div>
            <a class="col-start-1 text-xs font-medium text-blue-600 col-span-3 after:content-['_↗']" href="#">
              Sudah memiliki akun ?
            </a>
            <button class="col-start-1 p-1 my-4 text-white text-lg rounded-lg bg-blue-700 hover:bg-amber-400 transition ease-in-out duration-150">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SignUpPage",
  data() {
    return {

    }
  },
  methods: {
    signup: function () {

    }
  }
}
</script>

<style scoped>

</style>