import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../common/Logo';

const HeaderContainer = styled.div<{ $isOpen: boolean }>`
  background-color: ${({ $isOpen, theme }) => $isOpen ? theme.colors?.primaryLight : 'white'};
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
  
  @media (max-width: 768px) {
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

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors?.text || '#333'};
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
    background-color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
    
    &:after {
      width: 100%;
    }
  }
`;

const MobileNavToggle = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
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
  color: ${({ theme }) => theme.colors?.text || '#333'};
  text-decoration: none;
  font-weight: 500;
  display: block;
  padding: 0.5rem 0;
  
  &:hover, &.active {
    color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
  }
`;

const LogoTextLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
`;

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  
  return (
    <HeaderContainer $isOpen={isMobileNavOpen}>
      <HeaderContent>
        <Logo />
        
        <Nav>
          <NavList>
            <NavItem>
              <StyledNavLink to="/" end>Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/products">Products</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/category/mobility">Mobility</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/category/bathroom-safety">Bathroom Safety</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/blogs">Blogs</StyledNavLink>
            </NavItem>
          </NavList>
        </Nav>
        
        <MobileNavToggle 
          $isOpen={isMobileNavOpen} 
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
        >
          {isMobileNavOpen ? "✕" : "☰"}
        </MobileNavToggle>
        
        <MobileNav $isOpen={isMobileNavOpen}>
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
                Blogs
              </MobileNavLink>
            </MobileNavItem>
          </MobileNavList>
        </MobileNav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;