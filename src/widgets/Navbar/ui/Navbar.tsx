import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={'/'} theme={AppLinkTheme.PRIMARY}>
					Main Page
				</AppLink>
				<AppLink to={'/counter'} theme={AppLinkTheme.RED}>
					Counter
				</AppLink>
			</div>
		</div>
	)
}
