import { navigate } from '@reach/router'
import React, {useContext, useEffect} from 'react'
import { Context } from '../context/context'
import {setTokenCookie} from '../utils/setTokenCookie'
const login = () => {
	const {loginUser,token} = useContext(Context)
	const submitLogin = async e => {
		e.preventDefault()
		const {email, password} = e.target
		const token = await loginUser(email.value,password.value)
		if(token.error) return
		setTokenCookie(token.token)
		navigate('/')
	}
	useEffect(() => {
		if(token) navigate('/')
	},[])
	return (
		<div>
			<form onSubmit={submitLogin}>
				<input type="email" name="email" />
				<input type="password"  name="password" />
				<button>Login</button>
			</form>
		</div>
	)
}

export default login
