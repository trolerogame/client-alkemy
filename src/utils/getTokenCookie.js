// get token in cookies
export const getTokenCookie = () => {
	for (let cookie of document.cookie.split('; ')) {
        cookie = cookie.split('=')
		if (cookie[0] == 'token_operations') return cookie[1]
	}
}
