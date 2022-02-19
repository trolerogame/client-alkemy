import React, { useContext, useEffect,useState } from 'react'
import { Context } from '../context/context'
import { navigate } from '@reach/router'
import FormLoginRegister from '../componets/FormLoginRegister'
import { ContainLabel } from '../styles/styleLoginRegister'
import Input from '../componets/Input'
const register = () => {
	const { createUser, token } = useContext(Context)
	const [validate, setValidate] = useState({
		Email: null,
		Password: null,
		Username: null,
	})
	const [error,setError] = useState('')
	const submitRegister = async (e) => {
		e.preventDefault()
		const { email, password, text } = e.target
		if (!validate.Email && !validate.Password && !validate.Username) return
		
		const error = await createUser(
			email.value,
			password.value,
			text.value
		)
		if (error) return setError(error)
		setError('')
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
			error={error}
			validate={validate}
			setValidate={setValidate}
		>
			<ContainLabel validate={validate.Username} className="flex flex-column">
				<Input placeholder="Username" type="text" setValidate={setValidate} validate={validate} />
			</ContainLabel>
		</FormLoginRegister>
	)
}

export default register
