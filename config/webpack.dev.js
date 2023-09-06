const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: "development",
    devServer: {
        port: 3999,
        historyApiFallback: true,
        liveReload: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
};

// Order matters, last overrides if its re-specified
module.exports = merge(commonConfig, devConfig);
