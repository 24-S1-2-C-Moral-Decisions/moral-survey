var path = require("path");
var webpack = require('webpack');
var globalConfig = require("../../config.js");

var config = () => {
  console.log("Environment: ", process.env.NODE_ENV || 'development');
  console.log("API_URL: ", globalConfig.API_URL);
  console.log("MORAL_URL: ", globalConfig.MORAL_URL);
  
  return {
    entry: path.join(__dirname, "study-model.js"),
    output: {
      path: path.join(__dirname, "js"),
      filename: "bundle-model.min.js"
    },
    devServer: {
      port: globalConfig.SURVEY_PORT,
      static: {
        directory: path.join(__dirname, ".."),
        publicPath: "/",
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'API_URL': JSON.stringify(globalConfig.API_URL),
        'MORAL_URL': JSON.stringify(globalConfig.MORAL_URL),
        'process.env.API_URL': JSON.stringify(globalConfig.API_URL),
        'process.env.MORAL_URL': JSON.stringify(globalConfig.MORAL_URL),
        'global.API_URL': JSON.stringify(globalConfig.API_URL),
        'global.MORAL_URL': JSON.stringify(globalConfig.MORAL_URL),
      }),
    ],
    module: {
      rules: [
          {
            test: require.resolve('jquery'),
              use: [{
                loader: 'expose-loader',
                options: {
                  exposes: "jquery",
                },
              },
              // {
              //   loader: 'expose-loader',
              //   options: {
              //     exposes: '$',
              //   },
              // }
              ]
          },
          {
            test: /.*\.html$/, loader: "handlebars-loader"
          }
      ]
    },
    externals: [
      /^(jquery.i18n|\$)$/i,
      {
         d3: "d3"
      }
    ],
    resolve: {
      fallback: {
        "fs": false,
        "path": false,
        "url": false
      },
    }
  }
};

module.exports = config;