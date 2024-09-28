import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from './snakeGameSlice'

const store = configureStore({
	reducer: {
		snakeGame: gameReducer
	}
})
