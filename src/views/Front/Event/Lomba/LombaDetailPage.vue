<template>
  <div class="pt-40 p-20">
    <div>
      <h1 class="text-4xl font-bold">Lorem Ipsum Dolor Sit Amet</h1>
      <div class="flex mt-4">
        <img class="w-[55rem] m-auto h-96 rounded-3xl object-cover" src="https://raw.githubusercontent.com/younixue3/stock_photo_rdev/main/andras-vas-Bd7gNnWJBkU-unsplash.webp">
      </div>
    </div>
    <div class="-mt-40 bg-[#143359] w-full rounded-3xl px-20">
      <div class="pt-52 pb-20 grid grid-cols-1 gap-5 text-white font-medium">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum venenatis tempor. Etiam sagittis dapibus felis, nec scelerisque dui feugiat a. Proin ut massa dui. Aliquam dui diam, interdum et interdum in, imperdiet a odio. Praesent tincidunt magna vel lectus ultricies mollis. Aliquam pharetra maximus interdum. Ut vulputate est ut nisi tempor mollis. Integer faucibus faucibus felis, vel bibendum justo.
        </p>
        <p>
          In porta tempus sapien ut condimentum. Praesent scelerisque metus eros, vel eleifend mi cursus ut. Aenean molestie, libero sit amet dignissim pharetra, tortor magna vestibulum mi, et iaculis nunc augue nec tellus. Nam faucibus efficitur est ut finibus. Sed rutrum et enim eu congue. Mauris hendrerit suscipit gravida. Quisque tincidunt maximus vulputate.
        </p>
        <p>
          Aliquam tempus nibh massa, ut aliquam nisl vulputate sit amet. Morbi ac egestas orci, nec dapibus augue. Integer non neque tortor. Curabitur augue nisl, vulputate id lectus interdum, porttitor vestibulum arcu. Phasellus blandit, libero at laoreet viverra, mauris lectus finibus erat, sed facilisis mi enim a felis. Duis nisl urna, eleifend a pretium vitae, fermentum at ligula. Vestibulum vulputate nibh ac mauris tincidunt vestibulum. Integer pretium nisi quis porttitor ullamcorper. Nunc cursus ultricies nunc vitae porta.
        </p>
      </div>
      <CardGalleryComponent />
      <div class="px-20">
        <CardSlideComponent />
      </div>
    </div>
  </div>
</template>

<script>
import CardGalleryComponent from "@/components/Front/CardGalleryComponent";
import CardSlideComponent from "@/components/Front/CardSlideComponent";

export default {
  name: "LombaDetailPage",
  components: {
    CardGalleryComponent,
    CardSlideComponent
  },
  created() {
    document.documentElement.classList.remove('default')
    document.documentElement.classList.add('light')
  }
}
</script>

<style scoped>

</style>