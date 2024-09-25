import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<HashRouter basename='/'>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</HashRouter>
)
