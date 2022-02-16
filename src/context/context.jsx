import { navigate } from '@reach/router'
import { createContext, useState } from 'react'
import { getTokenCookie } from '../utils/getTokenCookie'
import { setTokenCookie } from '../utils/setTokenCookie'
export const Context = createContext(null)

const context = ({ children }) => {
	const [operations, setOperations] = useState([])
	const [user, setUser] = useState({})
	const [token, setToken] = useState(getTokenCookie())
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

	const logout = () => {
		setTokenCookie('')
		setToken('')
		navigate('/login')
	}

	const createOperation = async (data) => {
		const res = await fetch(
			'http://localhost:5050/operation/create/',
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ ...data }),
			}
		)
		const newOperation = await res.json()
		setOperation([...operation, newOperation])
	}

	const updateOperation = async (id, concept, amount) => {
		await fetch(`http://localhost:5050/operation/update/${id}`,{
			method: 'PATCH',
			body:JSON.stringify({
				concept,
				amount
			}),
			headers:{
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		})
	}

	const deleteOperation = async (id) => {
		const res = await fetch(
			`http://localhost:5050/operation/delete/${id}`,
			{
				method: 'DELETE',
				headers:{
					Authorization: `Bearer ${token}`
				}
			}
		)
		const operationDelete = await res.json()
		operationArray = operation.filter((op) => op.id !== operationDelete.id)
		setOperation(operationArray)
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
				logout,
				createOperation,
				updateOperation,
				deleteOperation
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default context
