const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withImages = require('nextjs-fonts');

// module.exports = withSass(withFonts({
//   webpack(config, options) {
//     return config;
//   },
// }));

module.exports = withCss(withSass(withFonts({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]--[hash:base64:5]",
    url: false,
    sourceMap: true
  },
  distDir: '../.next',
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
}, withImages({
  exportTrailingSlash: true,
  distDir: '../.next',
}))))