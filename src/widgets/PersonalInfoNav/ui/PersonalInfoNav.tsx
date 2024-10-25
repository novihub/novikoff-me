import { FC } from 'react'
import Diple from 'shared/assets/images/diple.svg'
import PinkFolder from 'shared/assets/images/folder1.svg'
import GreenFolder from 'shared/assets/images/folder2.svg'
import BlueFolder from 'shared/assets/images/folder3.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDropdown } from 'shared/lib/useDropdown/useDropdown'
import { PersonalInfoLink } from './PersonalInfoLink'
import cls from './PersonalInfoNav.module.scss'

interface PersonalInfoNavProps {
	className?: string
	setPage: (page: string) => void
}

export const PersonalInfoNav: FC<PersonalInfoNavProps> = ({
	className,
	setPage
}) => {
	const { isOpen, toggleDropdown } = useDropdown()

	return (
		<div className={classNames(cls.personalInfoNav, {}, [className])}>
			{/* Personal Info Section */}
			<button
				onClick={() => toggleDropdown('links')}
				className={classNames(cls.personalInfoHeader)}
			>
				<Diple
					className={classNames(cls.diple, { [cls.rotated]: isOpen('links') })}
				/>
				<span>Personal Info</span>
			</button>
			<div
				className={classNames(cls.links, { [cls.rotated]: isOpen('links') })}
			>
				<PersonalInfoLink Folder={PinkFolder} setPage={setPage} text={'bio'} />
				<PersonalInfoLink
					Folder={GreenFolder}
					setPage={setPage}
					text={'interests'}
				/>
				<PersonalInfoLink
					Folder={BlueFolder}
					setPage={setPage}
					text={'education'}
				/>
			</div>

			{/* Contacts Section */}
			<button
				onClick={() => toggleDropdown('contacts')}
				className={classNames(cls.contactsHeader)}
			>
				<Diple
					className={classNames(cls.diple, {
						[cls.rotated]: isOpen('contacts')
					})}
				/>
				<span>Contacts</span>
			</button>
			<div
				className={classNames(cls.contacts, {
					[cls.rotated]: isOpen('contacts')
				})}
			>
				<p className={classNames(cls.email)}>novikoff04@gmail.com</p>
				<p className={classNames(cls.number)}>+77071337228</p>
			</div>
		</div>
	)
}
