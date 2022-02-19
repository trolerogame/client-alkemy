import { navigate } from '@reach/router'
import { createContext, useState } from 'react'
import { getTokenCookie } from '../utils/getTokenCookie'
import { setTokenCookie } from '../utils/setTokenCookie'
export const Context = createContext(null)

const context = ({ children }) => {
	const [operations, setOperations] = useState([])
	const [user, setUser] = useState({})
	const [token, setToken] = useState(getTokenCookie())

	// fetch api route getOperationsAndUser and setState user and operations
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


	const createUser = async (email, password, username) => {
		const res = await fetch('http://localhost:5050/user/register', {
			method: 'POST',
			body: JSON.stringify({ email, password,username }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const user = await res.json()
		return user.error
	}

	// fetch api route login user and return token 
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

	// fetching api route create operation and push newOperation in state 
	const createOperation = async (data) => {
		const res = await fetch(
			'http://localhost:5050/operations/create/',
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
		console.log(newOperation)
		setOperations([...operations, newOperation])
	}


	const updateOperation = async (id, data) => {
		const res = await fetch(`http://localhost:5050/operations/update/${id}`,{
			method: 'PATCH',
			body:JSON.stringify({...data}),
			headers:{
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		})
		const editOperation = await res.json()
		return editOperation
	}

	// fetching api route delete operation and filter id to state
	const deleteOperation = async (id) => {
		await fetch(
			`http://localhost:5050/operations/delete/${id}`,
			{
				method: 'DELETE',
				headers:{
					Authorization: `Bearer ${token}`
				}
			}
		)
		const operationArray = operations.filter((op) => op.id !== id)
		setOperations(operationArray)
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
