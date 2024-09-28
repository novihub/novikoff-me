import { FC } from 'react'
import { FaGithub, FaTelegram } from 'react-icons/fa'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Footer.module.scss'

interface FooterProps {
	className?: string
}

export const Footer: FC<FooterProps> = ({ className }) => {
	return (
		<footer className={classNames(cls.footer, {}, [className])}>
			<div className={cls.findMe}>
				<span>find me in: </span>
				<a href='https://github.com/novihub' target='_blank'>
					<span className={cls.link}>
						<FaGithub />
					</span>
				</a>
				<a href='https://t.me/novikoff0' target='_blank' className={cls.link}>
					<span>
						<FaTelegram />
					</span>
				</a>
			</div>
			<div className={cls.userName}>
				<a
					href='https://github.com/novihub'
					target='_blank'
					className={cls.link}
				>
					<span>@novihub</span>
					<span>
						<FaGithub />
					</span>
				</a>
			</div>
		</footer>
	)
}
