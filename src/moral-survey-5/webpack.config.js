var path = require("path");
var webpack = require('webpack');

var config = () => {
  console.log("API_URL: ", process.env.API_URL);
  let baseUrl = process.env.API_URL ? process.env.API_URL : "http://localhost:3000/";
  let baseMoralUrl = process.env.MORAL_URL ? process.env.MORAL_URL : "https://moralfrontend.azurewebsites.net/";
  console.log("API_URL: ", baseUrl);
  return {
    entry: path.join(__dirname, "study-model.js"),
    output: {
      path: path.join(__dirname, "js"),
      filename: "bundle-model.min.js"
    },
    plugins: [
      new webpack.DefinePlugin({
        API_URL: JSON.stringify(baseUrl),
        MORAL_URL: JSON.stringify(baseMoralUrl),
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