import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: 2rem;
`;

const NavTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0;
  margin-bottom: 1rem;
`;

const BlogList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const BlogItem = styled.li`
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BlogLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: background-color 0.2s ease;
  
  &:hover, &.active {
    background-color: ${({ theme }) => theme.colors.primaryLightest};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &.active {
    font-weight: 600;
  }
`;

const BlogIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1rem;
`;

interface BlogNavigationProps {
  currentBlogId?: string;
}

const BlogNavigation: React.FC<BlogNavigationProps> = ({ currentBlogId }) => {
  const blogs = [
    { id: '1', title: 'Complete Guide to Bathroom Safety', path: '/blogs/bathroom-safety-guide' },
    { id: '2', title: 'Bathroom Safety for the Elderly', path: '/blogs/elderly-bathroom-safety' },
    { id: '3', title: 'Benefits of Walk-In Bathtubs', path: '/blogs/walk-in-bathtub-benefits' },
    { id: '4', title: 'Mobility Aids Comparison Guide', path: '/blogs/mobility-aids-comparison' },
    { id: '5', title: 'Medical Bathroom Design', path: '/blogs/medical-bathroom-design' },
  ];

  return (
    <NavContainer>
      <NavTitle>Related Articles</NavTitle>
      <BlogList>
        {blogs.map((blog) => (
          <BlogItem key={blog.id}>
            <BlogLink 
              to={blog.path} 
              className={currentBlogId === blog.id ? 'active' : ''}
            >
              <BlogIcon>📝</BlogIcon>
              {blog.title}
            </BlogLink>
          </BlogItem>
        ))}
      </BlogList>
    </NavContainer>
  );
};

export default BlogNavigation;