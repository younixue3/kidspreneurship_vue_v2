<template>
  <NavbarComponent />
  <router-view></router-view>
</template>

<script>
import NavbarComponent from "@/components/layout/NavbarComponent";

export default {
  name: "LayoutPage",
  components: {
    NavbarComponent
  }

}
</script>

<style scoped>

</style>