import React, { useContext } from 'react'
import reactDom from 'react-dom'
import {
	Modal,
	ModalCard,
	CreateOperationSubmit,
	ContainRatio,
	ImgTime
} from '../styles/styleHome'
import { Context } from '../context/context'
import InputModal from './InputModal'

const FormModal = ({ setModal }) => {
	const { createOperation } = useContext(Context)
	const submitCreateOperation = async (e) => {
		e.preventDefault()
		const { concept, amount, incom,date } = e.target
		const data = [
			concept.value , amount.value , incom.value , date.value
		]
		if (data.every(e => e)) {
			await createOperation({
				concept: data[0],
				amount: data[1],
				type:  data[2],
			 	date: data[3]
			})
			setModal(false)
		}
	}
	return reactDom.createPortal(
		<Modal>
			<ImgTime src="/xmark-solid.svg" alt="xmark font awesome" onClick={() => setModal(false)} />
			<ModalCard
				onSubmit={submitCreateOperation}
				className="flex flex-column align-center"
			>
				<div className="concept-amount flex flex-column align-center">
					<InputModal type="text" name='concept' id='Concept' />
					<InputModal type="number" name='amount' id='Amount' />
					<InputModal type="datetime-local" name='date' id='Date' />
				</div>
				<div className="flex">
					<ContainRatio className="flex flex-column align-center">
						<label htmlFor="ingreso">Income</label>
						<input type="radio" name="incom" id='ingreso' value="ingreso" />
					</ContainRatio>
					<ContainRatio className="flex flex-column align-center">
						<label htmlFor="egreso">Exit</label>
						<input type="radio" name="incom" id='egreso' value="egreso" />
					</ContainRatio>
				</div>
				<CreateOperationSubmit>CREATE OPERATION</CreateOperationSubmit>
			</ModalCard>
		</Modal>,
		document.getElementById('portal')
	)
}

export default FormModal
