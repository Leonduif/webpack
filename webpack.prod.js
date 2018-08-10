const merge                = require('webpack-merge');
const common               = require('./webpack.common.js');
const path                 = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename:  '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
            }
        ]
    }
});