import { FC } from 'react'
import BoltDownLeft from 'shared/assets/images/HelloPage/bolt-down-left.svg'
import BoltDownRight from 'shared/assets/images/HelloPage/bolt-down-right.svg'
import BoltUpLeft from 'shared/assets/images/HelloPage/bolt-up-left.svg'
import BoltUpRight from 'shared/assets/images/HelloPage/bolt-up-right.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './HelloPage.module.scss'

interface HelloPageProps {
	className?: string
}

const HelloPage: FC<HelloPageProps> = ({ className }) => {
	return (
		<div className={classNames(cls.helloPage, {}, [className])}>
			<div className={cls.leftSide}>
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
			</div>

			<div className={cls.snakeGame}>
				<div className={cls.snakeContainer}>
					<BoltUpLeft className={cls.bolt} />
					<BoltUpRight className={cls.bolt} />
					<BoltDownLeft className={cls.bolt} />
					<BoltDownRight className={cls.bolt} />
					<div className={cls.snakeWindow}>
						<button className={cls.snakeStart}>start-game</button>
					</div>
					<div>
						<div className={cls.snakeMoveKeysContainer}>
							<p>// use keyboard</p>
							<p>// arrows to play</p>
							<div className={cls.snakeKeys}>
								<span className={cls.snakeKey}>↑</span>
								<span className={cls.snakeKey}>↓</span>
								<span className={cls.snakeKey}>←</span>
								<span className={cls.snakeKey}>→</span>
							</div>
						</div>
						<button className={cls.snakeSkip}>Skip</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HelloPage
