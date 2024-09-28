import { RootState } from 'app/providers/StoreProvider'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Cell.module.scss'

interface CellProps {
	className?: string
	cell: {
		x: number
		y: number
		index: string
	}
}

export const Cell: FC<CellProps> = ({ cell }) => {
	const snake = useSelector((store: RootState) => store.gameReducer.snake)
	const apple = useSelector((store: RootState) => store.gameReducer.apple)

	let cellStyle = ''

	for (let s of snake) {
		if (s.x === cell.x && s.y === cell.y) cellStyle = cls.snake
	}

	if (apple.x === cell.x && apple.y === cell.y) cellStyle = cls.apple

	return <span className={classNames(cls.cell, {}, [cellStyle])}></span>
}
