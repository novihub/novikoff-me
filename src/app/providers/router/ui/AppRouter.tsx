import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(obj => (
					<Route key={obj.path} path={obj.path} element={obj.element} />
				))}
			</Routes>
		</Suspense>
	)
}

export default AppRouter
