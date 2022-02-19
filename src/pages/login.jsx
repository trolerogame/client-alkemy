import { navigate } from '@reach/router'
import React, { useContext, useEffect,useState } from 'react'
import { Context } from '../context/context'
import { setTokenCookie } from '../utils/setTokenCookie'
import FormLoginRegister from '../componets/FormLoginRegister'
const login = () => {
	
	const { loginUser, token } = useContext(Context)
	const [validate, setValidate] = useState({
		Email: null,
		Password: null,
	})
	const [error,setError] = useState('')
	const submitLogin = async (e) => {
		e.preventDefault()
		const { email, password } = e.target
		if (!validate.Email && !validate.Password) return
		const token = await loginUser(email.value, password.value)
		if (token.error) return setError(token.error)
		setError('')
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
			error={error}
			text="Have no account?"
			setValidate={setValidate}
			validate={validate}
		/>
	)
}

export default login
