import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import BlogNavigation from './BlogNavigation';
import SocialShare from './SocialShare';

const BlogContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

const BlogHeader = styled.div`
  margin-bottom: 2.5rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const BlogMeta = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 1.5rem;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const BlogContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
  }
`;

const SidebarContainer = styled.div`
  position: sticky;
  top: 2rem;
`;

interface BlogPostLayoutProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  blogId?: string;
  children: React.ReactNode;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  title,
  description,
  keywords,
  image,
  date,
  author,
  readTime,
  blogId,
  children
}) => {
  return (
    <>
      <Helmet>
        <title>{title} | AvaCare Medical</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourdomain.com/blogs/${blogId}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="AvaCare Medical" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://yourdomain.com/blogs/${blogId}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* Article specific metadata */}
        <meta property="article:published_time" content={date} />
        <meta property="article:author" content={author} />
        <meta property="article:section" content="Health & Mobility" />
        
        {/* Structured data for articles (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${title}",
              "image": "${image}",
              "author": {
                "@type": "Person",
                "name": "${author}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "AvaCare Medical",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourdomain.com/logo.png"
                }
              },
              "datePublished": "${date}",
              "description": "${description}"
            }
          `}
        </script>
      </Helmet>
      <BlogContainer>
        <Row>
          <Col lg={8}>
            <BlogHeader>
              <BlogTitle>{title}</BlogTitle>
              <BlogMeta>
                <MetaItem>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                  {author}
                </MetaItem>
                <MetaItem>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                  </svg>
                  {date}
                </MetaItem>
                <MetaItem>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                  {readTime}
                </MetaItem>
              </BlogMeta>
            </BlogHeader>
            <BlogContent>
              {children}
              
              <SocialShare 
                title={title}
                url={window.location.href}
                description={description}
                imageUrl={image}
              />
            </BlogContent>
          </Col>
          <Col lg={4}>
            <SidebarContainer>
              <BlogNavigation currentBlogId={blogId} />
              {/* Additional sidebar components can go here */}
            </SidebarContainer>
          </Col>
        </Row>
      </BlogContainer>
    </>
  );
};

export default BlogPostLayout;