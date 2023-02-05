<template>
  <MenuBarComponent>
    <template v-slot:content>
      <router-view></router-view>
    </template>
  </MenuBarComponent>
</template>

<script>
import MenuBarComponent from "@/components/layout/Back/MenuBarComponent";

export default {
  name: "LayoutDashboardPage",
  components: {
    MenuBarComponent
  },

  data() {
    return {

    }
  },
  mounted() {
    document.documentElement.classList.add('dark')
  }
}
</script>

<style scoped>

</style>