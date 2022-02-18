import React, { useContext, useState } from 'react'
import { ItemOpe, Amount, ImgTime } from '../styles/styleHome'
import { converAmount } from '../utils/converAmount'
import { Context } from '../context/context'
const OperationItem = ({ id, concept, amount, incomOrExit }) => {
	const [edit, setEdit] = useState(false)
	const isTrue = incomOrExit == 'ingreso'
	const { deleteOperation } = useContext(Context)
	return (
		<ItemOpe
			incom={isTrue}
			key={id}
			className="flex justify-between align-center"
		>
			<div>
				<b>{concept}</b>
				<p>2/5/2004 18:20</p>
			</div>
			<div className="flex align-center">
				<span className="flex align-center">{isTrue ? '+' : '-'}</span>
				<Amount incom={isTrue}>{converAmount(amount)}</Amount>
				{!edit && <ImgTime
					src="/xmark-solid-dark.svg"
					alt="xmark font awesome"
					onClick={() => deleteOperation(id)}
				/>}
			</div>
		</ItemOpe>
	)
}

export default OperationItem
