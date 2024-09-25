import { HelloPage } from 'pages/HelloPage'

export enum AppRoutes {
	HELLO = 'hello'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.HELLO]: '/hello',
}

export const routeConfig = {
	[AppRoutes.HELLO]: {
		path: AppRoutes.HELLO,
		element: <HelloPage />
	}
}
