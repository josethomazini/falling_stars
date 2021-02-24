/* eslint-disable import/no-extraneous-dependencies */

const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');
const { appTitle } = require('../src/configs/app');

const srcPath = path.resolve(__dirname, '..', 'src');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '..', 'src', 'index.js'),
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '..', 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },

  plugins: [
    new Dotenv(),
    new ESLintPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebPackPlugin({
      title: appTitle,
    }),
  ],

  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader'],
        include: srcPath,
        test: /\.css$/i,
      },

      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        include: srcPath,
        test: /\.m?js$/,
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: srcPath,
        type: 'asset/resource',
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: srcPath,
        type: 'asset/resource',
      },
    ],
  },
};
