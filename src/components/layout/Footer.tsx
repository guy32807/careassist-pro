import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SOCIAL_LINKS } from '../../constants/links';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: white;
  padding: 3rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  font-family: ${({ theme }) => theme.typography.headingFontFamily};
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  span.logo-part {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const FooterDescription = styled.p`
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FooterHeading = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
  color: white;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.25rem;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.6;
`;

const DisclaimerText = styled.p`
  font-size: 0.75rem;
  opacity: 0.7;
  margin-top: 1rem;
  line-height: 1.5;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>Care<span className="logo-part">Assist</span> Pro</FooterLogo>
          <FooterDescription>
            Helping you find quality medical equipment for independent living, enhanced comfort, and improved care.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialLink>
            <SocialLink href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks>
            <FooterLink><Link to="/">Home</Link></FooterLink>
            <FooterLink><Link to="/products">All Products</Link></FooterLink>
            <FooterLink><Link to="/about">About Us</Link></FooterLink>
            <FooterLink><Link to="/contact">Contact</Link></FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Categories</FooterHeading>
          <FooterLinks>
            <FooterLink><Link to="/category/mobility">Mobility</Link></FooterLink>
            <FooterLink><Link to="/category/bathroom-safety">Bathroom Safety</Link></FooterLink>
            <FooterLink><Link to="/category/daily-living">Daily Living</Link></FooterLink>
            <FooterLink><Link to="/category/medical-equipment">Medical Equipment</Link></FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Contact Us</FooterHeading>
          <FooterLinks>
            <FooterLink>Email: support@careassistpro.com</FooterLink>
            <FooterLink>Phone: (555) 234-5678</FooterLink>
          </FooterLinks>
          <DisclaimerText>
            This site contains affiliate links. We may receive a commission for purchases made through these links.
          </DisclaimerText>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {currentYear} CareAssist Pro. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;