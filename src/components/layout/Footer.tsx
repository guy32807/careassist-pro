import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary || '#0062cc'};
  color: white;
  padding: 3rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.2rem;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>CareAssist Pro</FooterTitle>
          <FooterList>
            <FooterItem>
              <FooterLink to="/about">About Us</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/blogs">Blog</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Products</FooterTitle>
          <FooterList>
            <FooterItem>
              <FooterLink to="/category/mobility">Mobility Equipment</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/category/bathroom-safety">Bathroom Safety</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/category/beds">Medical Beds</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/category/daily-living">Daily Living Aids</FooterLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterList>
            <FooterItem>
              <FooterLink to="/resources/buyers-guides">Buyer's Guides</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/resources/medicare">Medicare Coverage</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/resources/insurance">Insurance Information</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/resources/faq">FAQs</FooterLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Customer Support</FooterTitle>
          <FooterList>
            <FooterItem>
              <ExternalLink href="mailto:support@careassistpro.com">support@careassistpro.com</ExternalLink>
            </FooterItem>
            <FooterItem>
              <ExternalLink href="tel:1-800-555-1234">1-800-555-1234</ExternalLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/shipping">Shipping Information</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/returns">Returns & Exchanges</FooterLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>
          &copy; {currentYear} CareAssist Pro. All rights reserved.
        </Copyright>
        
        <div>
          <FooterLink to="/privacy">Privacy Policy</FooterLink> | <FooterLink to="/terms">Terms of Service</FooterLink>
        </div>
        
        <SocialLinks>
          <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            f
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            t
          </SocialLink>
          <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            i
          </SocialLink>
          <SocialLink href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            p
          </SocialLink>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;