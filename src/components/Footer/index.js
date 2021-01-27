import React from 'react';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, FooterWrap, SocialMedia, SocialMediaWrap, WebsiteRight } from './FooterElements';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/404">Help</FooterLink>
              <FooterLink to="/404">Send feedback</FooterLink>
              <FooterLink to="/404">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Sosial Media</FooterLinkTitle>
              <FooterLink to="/404">Facebook</FooterLink>
              <FooterLink to="/404">Instagram</FooterLink>
              <FooterLink to="/404">Youtube</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRight>SUNGKEM &copy; {new Date().getFullYear()}</WebsiteRight>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}
