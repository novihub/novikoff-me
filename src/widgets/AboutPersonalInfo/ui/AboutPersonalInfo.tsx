import { FC, Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { PersonalInfoNav } from 'widgets/PersonalInfoNav'
import { BioPage } from '../../../features/Bio/ui/Bio'
import { CodeSnippets } from '../../../shared/ui/CodeSnippets/CodeSnippets'
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
			<PersonalInfoNav setPage={setPage} />
			<div className={classNames(cls.wrapper)}>
				<div className={classNames(cls.header)}>
					<div className={classNames(cls.tab)}>
						<span>personal-info</span>
						<span>x</span>
					</div>
					<div>
						<p></p>
					</div>
				</div>
				<div className={classNames(cls.main)}>
					<Suspense fallback={'...loading'}>
						{page === 'bio' && <BioPage />}
						{page === 'interests' && <div>interests</div>}
						{page === 'education' && <div>education</div>}
					</Suspense>
					<div className={classNames(cls.codeSnippetsContainer)}>
						<CodeSnippets />
					</div>
				</div>
			</div>
		</div>
	)
}
