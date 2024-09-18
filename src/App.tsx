import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { CounterPageLazy } from './pages/CounterPage/CounterPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

export const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<div>
				<Link to={'/'}>Main page</Link>
				<Link to={'/counter'}>Counter</Link>
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageLazy />} />
					<Route path='/counter' element={<CounterPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}
