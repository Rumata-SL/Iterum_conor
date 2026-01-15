import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugin";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig( options : BuildOptions ) :webpack.Configuration {
    const {mode, path, isDev } = options

 return {
     mode: mode,
     entry: path.entry,
     output:{
         filename:'[name].[contenthash].js',
         path: path.build,
         clean: true,
     },
     plugins: buildPlugins(options),
     module: {
         rules: buildLoaders(),
     },
     resolve: buildResolvers(),
     devtool: isDev ? 'inline-source-map' : undefined,
     devServer: isDev ? buildDevServer(options) : undefined,
 }
}