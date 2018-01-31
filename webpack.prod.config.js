var webpack = require("webpack");
const config = require('./src/config-prod.json');

module.exports = require('./webpack.config.js');

delete module.exports.devtool;
module.exports.plugins.pop();
module.exports.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
        config: JSON.stringify(config)
    })
);

module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
            warnings: false
        }
    })
);