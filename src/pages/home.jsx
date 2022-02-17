import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../context/context'
import Header from '../componets/Header'
import { Balance, CreateOperation } from '../styles/styleHome'
import FormModal from '../componets/FormModal'
const home = () => {
	const { user, token, getOperationsAndUser, operations } =
		useContext(Context)
	const [modal, setModal] = useState(false)
	const total = (operations) =>
		operations.reduce((acc, operation) => {
			if (operation.incomOrExit == 'egreso')
				return acc - +operation.amount
			return acc + +operation.amount
		}, 0)

	useEffect(() => {
		token && getOperationsAndUser()
	}, [token])
	return (
		<>
			<Header token={token} user={user ? user.email : ''} />
			{token && (
				<>
					<div className="flex flex-column align-center">
						<Balance>
							<p>MI SALDO</p>
							<span>$ {total(operations)}</span>
						</Balance>
						<CreateOperation onClick={() => setModal(true)}>
							Create Operation
						</CreateOperation>
					</div>
					{modal && <FormModal setModal={setModal} />}
					{operations.map((e) => (
						<div>{e.concept}</div>
					))}
				</>
			)}
		</>
	)
}

export default home
