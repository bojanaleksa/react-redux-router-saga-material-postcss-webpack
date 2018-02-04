var webpack = require("webpack");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./src/config-prod.json');

module.exports = require('./webpack.config.js');

delete module.exports.devtool;

module.exports.plugins.pop();
module.exports.plugins.concat([
    new CleanWebpackPlugin(['public']),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        config: JSON.stringify(config)
    }),
    new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
            warnings: false
        }
    })
]);

module.exports.module.rules.forEach(rule => {
    delete rule.exclude;
    return rule;
});