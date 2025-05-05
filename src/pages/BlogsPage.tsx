import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/common/Breadcrumbs';

// Define styled components with fallback values to avoid theme issues
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
`;

const Description = styled.div`
  margin-bottom: 2rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
`;

const BlogMeta = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors?.textLight || '#6c757d'};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const BlogAuthor = styled.span`
  margin-right: 1rem;
`;

const BlogDate = styled.span``;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors?.text || '#333'};
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors?.primaryDark || '#0056b3'};
    text-decoration: none;
    color: white;
  }
`;

const DebugInfo = styled.div`
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #666;
`;

// Blog data
const blogPosts = [
  {
    id: 1,
    title: 'Choosing the Right Wheelchair: A Comprehensive Guide',
    excerpt: 'Learn about the different types of wheelchairs available and how to select the one that best fits your needs and lifestyle. This guide covers manual, transport, power wheelchairs, and more.',
    date: 'May 3, 2023',
    author: 'Dr. Sarah Johnson',
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Wheelchair+Guide',
    readTime: '8 min read',
    component: 'Blog1'
  },
  {
    id: 2,
    title: 'Creating a Safer Bathroom for Seniors: Essential Modifications',
    excerpt: 'The bathroom can be one of the most dangerous rooms for seniors. Learn about key modifications and equipment to enhance bathroom safety and promote independence.',
    date: 'April 15, 2023',
    author: 'Mike Anderson, OT',
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Bathroom+Safety',
    readTime: '6 min read',
    component: 'Blog2'
  },
  {
    id: 3,
    title: 'Understanding Medicare Coverage for Mobility Equipment',
    excerpt: 'Navigating Medicare coverage for mobility equipment can be confusing. This guide breaks down what\'s covered, documentation requirements, and how to appeal denied claims.',
    date: 'March 22, 2023',
    author: 'Patricia Lee, Healthcare Consultant',
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Medicare+Guide',
    readTime: '10 min read',
    component: 'Blog3'
  },
  {
    id: 4,
    title: 'The Benefits of Lift Chairs for Arthritis and Mobility Issues',
    excerpt: 'Discover how lift chairs can help those with arthritis, mobility challenges, or recovery from surgery. Learn about features, types, and what to look for when purchasing.',
    date: 'February 10, 2023',
    author: 'Dr. Robert Chen',
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Lift+Chairs',
    readTime: '7 min read',
    component: 'Blog4'
  },
  {
    id: 5,
    title: 'Essential Medical Equipment for Post-Surgery Recovery at Home',
    excerpt: 'Preparing for recovery at home after surgery? Learn about the essential medical equipment that can make the process easier, safer, and more comfortable.',
    date: 'January 28, 2023',
    author: 'Emma Rodriguez, RN',
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Post+Surgery',
    readTime: '9 min read',
    component: 'Blog5'
  }
];

const BlogsPage: React.FC = () => {
  console.log('BlogsPage rendering with', blogPosts.length, 'blog posts');
  
  return (
    <Container className="blogs-container">
      <Helmet>
        <title>Healthcare & Mobility Blogs | CareAssist Pro</title>
        <meta name="description" content="Stay informed with the latest healthcare tips, mobility advice, and product reviews to help improve quality of life for yourself or loved ones." />
        <meta name="keywords" content="healthcare blogs, mobility tips, medical equipment guides, senior care advice, caregiver resources, accessibility information" />
      </Helmet>
      
      <DebugInfo>
        BlogsPage component is rendering - {new Date().toLocaleTimeString()}
      </DebugInfo>
      
      <Breadcrumbs
        items={[
          { name: 'Blogs' }
        ]}
      />
      
      <Title>Healthcare & Mobility Blogs</Title>
      
      <Description>
        <p>Stay informed with the latest healthcare tips, mobility advice, and product reviews to help improve quality of life for yourself or your loved ones. Our experts share valuable insights on choosing the right equipment, adapting your home for accessibility, and navigating the healthcare system.</p>
      </Description>
      
      <BlogGrid>
        {blogPosts.map(post => (
          <BlogCard key={post.id}>
            <BlogImage 
              src={post.image} 
              alt={post.title} 
              onError={(e) => {
                // Fallback image if the original fails to load
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/600x400/e6f0ff/0062cc?text=Blog+${post.id}`;
              }}
            />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogMeta>
                <BlogAuthor>{post.author}</BlogAuthor>
                <BlogDate>{post.date} • {post.readTime}</BlogDate>
              </BlogMeta>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <ReadMoreLink to={`/blogs/${post.id}`}>Read More</ReadMoreLink>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </Container>
  );
};

export default BlogsPage;