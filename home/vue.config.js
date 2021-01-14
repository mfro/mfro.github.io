const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

module.exports = {
  pages: {
    index: {
      title: 'mfro',
      entry: 'src/main.js',
      filename: 'index.html',
      template: 'src/main.html',
      favicon: 'src/assets/favicon.ico',
    },
  },

  devServer: {
    disableHostCheck: true,
  },

  chainWebpack: (config) => {
    if (process.env['NODE_ENV'] == 'production') {
      config.plugin('html-index')
        .tap(args => {
          args[0].inject = false;
          return args;
        });

      config.plugin('inline-css')
        .use(HTMLInlineCSSWebpackPlugin);
    }

    config.plugins.delete('preload-index');
  },
};
