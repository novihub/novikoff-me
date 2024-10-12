import { FC, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Bio.module.scss'

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
		'*/'
	]

	return (
		<div className={classNames(cls.bioPage, {}, [className])}>
			<div className={classNames(cls.main)}>
				<div className={classNames(cls.text)} ref={textRef}>
					<div>
						{textLines.map((_, index) => (
							<p style={{ textAlign: 'end', paddingInline: '10px 20px' }}>
								{index + 1}
							</p>
						))}
					</div>
					<div>
						{textLines.map(line => (
							<p>{line}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
