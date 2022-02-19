import React from 'react'
import { Link } from '@reach/router'
import { ContainCard, Card,ContainInputs, ContainLabel,Button } from '../styles/styleLoginRegister'
const FormLoginRegister = ({ submit, button, redirect,text, children }) => {
	return (
		<ContainCard>
			<Card onSubmit={submit} className="flex flex-column justify-center">
				<h2>{button}</h2>
				<ContainInputs>
					{children}
					<ContainLabel className="flex flex-column">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
						/>
					</ContainLabel>
					<ContainLabel className="flex flex-column">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
						/>
					</ContainLabel>
				</ContainInputs>
				<Button>{button}</Button>
				<p>{text} <Link to={'/' + redirect}>{redirect}</Link></p>
			</Card>
		</ContainCard>
	)
}

export default FormLoginRegister
