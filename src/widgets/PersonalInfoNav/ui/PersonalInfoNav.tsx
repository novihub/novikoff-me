import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './PersonalInfoNav.module.scss'

interface PersonalInfoNavProps {
	className?: string
	setPage: (page: string) => void
}

export const PersonalInfoNav: FC<PersonalInfoNavProps> = ({
	className,
	setPage
}) => {
	return (
		<div className={classNames(cls.personalInfoNav, {}, [className])}>
			<div>{' < '}Personal Info</div>
			<Button onClick={() => setPage('bio')} theme={ThemeButton.CLEAR}>
				bio
			</Button>
			<Button onClick={() => setPage('interests')} theme={ThemeButton.CLEAR}>
				interests
			</Button>
			<Button onClick={() => setPage('education')} theme={ThemeButton.CLEAR}>
				education
			</Button>
		</div>
	)
}
