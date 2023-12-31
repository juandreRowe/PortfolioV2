const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: "asset/resource",
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader' , 'css-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ]
};