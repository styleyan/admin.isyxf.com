module.exports = {
  assetsDir: './static',
  devServer: {
    port: 8090,
    open: true,
    proxy: {
      '/api': {
        target: 'http://47.99.247.50:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
}
