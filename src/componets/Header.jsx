import React, { useState } from 'react'
import { Header, LinkStyle, ButtonDropdown,HeaderInfoUser } from '../styles/styleGlobal'
const header = ({ token, user, logout }) => {
	const [rotate, setRotate] = useState(false)
	return (
		<Header className="flex align-center justify-between">
			<img src="/alkemy-logo.svg" alt="" />
			{token ? (
				<>
					<HeaderInfoUser

						className="flex align-center"
						onClick={() => setRotate(!rotate)}
						rotate={rotate ? rotate : undefined}
					>
						<p>
							{user && user.length > 10
								? user.split('').slice(0, 10).join('')
								: user}
						</p>
						<ButtonDropdown onClick={() => logout()}>
							Log Out
						</ButtonDropdown>
					</HeaderInfoUser>
				</>
			) : (
				<>
					<div className="flex">
						<LinkStyle to="/register">Sign Up</LinkStyle>
						<LinkStyle to="/login">Sign In</LinkStyle>
					</div>
				</>
			)}
		</Header>
	)
}

export default header
