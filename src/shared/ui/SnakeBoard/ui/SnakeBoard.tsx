import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Cell } from './Cell'
import cls from './SnakeBoard.module.scss'

interface SnakeBoardProps {
	className?: string
}

export const SnakeBoard: FC<SnakeBoardProps> = ({ className }) => {
	let cells = []

	for (let y = 0; y < 26; y++) {
		for (let x = 0; x < 16; x++) {
			cells.push({ x, y, index: `${x}:${y}` })
		}
	}

	console.log(cells[0].index)

	return (
		<div className={classNames(cls.snakeBoard, {}, [className])}>
			{cells.map(cell => (
				<Cell key={cell.index} cell={cell} />
			))}
		</div>
	)
}
