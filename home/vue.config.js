const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

module.exports = {
  pages: {
    index: {
      title: 'mfro',
      entry: 'src/main.js',
      filename: 'index.html',
      template: 'src/main.html',
      favicon: 'src/assets/favicon.ico',
      inject: false,
    },
  },

  devServer: {
    disableHostCheck: true,
  },

  configureWebpack: {
    plugins: [
      new HTMLInlineCSSWebpackPlugin(),
    ],
  },

  chainWebpack: (config) => {
    config.plugins.delete('preload-index');
  },
};
