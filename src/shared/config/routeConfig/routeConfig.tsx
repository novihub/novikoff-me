import { AboutPage } from 'pages/AboutPage'
import { HelloPage } from 'pages/HelloPage'
import { Navigate } from 'react-router-dom'

export enum AppRoutes {
	ANY = '*',
	HELLO = 'hello',
	ABOUT_ME = 'about-me',
	PROJECTS = 'projects'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.ANY]: '*',
	[AppRoutes.HELLO]: '/hello',
	[AppRoutes.ABOUT_ME]: '/about-me/*',
	[AppRoutes.PROJECTS]: '/projects'
}

export const routeConfig = {
	[AppRoutes.HELLO]: {
		path: RoutePath.hello,
		element: <HelloPage />
	},
	[AppRoutes.ABOUT_ME]: {
		path: RoutePath['about-me'],
		element: <AboutPage />
	},
	[AppRoutes.PROJECTS]: {
		path: RoutePath.projects,
		element: <div>PROJECTS</div>
	},
	// [AppRoutes.ANY]: {
	// 	path: RoutePath['*'],
	// 	element: <Navigate to={AppRoutes.HELLO} />
	// }
}
