var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname),
    devtool: debug ? "inline-sourcemap" : null,
    entry: [
        "script-loader!./node_modules/jquery/dist/jquery.min.js",
        "script-loader!./node_modules/foundation-sites/dist/js/foundation.min.js",
        "./public/script.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
        }]
    },
    output: {
        path: __dirname + "/public/",
        filename: "script.min.js"
    },

};