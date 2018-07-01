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

const app = express();

app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});

module.exports = {
    mode: 'production',

    plugins: [
        new UglifyJsPlugin(),
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
            {test: /\.scss/,use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]},
            {test: /\.css/,exclude: /node_modules/, use: [MiniCssExtractPlugin.loader,"css-loader",] },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/, use: ['file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },]},
            //{ test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/, use: [{ loader: 'file-loader?name=/public/icons/[name].[ext]', options: {} }, { loader: 'url-loader', options: { limit: 8192 } }] }
            //{ test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/, use: [{ loader: 'url-loader' }, {loader: 'file-loader'}] }
        ]
    }
}

