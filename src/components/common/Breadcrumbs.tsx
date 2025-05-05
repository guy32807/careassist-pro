import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 2rem;
  font-size: 0.9rem;
`;

const BreadcrumbLink = styled(Link)`
  color: ${({ theme }) => theme.colors?.textLight || '#6c757d'};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.colors?.textLight || '#6c757d'};
`;

const BreadcrumbCurrent = styled.span`
  color: ${({ theme }) => theme.colors?.text || '#333'};
  font-weight: 500;
`;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbLink to="/">Home</BreadcrumbLink>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          
          {index === items.length - 1 || !item.path ? (
            <BreadcrumbCurrent>{item.name}</BreadcrumbCurrent>
          ) : (
            <BreadcrumbLink to={item.path}>{item.name}</BreadcrumbLink>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;