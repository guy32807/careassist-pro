import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SocialShare from './SocialShare';

const PageHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLightest};
  padding: 3rem 0;
  margin-bottom: 3rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const BlogCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const BlogMeta = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const BlogDate = styled.span`
  margin-right: 1rem;
`;

const BlogReadTime = styled.span``;

const BlogExcerpt = styled.p`
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const BlogsPage: React.FC = () => {
  const blogs = [
    {
      id: '1',
      title: 'Complete Guide to Bathroom Safety: Essential Equipment for Independence and Dignity',
      excerpt: 'Discover essential bathroom safety equipment that helps maintain independence, prevent falls, and enhance quality of life for seniors and individuals with mobility challenges.',
      image: '/images/blog/bathroom-safety-guide.jpg',
      date: 'April 15, 2023',
      readTime: '9 min read',
      path: '/blogs/bathroom-safety-guide'
    },
    {
      id: '2',
      title: 'Bathroom Safety for the Elderly: Essential Equipment',
      excerpt: 'Learn about the essential bathroom safety equipment that can help prevent falls and accidents for elderly individuals, including grab bars, shower chairs, and raised toilet seats.',
      image: '/images/blog/bathroom-safety.jpg',
      date: 'April 18, 2023',
      readTime: '6 min read',
      path: '/blogs/elderly-bathroom-safety'
    },
    {
      id: '3',
      title: 'Benefits of Walk-In Bathtubs for Seniors and Individuals with Mobility Challenges',
      excerpt: 'Explore how walk-in bathtubs can improve safety, accessibility, and therapeutic options for seniors aging in place and individuals with mobility limitations.',
      image: '/images/blog/walk-in-bathtub.jpg',
      date: 'March 22, 2023',
      readTime: '7 min read',
      path: '/blogs/walk-in-bathtub-benefits'
    },
    {
      id: '4',
      title: 'Comparing Mobility Aids: Walkers vs. Rollators vs. Canes',
      excerpt: 'A detailed comparison of different mobility aids to help you determine which option provides the support you need for maintaining independence and safety.',
      image: '/images/blog/mobility-aids.jpg',
      date: 'March 12, 2023',
      readTime: '7 min read',
      path: '/blogs/mobility-aids-comparison'
    },
    {
      id: '5',
      title: 'Medical Bathroom Design: Creating Safe and Accessible Spaces',
      excerpt: 'Learn how to transform standard bathrooms into safe, accessible spaces using medical-grade equipment and design principles to support aging in place.',
      image: '/images/blog/medical-bathroom-design.jpg',
      date: 'February 24, 2023',
      readTime: '9 min read',
      path: '/blogs/medical-bathroom-design'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Health & Mobility Blog | AvaCare Medical</title>
        <meta name="description" content="Explore our collection of informative articles about medical equipment, home healthcare, accessibility, and safety solutions for seniors and individuals with mobility challenges." />
        <meta name="keywords" content="medical blog, healthcare blog, mobility equipment, bathroom safety, aging in place, home healthcare, medical equipment guides" />
      </Helmet>
      
      <PageHeader>
        <Container>
          <PageTitle>Health & Mobility Resources</PageTitle>
          <PageDescription>
            Expert articles, guides, and insights on medical equipment, accessibility, and home healthcare solutions for independent living.
          </PageDescription>
        </Container>
      </PageHeader>
      
      <Container>
        <Row>
          {blogs.map(blog => (
            <Col key={blog.id} lg={4} md={6} className="mb-4">
              <BlogCard>
                <Link to={blog.path}>
                  <BlogImage src={blog.image} alt={blog.title} />
                </Link>
                <BlogContent>
                  <BlogMeta>
                    <BlogDate>{blog.date}</BlogDate>
                    <BlogReadTime>{blog.readTime}</BlogReadTime>
                  </BlogMeta>
                  <BlogTitle>
                    <Link to={blog.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {blog.title}
                    </Link>
                  </BlogTitle>
                  <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
                  <SocialShare
                    title={blog.title}
                    url={window.location.href}
                    description="Learn about essential bathroom safety equipment for seniors and individuals with mobility challenges."
                    imageUrl={`https://yourdomain.com${blog.image}`} // Now this is properly typed
                  />
                  <ReadMoreLink to={blog.path}>
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </ReadMoreLink>
                </BlogContent>
              </BlogCard>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BlogsPage;