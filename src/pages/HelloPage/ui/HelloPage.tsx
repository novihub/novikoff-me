import { FC, useEffect, useState } from 'react'
import Arrow from 'shared/assets/images/HelloPage/arrow-button.svg'
import BoltDownLeft from 'shared/assets/images/HelloPage/bolt-down-left.svg'
import BoltDownRight from 'shared/assets/images/HelloPage/bolt-down-right.svg'
import BoltUpLeft from 'shared/assets/images/HelloPage/bolt-up-left.svg'
import BoltUpRight from 'shared/assets/images/HelloPage/bolt-up-right.svg'
import BackgroundBlur from 'shared/assets/images/HelloPage/hello-blur.png'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './HelloPage.module.scss'

interface HelloPageProps {
	className?: string
}

const HelloPage: FC<HelloPageProps> = ({ className }) => {
	const [activeButton, setActiveButton] = useState<number | null>(null)

	const handleClick = (index: number) => {
		setActiveButton(index)

		setTimeout(() => {
			setActiveButton(null)
		}, 200)
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'ArrowUp':
				handleClick(0) // Обработка нажатия на стрелку вверх
				break
			case 'ArrowDown':
				handleClick(1) // Обработка нажатия на стрелку вниз
				break
			case 'ArrowLeft':
				handleClick(2) // Обработка нажатия на стрелку влево
				break
			case 'ArrowRight':
				handleClick(3) // Обработка нажатия на стрелку вправо
				break
			default:
				break
		}
	}

	useEffect(() => {
		// Добавление обработчика события нажатия клавиш
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			// Удаление обработчика при размонтировании компонента
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return (
		<div className={classNames(cls.helloPage, {}, [className])}>
			<section className={cls.leftSide}>
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

			<section className={cls.console}>
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
									<button
										className={activeButton === 0 ? cls.active : ''}
										onClick={() => handleClick(0)}
									>
										<Arrow />
									</button>
									<div>
										{[2, 1, 3].map(index => (
											<button
												key={index}
												className={activeButton === index ? cls.active : ''}
												onClick={() => handleClick(index)}
											>
												<Arrow />
											</button>
										))}
									</div>
								</div>
							</div>
							<AppLink to='/about-me' className={cls.snakeSkip}>
								Skip
							</AppLink>
						</div>
					</div>
				</div>
			</section>
			<div className={cls.backgroundBlur}>
				<img src={BackgroundBlur} alt='' />
			</div>
		</div>
	)
}

export default HelloPage
