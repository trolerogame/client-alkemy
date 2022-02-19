import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../context/context'
import Header from '../componets/Header'
import {
	Balance,
	CreateOperation,
	ContainHome,
	IncomOrExit,
} from '../styles/styleHome'
import FormModal from '../componets/FormModal'
import OperationItem from '../componets/OperationItem'
import { balanceAmount } from '../utils/balanceAmount'
const home = () => {
	const { user, token, getOperationsAndUser, operations, logout } =
		useContext(Context)
	const [modal, setModal] = useState(false)
	const [incom, setIncom] = useState(false)
	useEffect(() => {
		token && getOperationsAndUser()
	}, [token])
	return (
		<>
			<Header
				logout={logout}
				token={token}
				user={user ? user.username : ''}
			/>
			{token && (
				<ContainHome className="flex">
					<div className="flex flex-column align-center w-50">
						<Balance>
							<p>MI SALDO</p>
							<span>$ {balanceAmount(operations)}</span>
						</Balance>
						<CreateOperation onClick={() => setModal(true)}>
							Create Operation
						</CreateOperation>
						{modal && <FormModal setModal={setModal} />}
					</div>
					<div className="w-50">
						<div className="flex justify-center">
							<IncomOrExit
								incom={incom}
								onClick={() => setIncom(false)}
							>
								INCOM
							</IncomOrExit>
							<IncomOrExit
								incom={!incom}
								onClick={() => setIncom(true)}
							>
								EXIT
							</IncomOrExit>
						</div>
						{operations.filter(e =>  { 
							return !incom ? e.incomOrExit == 'ingreso' : e.incomOrExit == 'egreso'
						}).map((e) => (
							<OperationItem key={e.id} {...e} />
						))}
					</div>
				</ContainHome>
			)}
		</>
	)
}

export default home
