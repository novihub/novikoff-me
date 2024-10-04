import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutNav } from 'widgets/AboutNav'
import cls from './AboutPage.module.scss'

interface AboutPageProps {
	className?: string
}

export const AboutPage: FC<AboutPageProps> = ({ className }) => {
	return (
		<div className={classNames(cls.aboutPage, {}, [className])}>
			<AboutNav />
			<Routes>
				<Route path={'/personal-info'} element={<div>personal info</div>} />
			</Routes>
		</div>
	)
}
