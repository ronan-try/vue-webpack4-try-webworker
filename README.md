https://github.com/webpack-contrib/worker-loader/issues/177

```js
// worker-loader@2.0.0
module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.worker\.js$/,
      exclude: /\.worker\.js$/,
      use: { loader: 'worker-loader' }
    })
  }
};

```