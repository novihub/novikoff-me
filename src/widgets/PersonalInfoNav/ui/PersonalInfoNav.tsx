import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PersonalInfoNav.module.scss'

interface PersonalInfoNavProps {
	className?: string
	setPage: (page: string) => void
}

export const PersonalInfoNav: FC<PersonalInfoNavProps> = ({
	className,
	setPage
}) => {
	return (
		<>
			<div className={classNames(cls.personalInfoNav, {}, [className])}>
				<p className={classNames(cls.personalInfoHeader)}>
					{' > '}Personal Info
				</p>
				<button onClick={() => setPage('bio')}>{' > '} bio</button>
				<button onClick={() => setPage('interests')}>{' > '} interests</button>
				<button onClick={() => setPage('education')}>{' > '} education</button>
				<div className={classNames(cls.contacts)}>
					<p className={classNames(cls.contactsHeader)}>{' < '}Contacts</p>
					<p className={classNames(cls.email)}>novikoff04@gmail.com</p>
					<p className={classNames(cls.number)}>+77071337228</p>
				</div>
			</div>
		</>
	)
}
