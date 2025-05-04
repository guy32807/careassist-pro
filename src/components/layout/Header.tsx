import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../common/Logo';

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLinkStyled = styled(NavLink)`
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
  
  &:hover, &.active {
    color: ${({ theme }) => theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const MobileNavToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileNav = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MobileNavItem = styled.li`
  margin: 1rem 0;
`;

const MobileNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  display: block;
  padding: 0.5rem 0;
  
  &:hover, &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        
        <Nav>
          <NavList>
            <NavItem>
              <NavLinkStyled to="/" end>Home</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/products">Products</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/category/mobility">Mobility</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/category/bathroom-safety">Bathroom Safety</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/blogs">Blog</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/about">About</NavLinkStyled>
            </NavItem>
          </NavList>
        </Nav>
        
        <MobileNavToggle onClick={toggleMobileNav}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isMobileNavOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </MobileNavToggle>
        
        <MobileNav isOpen={isMobileNavOpen}>
          <MobileNavList>
            <MobileNavItem>
              <MobileNavLink to="/" end onClick={() => setIsMobileNavOpen(false)}>
                Home
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/products" onClick={() => setIsMobileNavOpen(false)}>
                Products
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/category/mobility" onClick={() => setIsMobileNavOpen(false)}>
                Mobility
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/category/bathroom-safety" onClick={() => setIsMobileNavOpen(false)}>
                Bathroom Safety
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/blogs" onClick={() => setIsMobileNavOpen(false)}>
                Blog
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/about" onClick={() => setIsMobileNavOpen(false)}>
                About
              </MobileNavLink>
            </MobileNavItem>
          </MobileNavList>
        </MobileNav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;