import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbsContainer = styled.nav`
  margin-bottom: 1.5rem;
`;

const BreadcrumbsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  
  &:not(:first-child)::before {
    content: '/';
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const BreadcrumbLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CurrentPage = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
`;

interface BreadcrumbsProps {
  items: Array<{
    name: string;
    path?: string;
  }>;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <BreadcrumbsContainer aria-label="Breadcrumbs">
      <BreadcrumbsList>
        <BreadcrumbItem>
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {index === items.length - 1 ? (
              <CurrentPage>{item.name}</CurrentPage>
            ) : (
              item.path ? (
                <BreadcrumbLink to={item.path}>{item.name}</BreadcrumbLink>
              ) : (
                <span>{item.name}</span>
              )
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbsList>
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;