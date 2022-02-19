import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context'
import { navigate } from '@reach/router'
import FormLoginRegister from '../componets/FormLoginRegister'
import { ContainLabel } from '../styles/styleLoginRegister'
const register = () => {
	const { createUser, token } = useContext(Context)

	const submitRegister = async (e) => {
		e.preventDefault()
		const { email, password,username } = e.target
		const error = await createUser(email.value, password.value,username.value)
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
		>
			<ContainLabel className="flex flex-column">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Username"
				/>
			</ContainLabel>
		</FormLoginRegister>
	)
}

export default register
