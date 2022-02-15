import React,{useContext} from 'react'
import {Context} from '../context/context'
import { navigate } from '@reach/router'
const register = () => {
	const {createUser} = useContext(Context)

	const submitRegister = async e => {
		e.preventDefault()
		const {email,password} = e.target
		const error = await createUser(email.value,password.value)
		if(error) return 
		navigate('/login')
	}

	return <div>
		<form onSubmit={submitRegister}>
			<input type="email" name="email" />
			<input type="password" name="password" />
			<button>Start</button>
		</form>
	</div>
}

export default register
