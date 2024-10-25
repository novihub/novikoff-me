import { FC } from 'react'
import Diple from 'shared/assets/images/diple.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PersonalInfoLink.module.scss'

interface PersonalInfoLinkProps {
	className?: string
	Folder: any
	text: string
	setPage: (page: string) => void
	isActive: boolean
	isActiveHandler: any
	id: string
}

export const PersonalInfoLink: FC<PersonalInfoLinkProps> = ({
	className,
	Folder,
	text,
	isActive,
	isActiveHandler,
	setPage,
	id
}) => {
	return (
		<div
			onClick={() => {
				setPage(text)
				isActiveHandler(id)
			}}
			className={classNames(cls.personalInfoLink, { [cls.active]: isActive }, [
				className
			])}
		>
			<Diple className={classNames(cls.diple, {}, [])} />
			<Folder />
			<span>{text}</span>
		</div>
	)
}
