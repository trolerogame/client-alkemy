import React, { useEffect, useContext } from 'react'
import { Context } from '../context/context'
import Header from '../componets/Header'
const home = () => {
	const { user,token, getOperationsAndUser } = useContext(Context)
	useEffect(() => {
		token && getOperationsAndUser()
	}, [token])
	return (
		<>
			<Header token={token} user={user ? user.email : ''} />
      <div>
        <div>
          saldo : 0$
        </div>
      </div>
		</>
	)
}

export default home
