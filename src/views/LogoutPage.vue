<template>

</template>

<script>
export default {
  name: "LogoutPage",
  mounted() {
    this.$store.commit('Logout')
  }
}
</script>

<style scoped>

</style>