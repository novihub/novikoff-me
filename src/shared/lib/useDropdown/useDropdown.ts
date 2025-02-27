import { useState } from 'react'

export function useDropdown() {
	const [dropdowns, setDropdowns] = useState<{ [key: string]: boolean }>({
		links: true,
		contacts: false
	})

	const toggleDropdown = (id: string) => {
		setDropdowns(prev => ({ ...prev, [id]: !prev[id] }))
	}

	return {
		isOpen: (id: string) => dropdowns[id] || false,
		toggleDropdown
	}
}
