import { FC, Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { PersonalInfoNav } from 'widgets/PersonalInfoNav'
import cls from './AboutPersonalInfo.module.scss'

interface AboutPersonalInfoProps {
	className?: string
}

export const AboutPersonalInfo: FC<AboutPersonalInfoProps> = ({
	className
}) => {
	const [page, setPage] = useState('bio')

	return (
		<div className={classNames(cls.aboutPersonalInfo, {}, [className])}>
			<div>
				<PersonalInfoNav setPage={setPage} />
				<div className={classNames(cls.contacts)}>
					<div>{' < '}Contacts</div>
					<p>novikoff04@gmail.com</p>
					<p>+77071337228</p>
				</div>
			</div>
			<div>
				<div>Personal Info X</div>

				<Suspense fallback={'...loading'}>
					{page === 'bio' && <div>Bio</div>}
					{page === 'interests' && <div>interests</div>}
					{page === 'education' && <div>education</div>}
				</Suspense>
			</div>
		</div>
	)
}
