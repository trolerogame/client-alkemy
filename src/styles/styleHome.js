import styled from 'styled-components'

export const Balance = styled.div`
	width: 100%;
	height: 400px;
	display: grid;
	place-content: center;
	color: #fff;
	background: #6c5ce7;
	text-align: center;
	p {
		font-size: 16px;
		margin-top: 0;
	}
	span {
		font-size: 70px;
		font-weight: 600;
	}
`

export const CreateOperation = styled.div`
	margin: 20px;
	border: none;
	outline: none;
	font-size: 20px;
	background-color: rgb(88, 193, 245);
	padding: 10px;
	color: #fff;
	border-radius: 7px;
	border-top-right-radius: 0px;
	border-top-left-radius: 0px;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		transform: translateY(4px);
	}
`

export const Modal = styled.div`
	width: 100%;
	height: 100vh;
	left: 0;
	top: 0;
	position: absolute;
	display: grid;
	place-content: center;
	background-color: rgba(0, 0, 0, 0.5);
`

export const ModalCard = styled.form`
	width: calc(100vw - 70px);
	justify-content: center;
	height: 400px;
	background-color: #fff;
	border-radius: 5px;
	.concept-amount {
		width: 100%;
	}
	input[type='text'],
	input[type='number'] {
        width: calc(100% - 30px);
        margin:10px 0;
		padding-left:20px;
        height:30px;
        border-radius:3px;
        border:2px solid #dbdbdb;
        outline:none;
        transition:all 0.1s linear;
	}
	input:focus, input:active{
        border:2px solid #6c5ce7;
    }
	input[type='radio'] {
		margin: 0 40px;
	}

    label{
        color:#6c5ce7;
		font-size:18px;
		font-weight:bold;
		letter-spacing:1px;
    }
	@media (min-width: 400px) {
		width: 400px;
	}
`

export const CreateOperationSubmit = styled.button`
	width: calc(100% - 80px);
	cursor: pointer;
	height: 40px;
	background-color: #fff;
	margin: 0 30px;
	margin-top: 40px;
	outline: 1px solid #6c5ce7;
	border: none;
	color: #6c5ce7;
	font-size: 17px;
	border-radius: 5px;
	font-weight: bold;
	letter-spacing: 3px;
	transition: all 0.2s linear;
	&:hover {
		background-color: #6c5ce7;
		outline: none;
		color: #fff;
	}
`


export const ContainRatio = styled.div`
    label{
        margin:10px 0;
    }
`