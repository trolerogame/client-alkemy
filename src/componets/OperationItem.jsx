import React, { useContext, useState } from 'react'
import InputModal from './InputModal'
import { ItemOpe, Amount, ImgTime, EditForm } from '../styles/styleHome'
import { converAmount } from '../utils/converAmount'
import { ConvertDate } from '../utils/converData'
import { Context } from '../context/context'
const OperationItem = ({ id, concept, amount, incomOrExit, date }) => {
	const [operation,setOperation] = useState({concept, amount, incomOrExit, date })
	const [edit, setEdit] = useState(false)
	const isTrue = operation.incomOrExit == 'ingreso'
	const { deleteOperation , updateOperation } = useContext(Context)

	const editOperation = async e => {
		e.preventDefault()
		const {concept, date, amount} = e.target
		if(!concept.value &&  !date.value &&  !amount.value) return
		const data = {
			concept: concept.value,
			amount: amount.value,
			date: date.value
		}
		const newOperation = await updateOperation(id,data)
		setOperation({...newOperation})
		setEdit(false)
	}

	return (
		<ItemOpe incom={isTrue} key={id}>
			<div className="flex justify-between align-center data">
				<div>
					<b>{operation.concept}</b>
					<p>{ConvertDate(operation.date)}</p>
				</div>
				<div className="flex align-center">
					<span className="flex align-center">
						{isTrue ? '+' : '-'}
					</span>
					<Amount incom={isTrue}>{converAmount(operation.amount)}</Amount>
				</div>
			</div>
			{edit && (
				<EditForm onSubmit={editOperation} className="flex flex-column align-center">
					<InputModal type="text" name="concept" id="Concept" />
					<InputModal type="number" name="amount" id="Amount" />
					<InputModal type="datetime-local" name="date" id="Date" />
					<div className="flex justify-end">
						<button style={{border:'none',background:'none'}}>
							<ImgTime
								bg="#6c5ce7"
								src={!edit ? '/pen-solid.svg' : '/check-solid.svg'}
								alt="xmark font awesome"
							/>
						</button>
						<ImgTime
							bg="#fc5c65"
							src="/xmark-solid-dark.svg"
							alt="xmark font awesome"
							onClick={() => setEdit(false)}
						/>
					</div>
				</EditForm>
			)}
			{!edit && (
				<div className="flex justify-end my-5 button-edit">
					<ImgTime
						bg="#6c5ce7"
						src="/pen-solid.svg"
						alt="xmark font awesome"
						onClick={() => setEdit(!edit)}
					/>
					<ImgTime
						bg="#fc5c65"
						src="/xmark-solid-dark.svg"
						alt="xmark font awesome"
						onClick={() => deleteOperation(id)}
					/>
				</div>
			)}
		</ItemOpe>
	)
}

export default OperationItem
