import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../context/context'
import Header from '../componets/Header'
import { Balance, CreateOperation } from '../styles/styleHome'
import FormModal from '../componets/FormModal'
import OperationItem from '../componets/OperationItem'
import { balanceAmount } from '../utils/balanceAmount'
const home = () => {
	const { user, token, getOperationsAndUser, operations } =
		useContext(Context)
	const [modal, setModal] = useState(false)
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
							<span>$ {balanceAmount(operations)}</span>
						</Balance>
						<CreateOperation onClick={() => setModal(true)}>
							Create Operation
						</CreateOperation>
					</div>
					{modal && <FormModal setModal={setModal} />}
					{operations
						.map((e) => (
							<OperationItem key={e.id} {...e} />
						))}
				</>
			)}
		</>
	)
}

export default home
