import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutNav } from 'widgets/AboutNav'
import { AboutProfessionalInfo } from 'widgets/AboutProfessionalInfo'
import cls from './AboutPage.module.scss'

interface AboutPageProps {
	className?: string
}

export const AboutPage: FC<AboutPageProps> = ({ className }) => {
	return (
		<div className={classNames(cls.aboutPage, {}, [className])}>
			<AboutNav />
			<Routes>
				<Route
					path={'/professional-info'}
					element={<AboutProfessionalInfo />}
				/>
				{/* <Route path={'/personal-info'} element={<AboutProfessionalInfo />} />
				<Route path={'/hobbies-info'} element={<AboutProfessionalInfo />} /> */}
			</Routes>
		</div>
	)
}
