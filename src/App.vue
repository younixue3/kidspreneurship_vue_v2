<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  components: {},
  created() {
    // this.$router.push('/signup')
    if (this.$store.state.darkmode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('default')
    }
// Whenever the user explicitly chooses light mode
    localStorage.theme = 'default'
// Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark'
// Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme')
  }
}
</script>