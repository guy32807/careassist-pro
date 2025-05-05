import React, { lazy, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/common/Breadcrumbs';
import BlogPostLayout from '../components/blogs/BlogPostLayout';
import BlogNavigation from '../components/blogs/BlogNavigation';
import SocialShare from '../components/blogs/SocialShare';

// Import blog components dynamically
const Blog1 = lazy(() => import('../components/blogs/Blog1'));
const Blog2 = lazy(() => import('../components/blogs/Blog2'));
const Blog3 = lazy(() => import('../components/blogs/Blog3'));
const Blog4 = lazy(() => import('../components/blogs/Blog4'));
const Blog5 = lazy(() => import('../components/blogs/Blog5'));

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Loading = styled.div`
  text-align: center;
  padding: 3rem 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors?.textLight || '#6c757d'};
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

// Metadata for the blog posts
const blogMeta = {
  '1': {
    title: 'Choosing the Right Wheelchair: A Comprehensive Guide',
    description: 'Learn about the different types of wheelchairs available and how to select the one that best fits your needs and lifestyle.',
    keywords: 'wheelchairs, mobility aids, manual wheelchairs, power wheelchairs, transport chairs',
    date: 'May 3, 2023',
    author: 'Dr. Sarah Johnson',
    image: 'https://placehold.co/800x400/e6f0ff/0062cc?text=Wheelchair+Guide',
    authorImage: 'https://placehold.co/80x80/e6f0ff/0062cc?text=SJ',
    readTime: '8 min read',
    category: 'Mobility',
  },
  '2': {
    title: 'Creating a Safer Bathroom for Seniors: Essential Modifications',
    description: 'The bathroom can be one of the most dangerous rooms for seniors. Learn about key modifications and equipment to enhance bathroom safety.',
    keywords: 'bathroom safety, grab bars, shower chairs, raised toilet seats, bathroom modifications',
    date: 'April 15, 2023',
    author: 'Mike Anderson, OT',
    image: 'https://placehold.co/800x400/e6f0ff/0062cc?text=Bathroom+Safety',
    authorImage: 'https://placehold.co/80x80/e6f0ff/0062cc?text=MA',
    readTime: '6 min read',
    category: 'Home Safety',
  },
  '3': {
    title: 'Understanding Medicare Coverage for Mobility Equipment',
    description: "Navigating Medicare coverage for mobility equipment can be confusing. Learn what's covered, required documentation, and appeals process.",
    keywords: 'Medicare, insurance coverage, mobility equipment, healthcare coverage, insurance claims',
    date: 'March 22, 2023',
    author: 'Patricia Lee, Healthcare Consultant',
    image: 'https://placehold.co/800x400/e6f0ff/0062cc?text=Medicare+Guide',
    authorImage: 'https://placehold.co/80x80/e6f0ff/0062cc?text=PL',
    readTime: '10 min read',
    category: 'Insurance',
  },
  '4': {
    title: 'The Benefits of Lift Chairs for Arthritis and Mobility Issues',
    description: 'Discover how lift chairs can help those with arthritis, mobility challenges, or recovery from surgery.',
    keywords: 'lift chairs, arthritis, mobility aids, assistive devices, comfortable seating',
    date: 'February 10, 2023',
    author: 'Dr. Robert Chen',
    image: 'https://placehold.co/800x400/e6f0ff/0062cc?text=Lift+Chairs',
    authorImage: 'https://placehold.co/80x80/e6f0ff/0062cc?text=RC',
    readTime: '7 min read',
    category: 'Mobility',
  },
  '5': {
    title: 'Essential Medical Equipment for Post-Surgery Recovery at Home',
    description: 'Learn about the essential medical equipment that can make post-surgery recovery at home easier, safer, and more comfortable.',
    keywords: 'post-surgery, recovery, medical equipment, home care, convalescence',
    date: 'January 28, 2023',
    author: 'Emma Rodriguez, RN',
    image: 'https://placehold.co/800x400/e6f0ff/0062cc?text=Post+Surgery',
    authorImage: 'https://placehold.co/80x80/e6f0ff/0062cc?text=ER',
    readTime: '9 min read',
    category: 'Recovery',
  },
};

const BlogPostPage: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  
  console.log('BlogPostPage rendering with blogId:', blogId);
  
  // If the blog ID is invalid, redirect to the blogs page
  if (!blogId || !['1', '2', '3', '4', '5'].includes(blogId)) {
    console.log('Invalid blog ID, redirecting to blogs page');
    return <Navigate to="/blogs" replace />;
  }
  
  // Get the metadata for this blog
  const meta = blogMeta[blogId as keyof typeof blogMeta];
  const blogIdNumber = parseInt(blogId, 10);
  
  // Calculate previous and next blog IDs for navigation
  const prevBlogId = blogIdNumber > 1 ? (blogIdNumber - 1).toString() : null;
  const nextBlogId = blogIdNumber < 5 ? (blogIdNumber + 1).toString() : null;
  
  // Get previous and next blog meta information for navigation
  const prevBlogMeta = prevBlogId ? blogMeta[prevBlogId as keyof typeof blogMeta] : null;
  const nextBlogMeta = nextBlogId ? blogMeta[nextBlogId as keyof typeof blogMeta] : null;
  
  // Create navigation props
  const navigationProps = {
    prevPost: prevBlogMeta ? {
      id: prevBlogId,
      title: prevBlogMeta.title,
      image: prevBlogMeta.image
    } : null,
    nextPost: nextBlogMeta ? {
      id: nextBlogId,
      title: nextBlogMeta.title,
      image: nextBlogMeta.image
    } : null
  };
  
  // Determine which blog component to render
  const getBlogComponent = () => {
    switch (blogId) {
      case '1': return <Blog1 />;
      case '2': return <Blog2 />;
      case '3': return <Blog3 />;
      case '4': return <Blog4 />;
      case '5': return <Blog5 />;
      default: return <div>Blog not found</div>;
    }
  };
  
  // Create a URL to share
  const shareUrl = window.location.href;
  
  return (
    <Container>
      <Helmet>
        <title>{meta.title} | CareAssist Pro</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      
      <DebugInfo>
        BlogPostPage loaded for blog ID: {blogId} - {new Date().toLocaleTimeString()}
      </DebugInfo>
      
      <Breadcrumbs
        items={[
          { name: 'Blogs', path: '/blogs' },
          { name: meta.title }
        ]}
      />
      
      <BlogPostLayout
        title={meta.title}
        author={meta.author}
        authorImage={meta.authorImage}
        date={meta.date}
        readTime={meta.readTime}
        category={meta.category}
        featuredImage={meta.image}
      >
        <Suspense fallback={<Loading>Loading blog content...</Loading>}>
          {getBlogComponent()}
        </Suspense>
        
        <SocialShare 
          title={meta.title} 
          url={shareUrl}
          description={meta.description}
        />
        
        <BlogNavigation {...navigationProps} />
      </BlogPostLayout>
    </Container>
  );
};

export default BlogPostPage;