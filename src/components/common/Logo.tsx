import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 1.5rem;
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  font-size: 1.2rem;
`;

const LogoText = styled.span`
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.span`
  font-size: 1.5rem;
  line-height: 1.2;
`;

const Tagline = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 400;
`;

interface LogoProps {
  includeBrandName?: boolean;
  includeTagline?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ 
  includeBrandName = true, 
  includeTagline = true,
  size = 'medium'
}) => {
  // Scale sizes based on the size prop
  const logoSize = {
    small: { container: '1.2rem', icon: '30px', brandName: '1.2rem', tagline: '0.7rem' },
    medium: { container: '1.5rem', icon: '40px', brandName: '1.5rem', tagline: '0.8rem' },
    large: { container: '2rem', icon: '50px', brandName: '2rem', tagline: '0.9rem' }
  };
  
  const StyledLogoContainer = styled(LogoContainer)`
    font-size: ${logoSize[size].container};
  `;
  
  const StyledLogoIcon = styled(LogoIcon)`
    width: ${logoSize[size].icon};
    height: ${logoSize[size].icon};
  `;

  // Define StyledLogoText properly
  const StyledLogoText = styled(LogoText)`
    /* Additional styling for different sizes if needed */
  `;
  
  const StyledBrandName = styled(BrandName)`
    font-size: ${logoSize[size].brandName};
  `;
  
  const StyledTagline = styled(Tagline)`
    font-size: ${logoSize[size].tagline};
  `;

  return (
    <StyledLogoContainer to="/">
      <StyledLogoIcon>
        {/* This represents a medical "plus" symbol */}
        <svg
          width="60%"
          height="60%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StyledLogoIcon>
      
      {includeBrandName && (
        <StyledLogoText>
          <StyledBrandName>AvaCare</StyledBrandName>
          {includeTagline && <StyledTagline>Medical Equipment</StyledTagline>}
        </StyledLogoText>
      )}
    </StyledLogoContainer>
  );
};

export default Logo;