import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.footer`
  background-color: #101522;
  
`;
export const FooterWrap = styled.div`
  padding: 48px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
display:flex ;
gap: 2rem;
justify-content: center;
@media only screen and (max-width:820px){
    padding-top: 32px;
}
`
export const FooterLinksWrapper = styled.div`
display: flex;
gap: 1.5rem;
@media only screen and (max-width:820px){
    flex-direction: column;
}
`
export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;
@media only screen and (max-width:420px){
    margin: 0;
    padding: 0;
    width: 100%;
}`

export const FooterLinkTitle = styled.h2`
font-size: 14px;
margin-bottom: 16px;
`

export const FooterLink = styled(LinkR)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
&:hover{
    color: #01bf71;
    transition: all 0.3s ease-in-out;
}
`

export const SocialMedia = styled.div`
width: 100%;
max-width: 1000px;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 40px auto 0 auto;
@media screen and (max-width:820px){
  flex-direction: column;
}
`

export const SocialLogo = styled(LinkS)`
color:#fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom:16px;
font-weight: bold;
`

export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`