import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.typography.headingFontFamily};
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  img {
    height: 40px;
    margin-right: 0.5rem;
  }
  
  span.logo-part {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

// Interface for the NavContainer props
interface NavContainerProps {
  $isOpen: boolean;
}

const NavContainer = styled.nav<NavContainerProps>`
  display: flex;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled(NavLink)`
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <img src="/logo.svg" alt="CareAssist Pro" />
          <span>Care<span className="logo-part">Assist</span> Pro</span>
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <NavContainer $isOpen={isMenuOpen}>
          <NavMenu>
            <NavItem to="/" end>
              {t('nav.home', 'Home')}
            </NavItem>
            <NavItem to="/products">
              {t('nav.products', 'Products')}
            </NavItem>
            <NavItem to="/category/mobility">
              {t('nav.mobility', 'Mobility')}
            </NavItem>
            <NavItem to="/category/bathroom-safety">
              {t('nav.bathroom', 'Bathroom Safety')}
            </NavItem>
            <NavItem to="/about">
              {t('nav.about', 'About Us')}
            </NavItem>
            <NavItem to="/blogs">
              {t('nav.blogs', 'Health & Mobility Blog')}
            </NavItem>
          </NavMenu>
        </NavContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;