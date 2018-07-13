const webpack = require('webpack');
const Pkg = require('./package.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("babel-polyfill");
require('file-loader')
var DashboardPlugin = require('webpack-dashboard/plugin');
const express = require("express");
var compression = require("compression");
const CompressionPlugin = require("compression-webpack-plugin");
const env = process.env.NODE_ENV
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    mode: 'development',

    plugins: [
        //new UglifyJsPlugin(),
        require('precss'),
        require('autoprefixer'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CompressionPlugin({
            test: /\.(js|css)$/,
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            deleteOriginalAssets: true
        })

    ],
    entry: {
        HomeBundle: ["babel-polyfill", '../Selstice/Scripts/Home/Entry.tsx', '../Selstice/Stylesheets/Home/Index.scss']
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/wwwroot/bundles/',
        jsonpFunction: 'webpackJsonp'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {test: /\.tsx$/, exclude: /node_modules/, use: { loader: "awesome-typescript-loader"}},
            {test: /\.ts$/, exclude: /node_modules/, use: {loader: "awesome-typescript-loader"}},
            {test: /\.jsx$/,loader: 'babel-loader',exclude: /node_modules/,options: {"presets": ["react"]}},
            {test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/,options: {"presets": ["react"]}},
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                     MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/, use: ['file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, 
                            disable: true, 
                        },
                    },]},
        ]
    }
}

