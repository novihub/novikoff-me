import React, { useEffect } from 'react'

export function useTypeText(text: string, speed: number) {
	const typedTextRef = React.useRef(null)
	const [isTypingComplete, setIsTypingComplete] = React.useState(false)
	let index = 0

	const typeText = () => {
		if (typedTextRef.current) {
			typedTextRef.current.innerHTML += text.charAt(index)
			index++

			if (index < text.length) setTimeout(typeText, speed)
			else setIsTypingComplete(true)
		}
	}

	useEffect(() => {
		if (typedTextRef.current) {
			typedTextRef.current.innerHTML = '> '
		}
		setIsTypingComplete(false)
		typeText()
	}, [])

	return { typedTextRef, isTypingComplete }
}
