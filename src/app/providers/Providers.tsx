import { FC, ReactNode } from 'react'
import { HashRouter } from 'react-router-dom'
import { StoreProvider } from './StoreProvider'
import ThemeProvider from './ThemeProvider'

interface IProvidersProps {
	children: ReactNode
}

export const Providers: FC<IProvidersProps> = ({ children }) => {
	return (
		<HashRouter>
			<StoreProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</StoreProvider>
		</HashRouter>
	)
}
