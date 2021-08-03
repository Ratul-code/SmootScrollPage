import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
export const HeroContainer = styled.div`
  /* position:relative; */
  background-color: #0c0c0c;
  display: flex;
  justify-content: center; 
  align-items: center;
  padding: 0 30px;
  height: 800px;
  /* z-index:-2; */
`;

export const Herobg = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
overflow: hidden;
height: 100%;
width: 100%;
/* z-index: -2; */
`

export const Videobg = styled.video`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
/* background: #232a34; */
/* z-index:-1; */
`

export const HeroContent = styled.div`
z-index:3;
color: #fff;
position: absolute;
max-width: 100%;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: -18%;
font-family: 'Encode Sans Expanded', sans-serif;
`
export const Heroh1 = styled.h1`
font-size: 48px;
text-align: center;
@media only screen and (max-width:768px){
  font-size: 40px;
}
@media only screen and (max-width:480px){
  font-size: 32px;
}
`
export const Herop = styled.p`
margin-top: 24px;
font-size: 24px;
text-align: center;
max-width: 600px;
@media only screen and (max-width:768px){
  font-size: 20px;
}
@media only screen and (max-width:480px){
  font-size: 18px;
}
`
export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 24px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 24px;
`