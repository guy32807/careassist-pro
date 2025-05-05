import React from 'react';
import styled from 'styled-components';

interface BlogPostLayoutProps {
  title: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  featuredImage: string;
  children: React.ReactNode;
  // Add these optional props to match what's being passed in blog components
  description?: string;
  keywords?: string;
  image?: string;
  blogId?: string;
}

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BlogHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors?.textLight || '#6c757d'};
  margin-bottom: 1.5rem;
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.75rem;
`;

const MetaText = styled.div``;

const Author = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors?.text || '#333'};
`;

const PostDetails = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
`;

const FeaturedImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '8px'};
  margin-bottom: 2rem;
`;

const BlogContent = styled.div`
  margin-bottom: 2rem;
`;

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  title,
  author,
  authorImage,
  date,
  readTime,
  category,
  featuredImage,
  children,
  // The rest of the props are ignored in this component
  // but we add them to the interface to avoid TypeScript errors
}) => {
  return (
    <BlogContainer>
      <BlogHeader>
        <Title>{title}</Title>
        
        <MetaInfo>
          <AuthorImage 
            src={authorImage} 
            alt={author}
            onError={(e) => {
              // Fallback for author image
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/80x80/e6f0ff/0062cc?text=${author.charAt(0)}`;
            }} 
          />
          <MetaText>
            <Author>{author}</Author>
            <PostDetails>
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
              <span>•</span>
              <span>{category}</span>
            </PostDetails>
          </MetaText>
        </MetaInfo>
      </BlogHeader>
      
      <FeaturedImage 
        src={featuredImage} 
        alt={title} 
        onError={(e) => {
          // Fallback for featured image
          const target = e.target as HTMLImageElement;
          target.src = `https://placehold.co/800x400/e6f0ff/0062cc?text=${title}`;
        }}
      />
      
      <BlogContent>
        {children}
      </BlogContent>
    </BlogContainer>
  );
};

export default BlogPostLayout;