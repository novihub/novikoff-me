import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CodeSnippets.module.scss'

interface CodeSnippetsProps {
	className?: string
}

export const CodeSnippets: FC<CodeSnippetsProps> = ({ className }) => {
	return (
		<div className={classNames(cls.codeSnippets, {}, [className])}>
			<p>// Code snippet showcase:</p>

			<div className={classNames(cls.codeSnippet)}>
				<div className={classNames(cls.userInfo)}>
					<img src='#' alt='Avatar' />
					<div className={classNames(cls.userDetails)}>
						<div className={classNames(cls.wrapper)}>
							<span>@username</span>
							<span style={{ fontSize: '12px' }}>Created 5 month ago</span>
						</div>
						<div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
							<span>Details</span>
							<span>3 stars</span>
						</div>
					</div>
				</div>
				<div className={classNames(cls.codeSnippetContainer)}>
					<div className={classNames(cls.code)}>
						<p style={{ textWrap: 'nowrap' }}>
							<span style={{ color: '#E99287' }}>function</span>
							{` initializeModelChunk<`}
							<span style={{ color: '#43D9AD' }}>T</span>
							{`>(chunk: ResolvedModelChunk): T {`}
						</p>
						<div style={{ paddingLeft: '20px' }}>
							<p>
								<span style={{ color: '#E99287' }}>const </span>
								{'value: T = '}
								<span style={{ color: '#C98BDF' }}>parseModel</span>
								{'(chunk.'}
								<span style={{ color: '#5565E8' }}>_response</span>,{'chunk.'}
								<span style={{ color: '#5565E8' }}>_value</span>
								{');'}
							</p>
							<p>
								<span style={{ color: '#E99287' }}>const</span>
								{' initializedChunk: '}
								<span style={{ color: '#E99287' }}>InitializedChunk</span>
								{'<'}
								<span style={{ color: '#E99287' }}>T</span>
								{'> = (chunk: any);'}
							</p>
							<p>
								{'initializedChunk.'}
								<span style={{ color: '#5565E8' }}>_status</span>
								{'= INITIALIZED;'}
							</p>
							<p>
								{'initializedChunk.'}
								<span style={{ color: '#5565E8' }}>_value</span>
								{' = value;'}
							</p>
							<p>
								<span style={{ color: '#E99287' }}>return</span>
								{' value;'}
							</p>
						</div>
						<p>{'}'}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
