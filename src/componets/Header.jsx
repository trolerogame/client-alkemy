import { Link } from '@reach/router'
import React from 'react'
import { Header,LinkStyle } from '../styles/styleGlobal'
const header = ({ token, user }) => {
	return (
		<Header className='flex align-center justify-between'>
			<img src="/alkemy-logo.svg" alt="" />
			{token ? (
				<>{user}</>
			) : (
				<>
					<div className='flex'>
						<LinkStyle to="/register">Sign Up</LinkStyle>
						<LinkStyle to="/login">Sign In</LinkStyle>
					</div>
				</>
			)}
		</Header>
	)
}

export default header
