const path = require('path');
// const webpack = require('webpack');

/* postcss: () => {
  return [
    autoprefixer({
      browsers: [
        'last 2 version',
      ]
    }),
  ];
},*/

/* {
  loader: 'autoprefixer',
  options: {
    browsers: 'last 2 version'
}*/

const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => {
        return [
          require('autoprefixer'),
        ];
      },
    },
  },
  {
    loader: 'sass-loader',
  },
];

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const config = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    filename: 'app-bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval-source-map',
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: [/node_modules/],
        loader: 'eslint-loader',
        options: {
          fix: true,
          failOnError: false,
        },
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'es2016',
            'es2017',
          ],
        },
      },
      {
        test: /\.(scss|sass)$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: styleLoaders,
        }),
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('styles.css'),
  ],
};

module.exports = config;
