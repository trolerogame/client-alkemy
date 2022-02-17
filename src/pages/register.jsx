import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context'
import { navigate } from '@reach/router'
import FormLoginRegister from '../componets/FormLoginRegister'
const register = () => {
	const { createUser, token } = useContext(Context)

	const submitRegister = async (e) => {
		e.preventDefault()
		const { email, password } = e.target
		const error = await createUser(email.value, password.value)
		if (error) return
		navigate('/login')
	}
	useEffect(() => {
		if (token) navigate('/')
	}, [])

	return (
		<FormLoginRegister
			submit={submitRegister}
			button="SIGN UP"
			redirect="login"
			text="you adready register?"
		/>
	)
}

export default register
