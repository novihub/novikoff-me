import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from './snakeGameSlice'

const store = configureStore({
	reducer: {
		snakeGame: gameReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

export default store
