const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
//  пока не трогаем его

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// const VueLoaderPlugin=require("vue-loader/lib/plugin")
// ТАк надо подумать над этим
const CopyPlugin = require("copy-webpack-plugin");

const devServer = require("webpack-dev-server");

const { VueLoaderPlugin } = require("vue-loader");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: "development",

  // context для того чтобы понял в какой папи мы работаем
  // mode режим разработчика
  entry: {
    main: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  // Дополнительние настройки
  resolve: {
    extensions: [".js", ".json", ".png", ".jpg"],
  },
  // devtool:
  // devtool изучить потом когда будет время
  devServer: {
    port: 4200,
    hot: isDev,
  },
  plugins: [
    // filename относительний путь и имя файла
    // конфигурации
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/img/favicon.ico", to: "" }],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),

    new HtmlWebpackPlugin({
      filename: "popap.html",
      template: "src/popap.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  // Это лоадери для увеличения функциональности файлов

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      // Добавления vue js
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // scss
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|WebP|gif|jpg|jpeg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      // Добавления vue обработчик

      // Для переноса используется
      {
        test: /\.(woff|ttf|eot|woff2)$/,
        use: ["file-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
