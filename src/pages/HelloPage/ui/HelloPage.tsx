import { FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { HelloConsole } from 'widgets/hello-console'
import { HelloText } from 'widgets/hello-text'
import cls from './HelloPage.module.scss'

interface HelloPageProps {
	className?: string
}

const HelloPage: FC<HelloPageProps> = ({ className = '' }) => {
	return (
		<div className={classNames(cls.helloPage, {}, [className])}>
			<HelloText />
			<HelloConsole />
			{/* <div className={cls.backgroundBlur}>
				<img src={BackgroundBlur} alt='' />
			</div> */}
		</div>
	)
}

export default HelloPage
