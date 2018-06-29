/// <binding />

const webpack = require('webpack');
const Pkg = require('./package.json');
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("babel-polyfill");
require('file-loader')
var DashboardPlugin = require('webpack-dashboard/plugin');
const env = process.env.NODE_ENV
//config = {

module.exports = {
    mode: 'production',
    plugins: [

        //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
        //new BundleAnalyzerPlugin()
        new DashboardPlugin({ port: 4502 }),
        new UglifyJsPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    entry: {
        HomeBundle: ["babel-polyfill",'../Selstice/Scripts/Home/Entry.tsx', '../Selstice/Stylesheets/Home/Index.scss']
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
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    "presets": ["react"]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,                
                options: {
                    "presets": ["react"]
                }
            },
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
           // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    }
}

