import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins  ({path}: BuildOptions):webpack.WebpackPluginInstance[]  {
    return [
            new HTMLWebpackPlugin({
                template: path.html,
            }),
        new webpack.ProgressPlugin(),
]

}