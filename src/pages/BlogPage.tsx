import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import SeoHead from '../components/SEO/SeoHead';
import Blog1 from '../components/blogs/Blog1';
import Blog2 from '../components/blogs/Blog2';
import Blog3 from '../components/blogs/Blog3';
import Blog4 from '../components/blogs/Blog4';
import Blog5 from '../components/blogs/Blog5';
import NotFoundPage from './NotFoundPage';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const PageDescription = styled.p`
  font-size: 1.125rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled(Link)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

// Blog index page
const BlogIndexPage = () => {
  return (
    <>
      <SeoHead 
        title="Healthcare Resources & Guides | CareAssist Pro Blog"
        description="Explore our collection of articles on medical equipment, home healthcare, mobility aids, and tips for caregivers and patients."
        keywords="medical equipment blog, healthcare tips, mobility aids guide, home care resources, caregiver advice"
      />
      
      <PageHeader>
        <PageTitle>Healthcare Resources & Guides</PageTitle>
        <PageDescription>
          Explore our collection of articles on medical equipment, home healthcare, mobility aids, and tips for caregivers and patients.
        </PageDescription>
      </PageHeader>
      
      <BlogGrid>
        <BlogCard to="/blog/choosing-right-wheelchair">
          <BlogImage style={{ backgroundImage: `url('/images/blog/choosing-wheelchair.jpg')` }} />
          <BlogContent>
            <BlogTitle>Choosing the Right Wheelchair: A Comprehensive Guide</BlogTitle>
            <BlogExcerpt>
              Learn about the different types of wheelchairs available and how to select the one that best fits your needs and lifestyle.
            </BlogExcerpt>
            <BlogMeta>
              <span>May 3, 2023</span>
              <span>8 min read</span>
            </BlogMeta>
          </BlogContent>
        </BlogCard>
        
        <BlogCard to="/blog/bathroom-safety-elderly">
          <BlogImage style={{ backgroundImage: `url('/images/blog/bathroom-safety.jpg')` }} />
          <BlogContent>
            <BlogTitle>Bathroom Safety for the Elderly: Essential Equipment</BlogTitle>
            <BlogExcerpt>
              Discover the essential bathroom safety equipment that can help prevent falls and accidents for elderly individuals.
            </BlogExcerpt>
            <BlogMeta>
              <span>April 18, 2023</span>
              <span>6 min read</span>
            </BlogMeta>
          </BlogContent>
        </BlogCard>
        
        <BlogCard to="/blog/hospital-bed-home-setup">
          <BlogImage style={{ backgroundImage: `url('/images/blog/hospital-bed-home.jpg')` }} />
          <BlogContent>
            <BlogTitle>Setting Up a Hospital Bed at Home: Complete Checklist</BlogTitle>
            <BlogExcerpt>
              Everything you need to know about selecting, setting up, and maximizing the benefits of a hospital bed for home care.
            </BlogExcerpt>
            <BlogMeta>
              <span>March 29, 2023</span>
              <span>10 min read</span>
            </BlogMeta>
          </BlogContent>
        </BlogCard>
        
        <BlogCard to="/blog/mobility-aids-comparison">
          <BlogImage style={{ backgroundImage: `url('/images/blog/mobility-aids.jpg')` }} />
          <BlogContent>
            <BlogTitle>Comparing Mobility Aids: Walkers vs. Rollators vs. Canes</BlogTitle>
            <BlogExcerpt>
              A detailed comparison of different mobility aids to help you determine which option provides the support you need.
            </BlogExcerpt>
            <BlogMeta>
              <span>March 12, 2023</span>
              <span>7 min read</span>
            </BlogMeta>
          </BlogContent>
        </BlogCard>
        
        <BlogCard to="/blog/caregiver-self-care-tips">
          <BlogImage style={{ backgroundImage: `url('/images/blog/caregiver-self-care.jpg')` }} />
          <BlogContent>
            <BlogTitle>Essential Self-Care Tips for Caregivers</BlogTitle>
            <BlogExcerpt>
              Practical advice for caregivers to maintain their physical and mental health while caring for others.
            </BlogExcerpt>
            <BlogMeta>
              <span>February 24, 2023</span>
              <span>5 min read</span>
            </BlogMeta>
          </BlogContent>
        </BlogCard>
      </BlogGrid>
    </>
  );
};

const BlogPage: React.FC = () => {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<BlogIndexPage />} />
        <Route path="/choosing-right-wheelchair" element={<Blog1 />} />
        <Route path="/bathroom-safety-elderly" element={<Blog2 />} />
        <Route path="/hospital-bed-home-setup" element={<Blog3 />} />
        <Route path="/mobility-aids-comparison" element={<Blog4 />} />
        <Route path="/caregiver-self-care-tips" element={<Blog5 />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageContainer>
  );
};

export default BlogPage;