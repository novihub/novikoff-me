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
	[AppRoutes.ABOUT_ME]: '/about-me',
	[AppRoutes.PROJECTS]: '/projects'
}

export const routeConfig = {
	[AppRoutes.HELLO]: {
		path: AppRoutes.HELLO,
		element: <HelloPage />
	},
	[AppRoutes.ANY]: {
		path: AppRoutes.ANY,
		element: <Navigate to={AppRoutes.HELLO} />
	},
	[AppRoutes.ABOUT_ME]: {
		path: AppRoutes.ABOUT_ME,
		element: <div>ABOUT ME</div>
	},
	[AppRoutes.PROJECTS]: {
		path: AppRoutes.PROJECTS,
		element: <div>PROJECTS</div>
	}
}
