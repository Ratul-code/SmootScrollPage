import styled from "styled-components";
import {Link} from "react-router-dom";

export const SigninContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #01bf71;
font-family: Georgia, 'Times New Roman', Times, serif;
`
export const Siginh1 = styled(Link)`
position: absolute;
top: 3%;
left: 4%;
color: #000;
text-decoration: none;
font-size: 2em;
font-weight: bolder;
`
export const Signinp = styled.p`
color: #fff;
text-align: center;
font-size: 1.1rem;
letter-spacing: 2px;
margin-bottom: 40px;
@media only screen and (max-width:480px){
    letter-spacing: 1px;
}
`
export const SigninContentWrap = styled.div`
background-color: #000;
border-radius: 4px;
width: 400px;
padding: 60px 20px;

@media only screen and (min-width:768px){
    width: 460px;
}
@media only screen and (max-width:480px){
    width: 300px;
}
`
export const ForgotPassword = styled.p`
color: #fff;
text-align: center;
transition: all 0.2s ease-in-out;
&:hover{
    color: #01bf71;
    cursor: pointer;
}
`

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
gap: 30px;
`
export const InputWrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
`
export const Input = styled.input`
display: block;
height: 54px;
border-radius: 7px;
border: none;
outline: none;
font-size: 1.1rem;
padding: 10px;
font-weight: 600;
`
export const LabelEmail = styled.label`
color: #fff;
font-size: 1.1rem;
font-weight:700;
`
export const LabelPassword = styled.label`
color: #fff;
font-size: 1.1rem;
font-weight:700;
`