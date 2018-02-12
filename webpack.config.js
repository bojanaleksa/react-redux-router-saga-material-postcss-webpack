var path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style.css'
});

const config = require('./src/config-dev.json');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        "./index.js"
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        contentBase: path.resolve(__dirname, 'public/assets'),
        //stats: 'errors-only',
        open: true,
        //port: 8080,
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            config: JSON.stringify(config)
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: /src/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['env', 'stage-0', 'react']
                }
            }
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.(jpg|png|gif|svg)$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }, {
            test: /\.scss$/,
            include: /src/,
            exclude: /node_modules/,
            use: extractPlugin.extract({
                use: ["css-loader", "sass-loader", "postcss-loader"],
                fallback: 'style-loader'
            })
        }]
    }
}