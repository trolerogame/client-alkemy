import React from 'react'
import { Link } from '@reach/router'
import {
	ContainCard,
	Card,
	ContainInputs,
	ContainLabel,
	Button,
	ErrorMessage
} from '../styles/styleLoginRegister'
import Input from './Input'
const FormLoginRegister = ({
	submit,
	button,
	redirect,
	text,
	children,
	validate,
	setValidate,
	error
}) => {
	return (
		<ContainCard>
			<Card onSubmit={submit} className="flex flex-column justify-center">
				<h2>{button}</h2>
				{error && <ErrorMessage center>{error}</ErrorMessage>}
				<ContainInputs>
					{children}
					<ContainLabel
						className="flex flex-column"
						validate={validate.Email}
					>
						<Input
							placeholder="Email"
							type="email"
							setValidate={setValidate}
							validate={validate}
						/>
					</ContainLabel>
					<ContainLabel
						className="flex flex-column"
						validate={validate.Password}
						setValidate={setValidate}
					>
						<Input
							placeholder="Password"
							type="password"
							setValidate={setValidate}
							validate={validate}
						/>
					</ContainLabel>
				</ContainInputs>
				<Button>{button}</Button>
				<p>
					{text} <Link to={'/' + redirect}>{redirect}</Link>
				</p>
			</Card>
		</ContainCard>
	)
}

export default FormLoginRegister
