import  path from 'path';
import  webpack from'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const Mode = 'development';
// const Mode = 'production';

const config: webpack.Configuration = {
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

export default config