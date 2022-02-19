import { Link } from '@reach/router'
import styled , {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        font-family: 'Mukta', sans-serif;
        font-family: 'Poppins', sans-serif;
        font-family: 'Rubik', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 100vh;
    }
    .flex{
        display: flex;
    }
    .flex-column{
        flex-direction: column;
    }
    .justify-center{
        justify-content: center;
    }
    .justify-end{
        justify-content: flex-end;
    }
    .align-center{
        align-items: center;
    }
    .justify-between{
        justify-content: space-between;
    }
    .my-6{
        margin-top:10px;
        margin-bottom:10px;
    }
    .my-5{
        margin-top:5px;
        margin-bottom:5px;
    }
    .w-50{
        width:100%;
        @media (min-width:768px){
            width:50%;
        }
    }
`

export const Header = styled.header`
    width:calc(100% - 20px);
    height: 100px;
    padding:0 10px;
    p{
        color:#222;
    }
    img{
        width:130px;
    }
    @media (min-width: 768px) {
        width: calc(100% - 60px);
        padding:0 30px;
    }
`

export const LinkStyle = styled(Link)`
    margin:0 10px;
    display:grid;
    place-content: center;
    width:90px;
    height:40px;
    border:none;
    border-radius:10px;
    font-size:17px;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: bold;
    transition: all .1s linear;
    background:#fff;
    color:#6c5ce7;
    &:hover{
        color:#fff;
        background: #6c5ce7;
    }
`

export const HeaderInfoUser = styled.div`
    p{
        font-size:20px;
    }
`

export const ButtonDropdown = styled.button`
    border:none;
    outline: none;
    width: 100px;
    height: 30px;
    font-weight: bold;
    background: none;
    color:#fc5c65;
    font-size:14px;
    padding:0;
    margin-left: 10px;
    transition: all .1s linear;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        background: #fc5c65;
        color:#fff; 
    }
`