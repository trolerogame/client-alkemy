import { createContext, useState } from 'react'

export const Context = createContext(null)

const context = ({ children }) => {
	const [operations, setOperations] = useState([])
	const [user, setUser] = useState({})

	const getOperationsAndUser = () => {}

	const createUser = async (email, password) => {
        const res = await fetch('http://localhost:5050/user/register', {
			method: 'POST',
			body: JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
		})
        const user = await res.json()
        return user.error
	}

	const loginUser = (email, password) => {}

	return (
		<Context.Provider
			value={{ createUser, loginUser, getOperationsAndUser }}
		>
			{children}
		</Context.Provider>
	)
}

export default context
