import { FC } from 'react'
import HobbiesIcon from 'shared/assets/images/AboutPage/hobbies-icon.svg'
import PersonalInfoIcon from 'shared/assets/images/AboutPage/personal-info-icon.svg'
import ProfessionalInfoIcon from 'shared/assets/images/AboutPage/professional-info-icon.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AboutNav.module.scss'
import { AboutNavLink } from './AboutNavLink'
interface AboutNavProps {
	className?: string
}

export const AboutNav: FC<AboutNavProps> = ({ className = '' }) => {
	return (
		<nav className={classNames(cls.aboutNav, {}, [className])}>
			<AboutNavLink to={'/about-me/professional-info'}>
				<ProfessionalInfoIcon />
			</AboutNavLink>
			<AboutNavLink to={'/about-me/personal-info'}>
				<PersonalInfoIcon />
			</AboutNavLink>
			<AboutNavLink to={'/about-me/hobbies-info'}>
				<HobbiesIcon />
			</AboutNavLink>
		</nav>
	)
}
