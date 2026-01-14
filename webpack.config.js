const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

const Mode = 'development';
// const Mode = 'production';

module.exports = {
    mode: Mode,
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output:{
        filename:'[name].[contenthash].js',
        path: path.resolve(__dirname, 'build.js'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader', 
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}