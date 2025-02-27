import { FC } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Link to='/hello'>
				<div className={cls.logo}>
					<h1>Novikoff</h1>
				</div>
			</Link>
			<div className={cls.links}>
				<AppLink
					className={cls.active}
					to='/hello'
					theme={AppLinkTheme.PRIMARY}
				>
					_hello
				</AppLink>
				<AppLink to='/about-me/personal-info' theme={AppLinkTheme.PRIMARY}>
					_about-me
				</AppLink>
				<AppLink to='/projects' theme={AppLinkTheme.PRIMARY}>
					_projects
				</AppLink>
				<AppLink to='/contact-me' theme={AppLinkTheme.PRIMARY}>
					_contact_me
				</AppLink>
			</div>

			{/* <ThemeSwitcher /> */}
		</div>
	)
}
