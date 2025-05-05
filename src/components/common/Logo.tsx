import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Define all styled components outside the component function
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
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
  background-color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
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
  color: ${({ theme }) => theme.colors?.textLight || '#6c757d'};
  font-weight: 400;
`;

interface LogoProps {
  includeBrandName?: boolean;
  includeTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  includeBrandName = true, 
  includeTagline = true
}) => {
  return (
    <LogoContainer to="/">
      <LogoIcon>
        {/* Simple medical plus symbol */}
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
      </LogoIcon>
      
      {includeBrandName && (
        <LogoText>
          <BrandName>CareAssist</BrandName>
          {includeTagline && <Tagline>Pro Medical</Tagline>}
        </LogoText>
      )}
    </LogoContainer>
  );
};

export default Logo;