<template>
  <navbar-component />
  <router-view></router-view>
  <footbar-component />
</template>

<script>
import NavbarComponent from "@/components/layout/NavbarComponent";
import FootbarComponent from "@/components/layout/FootbarComponent";

export default {
  name: "LayoutPage",
  components: {
    FootbarComponent,
    NavbarComponent
  },
  mounted() {
    // this.$router.push('/home')
  }

}
</script>

<style scoped>

</style>