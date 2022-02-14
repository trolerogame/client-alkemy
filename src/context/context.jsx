import { createContext,useState } from 'react'

export const Context = createContext(null)

const context = ({children}) => {
    const [operations,setOperations] = useState([])
    const [user,setUser] = useState({})

    const getOperationsAndUser = () => {

    }

    const createUser = (email,password) => {

    }

    const loginUser = (email,password) => {

    }

    return <Context.Provider value={{}}>
        {children}
    </Context.Provider>
}