import { FC } from 'react'
import Diple from 'shared/assets/images/diple.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PersonalInfoLink.module.scss'

interface PersonalInfoLinkProps {
	className?: string
	Folder: any
	text: string
	setPage: (page: string) => void
}

export const PersonalInfoLink: FC<PersonalInfoLinkProps> = ({
	className,
	Folder,
	text,
	setPage
}) => {
	return (
		<div
			onClick={() => setPage(text)}
			className={classNames(cls.personalInfoLink, {}, [className])}
		>
			<Diple />
			<Folder />
			<span>{text}</span>
		</div>
	)
}
