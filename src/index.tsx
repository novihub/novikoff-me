import StoreProvider from 'app/providers/StoreProvider/ui/StoreProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App'
import ThemeProvider from './app/providers/ThemeProvider'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<BrowserRouter basename='/'>
		<StoreProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</StoreProvider>
	</BrowserRouter>
)
