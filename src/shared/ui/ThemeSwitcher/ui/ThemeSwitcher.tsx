import { useTheme } from 'app/providers/ThemeProvider'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { FC } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

enum iconSize {
	x16 = '16',
	x32 = '32',
	x64 = '64',
	x128 = '128'
}

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			theme={ThemeButton.CLEAR}
			onClick={toggleTheme}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
		>
			{theme === Theme.LIGHT ? (
				<FaMoon size={iconSize.x32} />
			) : (
				<BsFillSunFill size={iconSize.x32} />
			)}
		</Button>
	)
}
