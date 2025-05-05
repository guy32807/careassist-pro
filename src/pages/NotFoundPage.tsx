import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const Text = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const BackButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark || '#0056b3'};
    text-decoration: none;
    color: white;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const LinkItem = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Page Not Found | CareAssist Pro</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      
      <Text>
        We're sorry, but the page you're looking for doesn't exist or has been moved.
      </Text>
      
      <Text>
        You might want to check out some of these popular pages instead:
      </Text>
      
      <LinkList>
        <li><LinkItem to="/">Home</LinkItem></li>
        <li><LinkItem to="/products">Products</LinkItem></li>
        <li><LinkItem to="/category/mobility">Mobility</LinkItem></li>
        <li><LinkItem to="/category/bathroom-safety">Bathroom Safety</LinkItem></li>
        <li><LinkItem to="/blogs">Blog</LinkItem></li>
      </LinkList>
      
      <BackButton to="/">
        Return to Homepage
      </BackButton>
    </Container>
  );
};

export default NotFoundPage;