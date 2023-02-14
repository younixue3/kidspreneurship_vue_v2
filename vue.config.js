const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.VUE_APP_BASE_URL === 'production' ? '/kidspreneurship_vue_v2/' : '/',
  transpileDependencies: true,
})
