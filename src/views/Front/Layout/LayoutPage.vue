<template>
  <NavbarComponent />
  <router-view></router-view>
  <FootbarComponent />
</template>

<script>
import NavbarComponent from "@/components/layout/NavbarComponent";
import FootbarComponent from "@/components/layout/FootbarComponent";

export default {
  name: "LayoutPage",
  components: {
    FootbarComponent,
    NavbarComponent
  }

}
</script>

<style scoped>

</style>