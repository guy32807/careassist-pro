import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PostInfo {
  id: string | null;
  title: string;
  image: string;
}

interface BlogNavigationProps {
  prevPost: PostInfo | null;
  nextPost: PostInfo | null;
}

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors?.background || '#e9ecef'};
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  width: 48%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '8px'};
  background-color: ${({ theme }) => theme.colors?.background || '#e9ecef'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
  }
`;

const PrevPost = styled(NavItem)`
  justify-content: flex-start;
`;

const NextPost = styled(NavItem)`
  justify-content: flex-end;
  text-align: right;
`;

const NavArrow = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem;
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavLabel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors?.textLight || '#6c757d'};
  margin-bottom: 0.25rem;
`;

const NavTitle = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const NavImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius?.small || '4px'};
  margin: 0 0.75rem;
  
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Placeholder = styled.div`
  width: 48%;
`;

const BlogNavigation: React.FC<BlogNavigationProps> = ({ prevPost, nextPost }) => {
  return (
    <NavigationContainer>
      {prevPost ? (
        <PrevPost to={`/blogs/${prevPost.id}`}>
          <NavArrow>←</NavArrow>
          <NavImage 
            src={prevPost.image} 
            alt={prevPost.title}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/160x160/e6f0ff/0062cc?text=Prev`;
            }}
          />
          <NavContent>
            <NavLabel>Previous Post</NavLabel>
            <NavTitle>{prevPost.title}</NavTitle>
          </NavContent>
        </PrevPost>
      ) : (
        <Placeholder />
      )}
      
      {nextPost ? (
        <NextPost to={`/blogs/${nextPost.id}`}>
          <NavContent>
            <NavLabel>Next Post</NavLabel>
            <NavTitle>{nextPost.title}</NavTitle>
          </NavContent>
          <NavImage 
            src={nextPost.image} 
            alt={nextPost.title}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/160x160/e6f0ff/0062cc?text=Next`;
            }}
          />
          <NavArrow>→</NavArrow>
        </NextPost>
      ) : (
        <Placeholder />
      )}
    </NavigationContainer>
  );
};

export default BlogNavigation;