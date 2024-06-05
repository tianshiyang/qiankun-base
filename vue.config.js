const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 这些是公共的scss变量和混合方法等
        additionalData: `
          @use "@/styles/element/index";
          `
      }
    }
  }
})
