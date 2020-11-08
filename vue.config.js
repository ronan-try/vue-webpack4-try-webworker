module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.worker\.js$/,
      // exclude: /\.worker\.js$/,
      use: { loader: 'worker-loader' }
    })
  }
};