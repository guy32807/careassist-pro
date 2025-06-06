import React from 'react';
import styled from 'styled-components';
import { getProductLink } from '../../constants/affiliateLinks';
import BlogPostLayout from './BlogPostLayout';

const BlogImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin: 1rem 0;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    text-decoration: none;
  }
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  
  th, td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.75rem;
    text-align: left;
  }
  
  th {
    background-color: ${({ theme }) => theme.colors.primaryLightest};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
  
  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;

const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLightest};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin: 2rem 0;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

const BlogContent = styled.div`
  margin: 2rem 0;
`;

const ProductRecommendation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.5rem;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProductInfo = styled.div`
  text-align: center;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  margin-bottom: 1rem;
`;

const Blog2: React.FC = () => {
  console.log('Blog2 component rendering');
  
  return (
    <BlogPostLayout
      title="Bathroom Safety for the Elderly: Essential Equipment"
      author="Mike Anderson, OT"
      authorImage="https://placehold.co/80x80/e6f0ff/0062cc?text=MA"
      date="April 18, 2023"
      readTime="6 min read"
      category="Home Safety"
      featuredImage="/images/blog/bathroom-safety.jpg"
      description="Discover the essential bathroom safety equipment that can help prevent falls and accidents for elderly individuals. Learn about grab bars, shower chairs, raised toilet seats, and more."
      keywords="bathroom safety, elderly bathroom safety, senior bathroom equipment, grab bars, shower chairs, bathroom falls prevention, raised toilet seats, bathroom modifications"
      image="/images/blog/bathroom-safety.jpg"
    >
      <BlogContent>
        <p>The bathroom is often considered the most dangerous room in the home for seniors, with wet, slippery surfaces and hard fixtures creating a high-risk environment for falls and injuries. According to the CDC, approximately 235,000 people visit emergency rooms each year due to injuries sustained in the bathroom, with the risk increasing significantly with age.</p>
        
        {/* Rest of the blog content... */}
      </BlogContent>
      
      <ProductRecommendation>
        <ProductImage 
          src="https://placehold.co/400x300/e6f0ff/0062cc?text=Bathroom+Bundle" 
          alt="Complete Bathroom Safety Bundle"
        />
        <ProductInfo>
          <ProductTitle>Complete Bathroom Safety Bundle</ProductTitle>
          <ProductDescription>This comprehensive bundle includes an adjustable shower chair, grab bars, non-slip bath mat, and raised toilet seat with handles.</ProductDescription>
          <CTAButton 
            href={getProductLink('shower-chair', 'blog_2')} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Product
          </CTAButton>
        </ProductInfo>
      </ProductRecommendation>
    </BlogPostLayout>
  );
};

export default Blog2;