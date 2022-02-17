import { navigate } from '@reach/router'
import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context'
import { setTokenCookie } from '../utils/setTokenCookie'
import FormLoginRegister from '../componets/FormLoginRegister'
const login = () => {
	const { loginUser, token } = useContext(Context)
	const submitLogin = async (e) => {
		e.preventDefault()
		const { email, password } = e.target
		if (!email.value && !password.value) return
		const token = await loginUser(email.value, password.value)
		if (token.error) return
		setTokenCookie(token.token)
		document.location.href = '/'
	}
	useEffect(() => {
		if (token) navigate('/')
	}, [])

	return (
		<FormLoginRegister
			submit={submitLogin}
			button="SIGN IN"
			redirect="register"
			text="Have no account?"
		/>
	)
}

export default login
