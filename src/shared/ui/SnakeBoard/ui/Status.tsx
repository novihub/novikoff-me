import { RootState } from 'app/providers/StoreProvider'
import {
	changeStatus,
	checkApple,
	checkGameOver,
	moveSnake,
	setDirection
} from 'app/store/snakeGameSlice'
import { FC, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Status.module.scss'

interface StatusProps {
	className?: string
}

export const Status: FC<StatusProps> = ({ className }) => {
	const status = useSelector((store: RootState) => store.gameReducer.status)
	const dispatch = useDispatch()

	let timer = useRef(null)
	const update = () => {
		dispatch(moveSnake())
		dispatch(setDirection())
		dispatch(checkApple())
		dispatch(checkGameOver())
	}
	const startTimer = () => (timer.current = setInterval(() => update(), 100))
	const stopTimer = () => clearInterval(timer.current)

	const snakeBtnHandler = () => {
		status === 'start' ? startTimer() : stopTimer()
		dispatch(changeStatus())
		dispatch(setDirection())
		dispatch(checkApple())
	}

	return (
		<div className={cls.status}>
			<button
				className={classNames(cls.snakeStart, {}, [className])}
				onClick={snakeBtnHandler}
			>
				{status}
			</button>
		</div>
	)
}
