import { AppRouter } from 'app/providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { Container } from 'shared/ui/Container'
import { Navbar } from 'widgets/Navbar'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import './styles/index.scss'

export const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Container>
				<Navbar />
				<AppRouter />
			</Container>
		</div>
	)
}
