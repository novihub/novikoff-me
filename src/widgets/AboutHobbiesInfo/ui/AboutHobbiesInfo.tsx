import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AboutHobbiesInfo.module.scss'

interface AboutHobbiesInfoProps {
	className?: string
}

export const AboutHobbiesInfo: FC<AboutHobbiesInfoProps> = ({ className }) => {
	return (
		<div className={classNames(cls.AboutHobbiesInfo, {}, [className])}>
			Hobbies Info
		</div>
	)
}
