import { FC } from 'react'

import BackgroundBlur from 'shared/assets/images/HelloPage/hello-blur.png'
import { classNames } from 'shared/lib/classNames/classNames'
import { HelloConsole } from 'widgets/HelloConsole'
import { HelloText } from 'widgets/HelloText'
import cls from './HelloPage.module.scss'

interface HelloPageProps {
	className?: string
}

const HelloPage: FC<HelloPageProps> = ({ className }) => {
	return (
		<div className={classNames(cls.helloPage, {}, [className])}>
			<HelloText />
			<HelloConsole />
			<div className={cls.backgroundBlur}>
				<img src={BackgroundBlur} alt='' />
			</div>
		</div>
	)
}

export default HelloPage
