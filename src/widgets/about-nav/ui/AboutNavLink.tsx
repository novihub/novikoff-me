import { FC, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AboutNavLink.module.scss'

interface AboutNavLinkProps {
	className?: string
	children: ReactNode
	to: string
}

export const AboutNavLink: FC<AboutNavLinkProps> = ({
	children,
	className = '',
	to
}) => {
	const location = useLocation()
	const isActive = location.pathname === to

	return (
		<Link
			to={to}
			className={classNames(cls.aboutNavLink, { [cls.active]: isActive }, [
				className
			])}
		>
			{children}
		</Link>
	)
}
