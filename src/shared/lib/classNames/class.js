import { log } from 'console'

const obj = {
	isTrue: true,
	isFlse: false
}

log(...Object.entries(obj).join(' '))
