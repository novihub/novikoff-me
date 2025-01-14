import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		hot: true,
		port: options.port,
		historyApiFallback: true // Only for dev server
	}
}
