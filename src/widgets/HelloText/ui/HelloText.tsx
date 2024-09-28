import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './HelloText.module.scss'

interface HelloTextProps {
	className?: string
}

export const HelloText: FC<HelloTextProps> = ({ className }) => {
	return (
		<section className={classNames(cls.helloText, {}, [className])}>
			<div className={cls.topText}>
				<h5>Hi all. I am</h5>
				<h1>Novikoff Max</h1>
				<h2>{'>'} Frontend Developer</h2>
			</div>
			<div className={cls.bottomText}>
				<p className={cls.commentJs}>// complete the game to continue</p>
				<p className={cls.commentJs}>
					// you can also see it on my Github page
				</p>
				<p>
					<span style={{ color: '#4D5BCE' }}>const</span>{' '}
					<span style={{ color: '#43D9AD' }}>githubLink</span> ={' '}
					<span style={{ color: '#E99287' }}>
						“https://github.com/novikoff0”
					</span>
				</p>
			</div>
		</section>
	)
}
