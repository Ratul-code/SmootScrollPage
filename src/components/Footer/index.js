import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialIconLink,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
} from "./FooterElements";
const Footer = () => {
  return (
    <>
      <hr />
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/sigin">How It Works</FooterLink>
                <FooterLink to="/sigin">Testimonials</FooterLink>
                <FooterLink to="/sigin">Careers</FooterLink>
                <FooterLink to="/sigin">Investors</FooterLink>
                <FooterLink to="/sigin">Terms Of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/sigin">Contact</FooterLink>
                <FooterLink to="/sigin">Support</FooterLink>
                <FooterLink to="/sigin">Destinations</FooterLink>
                <FooterLink to="/sigin">Sponsorship</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/sigin">Submit Videos</FooterLink>
                <FooterLink to="/sigin">Ambassadors</FooterLink>
                <FooterLink to="/sigin">Agency</FooterLink>
                <FooterLink to="/sigin">Influencer</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/sigin">Instagram</FooterLink>
                <FooterLink to="/sigin">Facebook</FooterLink>
                <FooterLink to="/sigin">Youtube</FooterLink>
                <FooterLink to="/sigin">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                dolla
              </SocialLogo>
              <WebsiteRights>
                dolla © {new Date().getFullYear()} All rights reserved
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
