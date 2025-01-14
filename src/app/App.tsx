import { AppRouter } from 'app/providers/router'
import { HashRouter } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { Footer } from 'widgets/Footer'
import { Navbar } from 'widgets/Navbar'
import { StoreProvider } from './providers/StoreProvider'
import ThemeProvider from './providers/ThemeProvider'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import './styles/index.scss'

export const App = () => {
	const { theme } = useTheme()

	return (
		<HashRouter>
			<StoreProvider>
				<ThemeProvider>
					<div className={classNames('app', {}, [theme])}>
						<Navbar />
						<AppRouter />
						<Footer />
					</div>
				</ThemeProvider>
			</StoreProvider>
		</HashRouter>
	)
}
