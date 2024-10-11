import { FC, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './BioPage.module.scss'

interface BioPageProps {
	className?: string
}

export const BioPage: FC<BioPageProps> = ({ className }) => {
	const textRef = useRef<HTMLDivElement>(null) // Реф для блока с текстом
	const [visibleLines, setVisibleLines] = useState(0)

	const textLines = [
		'/*',
		'* About me',
		'* I have 5 years of experience in web development',
		'* Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'* Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'* Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
		'* Nisi ut aliquip ex ea commodo consequat.',
		'* Duis aute irure dolor in reprehenderit in voluptate velit esse',
		'* Cillum dolore eu fugiat nulla pariatur.',
		'* Excepteur sint occaecat officia deserunt mollit anim id est laborum.',
		'/*'
	]

	return (
		<div className={classNames(cls.bioPage, {}, [className])}>
			<div className={classNames(cls.main)}>
				<div className={classNames(cls.text)} ref={textRef}>
					{textLines.map((line, index) => (
						<div key={index} className={classNames(cls.string)}>
							<span className={classNames(cls.number)}>{index + 1} </span>
							<span className={classNames(cls.line)}>{line}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
