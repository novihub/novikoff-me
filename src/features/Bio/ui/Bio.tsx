import { FC, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Bio.module.scss'

interface BioPageProps {
	className?: string
}

export const BioPage: FC<BioPageProps> = ({ className }) => {
	const [lines, setLines] = useState(0)
	const textContainerRef = useRef<HTMLDivElement | null>(null)

	const text =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem quisquam quam qui dolor quis blanditiis ducimus rem, eius in molestias eos tempora voluptatibus, ipsa sint ipsam rerum sapiente sequi. Ad distinctio odio id harum vero optio dolores. Rem voluptatibus distinctio saepe magnam veritatis dicta enim rerum laborum inventore libero, dolorum ipsum? Necessitatibus quas odio id, error distinctio quam a. Quas impedit repellendus assumenda doloremque doloribus quod dolore dolor quibusdam ad? Quasi praesentium veritatis officiis cupiditate aut consectetur, sequi ad vero atque ipsa, animi sint delectus illum ducimus tenetur! Quod odit optio sint tempore ratione illo temporibus sapiente doloremque nulla?'

	const updateLines = () => {
		if (textContainerRef.current) {
			const style = window.getComputedStyle(textContainerRef.current)
			const lineHeight = parseFloat(style.lineHeight)
			const textHeight = textContainerRef.current.scrollHeight
			const newLines = Math.floor(textHeight / lineHeight)
			setLines(newLines)
		}
	}

	useEffect(() => {
		updateLines()
		window.addEventListener('resize', updateLines)
		return () => {
			window.removeEventListener('resize', updateLines)
		}
	}, [text])

	return (
		<div className={classNames(cls.bioPage, {}, [className])}>
			<div className={classNames(cls.main)}>
				<div className={cls.codeContainer}>
					<div className={cls.lineNumbers}>
						{Array.from({ length: lines }, (_, index) => {
							const n = index + 1
							return (
								<div key={n} className={cls.lineNumber}>
									<span>{n}</span>
									<div
										className={
											n === 1 ? cls.first : n < lines ? cls.between : cls.last
										}
									>
										{n === 1 ? '/*' : n < lines ? '*' : '*/'}
									</div>
								</div>
							)
						})}
					</div>

					<div className={cls.textContainer} ref={textContainerRef}>
						<p style={{ fontSize: '1rem', lineHeight: '1.5' }}>{text}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
