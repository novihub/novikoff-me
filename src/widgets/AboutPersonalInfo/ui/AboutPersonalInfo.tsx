import { FC, Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { PersonalInfoNav } from 'widgets/PersonalInfoNav'
import cls from './AboutPersonalInfo.module.scss'
import { BioPage } from './BioPage'

interface AboutPersonalInfoProps {
	className?: string
}

export const AboutPersonalInfo: FC<AboutPersonalInfoProps> = ({
	className
}) => {
	const [page, setPage] = useState('bio')

	return (
		<div className={classNames(cls.aboutPersonalInfo, {}, [className])}>
			<PersonalInfoNav setPage={setPage} />
			<div className={classNames(cls.wrapper)}>
				<div className={classNames(cls.header)}>
					<p>Personal Info</p>
					<p></p>
				</div>
				<div className={classNames(cls.main)}>
					<Suspense fallback={'...loading'}>
						{page === 'bio' && <BioPage />}
						{page === 'interests' && <div>interests</div>}
						{page === 'education' && <div>education</div>}
					</Suspense>
					<div className={classNames(cls.codeSnippets)}> code snippets</div>
				</div>
			</div>
		</div>
	)
}
