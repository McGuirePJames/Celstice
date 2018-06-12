/// <binding />

const webpack = require('webpack');
const Pkg = require('./package.json');
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV
//config = {

module.exports = {
    mode: 'production',
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
        //new BundleAnalyzerPlugin()
        new UglifyJsPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    entry: {
        Home: ['../Selstice/Scripts/Home/Entry.tsx', '../Selstice/Stylesheets/StyleSheet.scss']
    },

    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/wwwroot/scripts/js',
        jsonpFunction: 'webpackJsonp'
    },

    node: {
        fs: 'empty'
    },
    //
    // Enable sourcemaps for debugging webpack's output.
    //devtool: 'source-map',
    devtool: 'inline-source-map',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', ".js", ".json"]
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
                    //"presets": ["env"]
                    "presets": ["react"]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,                
                options: {
                    //"presets": ["env"]
                    "presets": ["react"]
                }
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    }
}

