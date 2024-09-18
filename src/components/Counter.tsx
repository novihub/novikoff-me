import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)
 
	const increment = () => {
		setCount(count + 1)
	}

	return (
		<div>
			<h1>Counter</h1>
			<div style={{ fontSize: '20px' }}>{count}</div>
			<button className={classes.btn} onClick={increment}>
				Click me!
			</button>
		</div>
	)
}
