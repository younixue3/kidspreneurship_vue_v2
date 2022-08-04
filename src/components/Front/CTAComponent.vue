<template>
  <div class="bg-gray-100 flex w-full relative my-32">
    <div class="grid grid-cols-4 w-full justify-items-center py-10 gap-20">
      <div class="w-40 h-40 p-9 flex bg-white rounded-2xl transform" v-for="(item, key) in this.data" :class="[key === 5 ? 'col-start-4' : '', key === 0 ? 'rotate-12' : '', key === 1 ? '-rotate-45 scale-75' : '', key === 2 ? '-rotate-12 scale-125 mt-5 justify-self-end' : '', key === 3 ? '-rotate-12 scale-75' : '', key === 4 ? '-rotate-12' : '', key === 3 ? '-rotate-12 scale-75' : '', key === 5 ? 'rotate-12 scale-75' : '']" :key="key">
        <img class="m-auto bg-white" :src="item.img">
      </div>
    </div>
    <div class="absolute w-full h-full flex">
      <div class="m-auto">
        <h3 class="font-bold text-4xl">Supported by</h3>
        <h1 class="font-bold text-6xl">
          Excellent Company
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTAComponent",
  data() {
    return {
      data: [
        {
          img: 'https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background-2048x2048.png',
        },
        {
          img: 'https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=gnNKMMZSvZ3uMA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&ehk=1%2fl4i5MeDLTCpvZhUZlCefvhSzsGR16HIPqagpDxYDg%3d&risl=&pid=ImgRaw&r=0',
        },
        {
          img: 'https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png',
        },
        {
          img: 'https://avatars.githubusercontent.com/u/29785210?s=200&v=4',
        },
        {
          img: 'https://www.freepnglogos.com/uploads/tesla-logo-png-27.png',
        },
        {
          img: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>