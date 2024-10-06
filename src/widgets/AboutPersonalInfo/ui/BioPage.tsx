import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './BioPage.module.scss'

interface BioPageProps {
	className?: string
}

export const BioPage: FC<BioPageProps> = ({ className }) => {
	return <div className={classNames(cls.bioPage, {}, [className])}>
		klgjdflkgjdf
	</div>
}
