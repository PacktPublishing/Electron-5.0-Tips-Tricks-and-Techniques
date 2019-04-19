const path = require("path");

const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

//Export the Configuration 
const config = {
  target: "electron-renderer",
  mode: process.env.NODE_ENV || "production",
  entry: path.resolve("./src/app.js"),
  output: {
    path: path.resolve("./dist/"),
    filename: "app.js"
  },
  externals: [
    (function() {
      var IGNORES = ["ws", "electron"];
      return function(context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
  ],
  module: {
    rules: [
      {
        test: /\.node$/,
        use: "node-loader",
      },
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.(sa|sc|c)ss$/, //.css, .sass, .scss
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: "fonts/"
          }
        }
      }
    ]
  },
  
  plugins: [new ExtractTextWebpackPlugin("app.css")]

};

module.exports = config;