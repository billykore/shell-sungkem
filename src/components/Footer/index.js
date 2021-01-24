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
              <FooterLink to="#">Help</FooterLink>
              <FooterLink to="#">Send feedback</FooterLink>
              <FooterLink to="#">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Sosial Media</FooterLinkTitle>
              <FooterLink to="#">Facebook</FooterLink>
              <FooterLink to="#">Instagram</FooterLink>
              <FooterLink to="#">Youtube</FooterLink>
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
