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

export const ContainHome = styled.main`
	flex-direction: column;
	@media (min-width: 768px) {
		flex-direction: row;
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
	position: fixed;
	display: grid;
	place-content: center;
	background-color: rgba(0, 0, 0, 0.5);
`

export const ModalCard = styled.form`
	width: calc(100vw - 70px);
	position: relative;
	justify-content: center;
	height: 400px;
	background-color: #fff;
	border-radius: 5px;
	.concept-amount {
		width: 100%;
	}
	input {
        margin:5px 0;
		padding-left:20px;
        height:30px;
        border-radius:3px;
        border:2px solid #dbdbdb;
        outline:none;
        transition:all 0.1s linear;
	}
	input[type='text'],
	input[type='number'],
	input[type='datetime-local']{
		width: calc(100% - 30px);
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

export const EditForm = styled(ModalCard)`
	height:auto;
	width:100%;
	margin-top:10px;
`


export const CreateOperationSubmit = styled.button`
	width: calc(100% - 80px);
	cursor: pointer;
	height: 40px;
	background-color: #fff;
	margin: 0 30px;
	margin-top: 10px;
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

export const ImgTime = styled.img`
	width:10px;
	height:10px;
	object-fit: cover;
	margin:0;
	margin-left:10px;
	margin-bottom:10px;
	cursor:pointer;
	background-color:${({bg}) => bg ? bg : 'none'};
	padding:5px;
	border-radius:5px;
`

export const ItemOpe = styled.div`
	margin:0;
	padding:30px 10px;
	p{
		margin:0;
		font-size:14px;
		color:gray;
	}
	b{
		font-size:20px;
		font-weight:300;
	}
	span{
		margin:0 2px;
		font-size:14px;
		font-weight: 300;
		color:${({incom}) => incom ? '#20bf6b' : '#222'};
	}
	&:focus{
		background-color:red;
	}
	
	@media(min-width: 768px){
		padding:20px 10px;
		.data{
			border: 1px solid #eee;
			border-radius:15px;
			border-top-left-radius:0;
			padding:20px 30px;
		}
		margin:0 50px;
		margin-bottom:0px;
		.button-edit{
			margin-top:10px;
			margin-right: 30px;
		}
	}
`

export const Amount = styled.div`
	font-size:22px;
	color:${({incom}) => incom ? '#20bf6b' : '#222'};
	
`