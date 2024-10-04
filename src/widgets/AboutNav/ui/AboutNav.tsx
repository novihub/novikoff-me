import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './AboutNav.module.scss'

interface AboutNavProps {
	className?: string
}

export const AboutNav: FC<AboutNavProps> = ({ className }) => {
	return (
		<nav className={classNames(cls.aboutNav, {}, [className])}>
			<AppLink to={'/about-me/personal-info'}>fdfsfds</AppLink>
		</nav>
	)
}
