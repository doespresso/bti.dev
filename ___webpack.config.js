var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var entryPointsPathPrefix = './src/javascripts/pages';
var WebpackConfig = {
    entry : {
        a: entryPointsPathPrefix + '/a.jsx',
        b: entryPointsPathPrefix + '/b.jsx',
        c: entryPointsPathPrefix + '/c.jsx',
        d: entryPointsPathPrefix + '/d.jsx'
    },

    // send to distribution
    output: {
        path: './dist/js',
        filename: '[name].js'
    },

    module: {
        loaders: [
            // Babel transformer (the one and only)
            { test: /\.js(x)?$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    },

    resolve: {
        // resolve file extensions
        extensions: ['.jsx', '.js', '']
    },

    plugins: [
        // separate common code
        new CommonsChunkPlugin('bundle.js'),
        new ExtractTextPlugin("[name].css")
    ]
};

module.exports = WebpackConfig;