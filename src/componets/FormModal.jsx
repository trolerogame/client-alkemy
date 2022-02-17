import React, { useContext } from 'react'
import reactDom from 'react-dom'
import {
	Modal,
	ModalCard,
	CreateOperationSubmit,
	ContainRatio,
} from '../styles/styleHome'
import { Context } from '../context/context'
const FormModal = ({ setModal }) => {
	const { createOperation } = useContext(Context)
	const submitCreateOperation = async (e) => {
		e.preventDefault()
		const { concept, amount, incom } = e.target
		if (concept.value && amount.value && incom.value) {
			await createOperation({
				concept: concept.value,
				amount: amount.value,
				type: incom.value,
			})
			setModal(false)
		}
	}
	return reactDom.createPortal(
		<Modal>
			<ModalCard
				onSubmit={submitCreateOperation}
				className="flex flex-column align-center"
			>
				<div className="concept-amount flex flex-column align-center">
					<div className='my-6'>
						<label htmlFor="">Concept</label>
						<input type="text" name="concept" />
					</div>
					<div className='my-6'>
						<label htmlFor="">Amount</label>
						<input type="number" name="amount" />
					</div>
				</div>
				<div className="flex">
					<ContainRatio className="flex flex-column align-center">
						<label htmlFor="ingreso">Income</label>
						<input type="radio" name="incom" value="ingreso" />
					</ContainRatio>
					<ContainRatio className="flex flex-column align-center">
						<label htmlFor="egreso">Exit</label>
						<input type="radio" name="incom" value="egreso" />
					</ContainRatio>
				</div>
				<CreateOperationSubmit>CREATE OPERATION</CreateOperationSubmit>
			</ModalCard>
		</Modal>,
		document.getElementById('portal')
	)
}

export default FormModal
