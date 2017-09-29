const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    main: './src/js/main.js'
  },
  module: {
    loaders: [{
      test: /\.hbs/,
      loader: "handlebars-template-loader"
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  devtool: "inline-eval-cheap-source-map",
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Exploring bits of ES5 vs ES6 performance',
      inject: false,
      template: require('html-webpack-template'),
      //filename: 'assets/templates/index.hbs'

      // Optional
      appMountId: 'app',
      meta: [{
        name: 'description',
        content: 'Explore several execution performance comparisons between ES5 and ES6.'
      }],
      mobile: true,
      lang: 'en-US',
      links: [
        'https://fonts.googleapis.com/css?family=Roboto',
        {
          href: '/apple-touch-icon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        }
      ]
    })
  ],
  output: {
    filename: 'assets/[name].bundle.js',
    path: path.resolve(__dirname, 'deploy')
  }
};
