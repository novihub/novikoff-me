import { AppRouter } from 'app/providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { Footer } from 'widgets/footer'
import { Navbar } from 'widgets/navbar'
import { Providers } from './providers/Providers'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import './styles/index.scss'

export const App = () => {
	const { theme } = useTheme()

	return (
		<Providers>
			<div className={classNames('app', {}, [theme])}>
				<Navbar />
				<AppRouter />
				<Footer />
			</div>
		</Providers>
	)
}
