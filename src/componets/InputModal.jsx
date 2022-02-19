import React from 'react'

const InputModal = ({id,type,name}) => {
	return (
		<div className="my-6">
			<label htmlFor={id} >{id}</label>
			<input type={type} name={name} id={id} />
		</div>
	)
}

export default InputModal
