export const getTokenCookie = () => {
	for (let cookie of document.cookie.split('; ')) {
        cookie = cookie.split('=')
		if (cookie[0] == 'token') return cookie[1]
	}
}
