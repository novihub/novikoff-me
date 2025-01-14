import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTypeText } from 'shared/lib/useTypeText/useTypeText'
import cls from './HelloText.module.scss'

interface HelloTextProps {
	className?: string
}

export const HelloText: FC<HelloTextProps> = ({ className = '' }) => {
	const text = 'Frontend Developer'

	const { isTypingComplete, typedTextRef } = useTypeText(text, 100)

	return (
		<section className={classNames(cls.helloText, {}, [className])}>
			<div className={cls.topText}>
				<h5>Hi all. I am</h5>
				<h1>Novikoff Max</h1>
				<h2
					className={classNames(
						cls.typing,
						{ [cls.cursorBlink]: isTypingComplete },
						[]
					)}
					ref={typedTextRef}
				></h2>
			</div>
			<div className={cls.bottomText}>
				<p className={cls.commentJs}>// complete the game to continue</p>
				<p className={cls.commentJs}>
					// you can also see it on my Github page
				</p>
				<p>
					<span style={{ color: '#4D5BCE' }}>const</span>{' '}
					<span style={{ color: '#43D9AD' }}>githubLink</span> ={' '}
					<span style={{ color: '#E99287' }}>“https://github.com/novihub”</span>
				</p>
			</div>
		</section>
	)
}
