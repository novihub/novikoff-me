import { FC, ReactNode } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red'
}

interface AppLinkProps extends LinkProps {
	className?: string
	children: ReactNode
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = props => {
	const { children, className = '', theme = AppLinkTheme.PRIMARY, to } = props

	const location = useLocation()
	const isActive = location.pathname === to

	return (
		<Link
			to={to}
			className={classNames(cls.appLink, { [cls.active]: isActive }, [
				className,
				cls[theme]
			])}
		>
			{children}
		</Link>
	)
}
