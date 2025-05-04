import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SeoHead from '../components/SEO/SeoHead';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Message = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLightest};
    text-decoration: none;
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Page Not Found | 404 Error | MedSupplyGuide"
        description="The page you are looking for could not be found. Return to our homepage to browse medical equipment and supplies."
      />
      
      <Container>
        <Title>404</Title>
        <Subtitle>Page Not Found</Subtitle>
        <Message>
          The page you're looking for doesn't exist or has been moved.
          Please check the URL or return to our homepage.
        </Message>
        <ButtonGroup>
          <PrimaryButton to="/">
            Return to Homepage
          </PrimaryButton>
          <SecondaryButton to="/products">
            Browse Products
          </SecondaryButton>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default NotFoundPage;