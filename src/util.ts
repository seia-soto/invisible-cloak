export const isBrowser = () => typeof window !== 'undefined'

export const atob = (payload: string) => {
  if (isBrowser()) {
    return window.atob(payload)
  }

  return Buffer.from(payload, 'base64').toString('ascii')
}
