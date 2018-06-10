/// <binding />

const webpack = require('webpack');
const Pkg = require('./package.json');
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = process.env.NODE_ENV
//config = {

module.exports = {
    mode: 'production',
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
        //new BundleAnalyzerPlugin()
        new UglifyJsPlugin()
    ],
    entry: {
        Home: '../Celstice/Scripts/Home/Entry.tsx'
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
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
        ]
    }
}

