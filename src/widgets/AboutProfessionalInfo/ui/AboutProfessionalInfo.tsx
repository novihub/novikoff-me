import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AboutProfessionalInfo.module.scss'

interface AboutProfessionalInfoProps {
	className?: string
}

export const AboutProfessionalInfo: FC<AboutProfessionalInfoProps> = ({
	className
}) => {
	return (
		<div className={classNames(cls.aboutProfessionalInfo, {}, [className])}>
			fdflkjdsfklsdfjdsfsdfklsdj
		</div>
	)
}
