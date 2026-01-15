import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugin";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig( options : BuildOptions ) :webpack.Configuration {
    const {mode, path } = options

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
 }
}