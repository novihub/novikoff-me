import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
	name: 'snakeGame',
	initialState: {
		// Game status
		status: 'start',
		// Game objects
		snake: [
			{ x: 0, y: 0, index: `${0}:${0}` },
			{ x: 1, y: 0, index: `${1}:${0}` }
		],
		snakeHead: { x: 1, y: 0, index: `${1}:${0}` },
		snakeSize: 2,
		apple: { x: 1, y: 1, index: `${5}:${5}` },
		// Direction controller
		savedKey: 'right',
		stopKeyCombinations: [
			['up', 'down'],
			['down', 'up'],
			['left', 'right'],
			['right', 'left']
		],
		direction: 'right'
	},
	reducers: {
		// Game status actions
		changeStatus(state) {
			state.status = state.status === 'start' ? 'stop' : 'start'
		},
		// Game object actions
		moveSnake(state) {
			// let head = state.snake[state.snake.length - 1] Similar
			let { x, y } = state.snakeHead

			switch (state.direction) {
				case 'up':
					y = y <= 0 ? 25 : y - 1
					break
				case 'down':
					y = y >= 25 ? 0 : y + 1
					break
				case 'left':
					x = x <= 0 ? 15 : x - 1
					break
				case 'right':
					x = x >= 15 ? 0 : x + 1
					break
				default:
					break
			}
			state.snakeHead = { x, y, index: `${x}:${y}` }
			state.snake.push({ x, y, index: `${x}:${y}` })
			state.snake = state.snake.slice(-state.snakeSize)
		},
		checkApple(state) {
			let { apple, snakeHead, snake } = state
			if (apple.x === snakeHead.x && apple.y === snakeHead.y) {
				let isOnSnake = null
				do {
					apple.x = Math.floor(Math.random() * 16)
					apple.y = Math.floor(Math.random() * 26)
					isOnSnake = snake.find(({ x, y }) => x === apple.x && y === apple.y)
				} while (isOnSnake)
				state.apple = apple
				state.snakeSize += 1
				console.log(state.snakeSize)
			}
		},
		checkGameOver(state) {
			let { x, y } = state.snakeHead
			let snakeHeadless = state.snake.slice()
			snakeHeadless.pop()
			let bitePlace = null
			bitePlace = snakeHeadless.find(s => s.x === x && s.y === y)
			if (bitePlace) {
				state.status = 'stop'
			}
		},
		// Direction controller actions
		saveKey(state, action) {
			console.log(state.direction)
			for (let [a, b] of state.stopKeyCombinations) {
				if (a === state.direction && b === action.payload) return
			}
			state.savedKey = action.payload
		},
		setDirection(state) {
			state.direction = state.savedKey
		}
	}
})

export const { changeStatus, moveSnake, saveKey, setDirection, checkApple } =
	gameSlice.actions
export const gameReducer = gameSlice.reducer
