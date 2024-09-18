import { Configuration } from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buldDevServer'
import { BuildOptions } from './types/config'

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const { mode, paths, isDev } = options

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true
		},
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(),

		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: buildDevServer(options)
	}
}
