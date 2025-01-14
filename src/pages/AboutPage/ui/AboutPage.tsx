import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'

import { AboutHobbiesInfo } from 'widgets/about-hobbies-info'
import { AboutNav } from 'widgets/about-nav'
import { AboutPersonalInfo } from 'widgets/about-personal-info'
import { AboutProfessionalInfo } from 'widgets/about-professional-info'
import cls from './AboutPage.module.scss'

interface AboutPageProps {
	className?: string
}

export const AboutPage: FC<AboutPageProps> = ({ className = '' }) => {
	return (
		<section className={classNames(cls.aboutPage, {}, [className])}>
			<AboutNav />
			<Routes>
				<Route path={'professional-info'} element={<AboutProfessionalInfo />} />
				<Route path={'personal-info'} element={<AboutPersonalInfo />} />
				<Route path={'hobbies-info'} element={<AboutHobbiesInfo />} />
			</Routes>
		</section>
	)
}
