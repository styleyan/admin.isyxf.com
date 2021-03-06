module.exports = {
  // publicPath: '/',
  outputDir: 'node/static',
  assetsDir: './dist',
  // assetsDir: './static',
  devServer: {
    port: 8090,
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
}
