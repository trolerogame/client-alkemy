import React from 'react'
import { ErrorMessage } from '../styles/styleLoginRegister'
import { reg,error } from '../utils/regForm'
const Input = ({ type, placeholder,setValidate,validate }) => {
	return (
		<>
			<label htmlFor={type}>{placeholder}</label>
			<input
				type={type}
				name={type}
				id={type}
				placeholder={placeholder}
				onKeyUp={(e) => {
					const value = e.currentTarget.value
					setValidate(
						{...validate,[placeholder]:value ? value.match(reg[type]) !== null : null}
					)
				}}
			/>
			{validate[placeholder] == false && <ErrorMessage>{error[type]}</ErrorMessage>}
		</>
	)
}

export default Input
