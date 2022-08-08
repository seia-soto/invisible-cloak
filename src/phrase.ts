import { atob } from './util.js'

export const parse = (payload: string) => {
  const text = atob(payload)
  const key = text.charCodeAt(0)
  let value = ''

  for (let i = 1; i < text.length; i++) {
    value += String.fromCharCode(text.charCodeAt(i) ^ key)
  }

  return decodeURIComponent(escape(value))
}
