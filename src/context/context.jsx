import { createContext, useState } from 'react'
import { getTokenCookie } from '../utils/getTokenCookie'
export const Context = createContext(null)

const context = ({ children }) => {
	const [operations, setOperations] = useState([])
	const [user, setUser] = useState({})
	const token = getTokenCookie()
	const getOperationsAndUser = async () => {
		const res = await fetch('http://localhost:5050/user/operations', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const data = await res.json()
		setUser(data.user)
		setOperations(data.operations)
	}

	const createUser = async (email, password) => {
		const res = await fetch('http://localhost:5050/user/register', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const user = await res.json()
		return user.error
	}

	const loginUser = async (email, password) => {
		const res = await fetch('http://localhost:5050/user/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const token = await res.json()
		return token
	}

	return (
		<Context.Provider
			value={{
				createUser,
				loginUser,
				getOperationsAndUser,
				token,
				operations,
				user,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default context
