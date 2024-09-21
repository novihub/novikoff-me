import { AppRouter } from 'app/providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'

import './styles/index.scss'

export const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	)
}
