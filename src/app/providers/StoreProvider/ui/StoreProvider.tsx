import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from 'app/store/snakeGameSlice'
import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

interface StoreProviderProps {
	children: ReactNode
}

const store = configureStore({
	reducer: {
		gameReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
