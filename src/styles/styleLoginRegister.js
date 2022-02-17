import styled from 'styled-components'


export const ContainCard = styled.div`
    display:grid;
    place-content: center;
    height: 100vh;
    background: linear-gradient(#6c5ce7,#6c5ce7);
    background-repeat: no-repeat;
    background-size:100% 50%;
`

export const Card = styled.form`
    width:calc(100vw - 70px);
    background:#fff;
    margin:20px;
    padding:20px 20px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h2,p{
        text-align: center;
    }
    h2{
        font-size:35px;
        margin: 20px 50px;
        padding: 0 20px;
        padding-bottom:30px;
        border-bottom:1px solid #dbdbdb;
    }
    p{
        color:#777;
        font-size:15px;
        margin:0;
        margin-top:30px;
    }
    @media (min-width: 400px) {
        width:370px;
        padding:30px 30px;
    }
`
export const ContainInputs = styled.div`
    margin:30px 0;
`

export const ContainLabel = styled.div`
    margin:20px 0;
    gap:10px;
    label{
        font-size:18px;
        color:#222;
    }
    input{
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
`

export const Button = styled.button`
    cursor: pointer;
    height: 40px;
    background-color: #fff;
    margin:0 30px;
    outline:3px solid #6c5ce7;
    border:none;
    color:#6c5ce7;
    font-size:19px;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing:3px;
    transition: all .2s linear;
    &:hover{
        background-color: #6c5ce7;
        outline: none;
        color:#fff;
    }
`