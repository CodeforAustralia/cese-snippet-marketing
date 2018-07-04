// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const cwd = path.resolve(__dirname, './../');
const nodeModules = path.resolve(__dirname, './../node_modules');
const appSrc = path.resolve(__dirname, './../src');

const browsers = ['> 1%', 'last 2 versions', 'IE >= 9'];
const isProd = false;


module.exports = {

  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win"
    // if there are any conflicts. This matches Node resolution mechanism.
    // https://github.com/facebookincubator/create-react-app/issues/253
    modules: [
      'node_modules',
      nodeModules,
      appSrc,
    ],
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools, although we do not recommend using it, see:
    // https://github.com/facebookincubator/create-react-app/issues/290
    // `web` extension prefixes have been added for better support
    // for React Native Web.
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.less', '.scss', '.sass', '.styl', '.css'],

    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      // Not necessary unless you consume a module using `createClass`
      'create-react-class': 'preact-compat/lib/create-react-class'
    }
  },

  resolveLoader: {
    alias: {
      'proxy-loader': require.resolve('./proxy-loader')
    }
  },

  module: {
    rules: [
      // add your custom rules.

      { // SASS
        enforce: 'pre',
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'proxy-loader',
            options: {
              cwd,
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [nodeModules]
              }
            }
          }
        ]
      },
      { // User styles
        test: /\.(css|less|s[ac]ss|styl)$/,
        include: [
          appSrc
          // path.resolve(__dirname, './../src/components'),
          // path.resolve(__dirname, './../src/routes'),
          // source('components'),
          // source('routes')
        ],
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]__[hash:base64:5]',
              importLoaders: 1,
              sourceMap: isProd
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [autoprefixer({ browsers })]
            }
          }
        ]
      },
      { // External / `node_module` styles
        test: /\.(css|less|s[ac]ss|styl)$/,
        exclude: [
          appSrc
          // path.resolve(__dirname, './../src/components'),
          // path.resolve(__dirname, './../src/routes'),
          // source('components'),
          // source('routes')
        ],
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: isProd
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [autoprefixer({ browsers })]
            }
          }
        ]
      },

    ],
  },

  plugins: [
    // your custom plugins
  //
  //   // Extract CSS
  //   new ExtractTextPlugin({
  //     filename: isProd ? 'style.[contenthash:5].css' : 'style.css',
  //     disable: !isProd,
  //     allChunks: true
  //   }),
  ],
};
