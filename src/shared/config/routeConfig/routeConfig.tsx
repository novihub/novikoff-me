import { CounterPage } from 'pages/CounterPage'
import { MainPage } from 'pages/MainPage'

export enum AppRoutes {
	MAIN = 'main',
	COUNTER = 'COUNTER'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.COUNTER]: '/counter'
}

export const routeConfig = {
	[AppRoutes.MAIN]: {
		path: AppRoutes.MAIN,
		element: <MainPage />
	},
	[AppRoutes.COUNTER]: {
		path: AppRoutes.COUNTER,
		element: <CounterPage />
	}
}
