import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  text-decoration: none;
  margin: 1rem 0;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    text-decoration: none;
  }
`;

const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLightest};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin: 2rem 0;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
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

const FeaturedItem = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 1.5rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 1rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 250px;
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;

const FeaturedContent = styled.div`
  flex: 1;
`;

const FeaturedTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const FeaturedDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

const Blog5: React.FC = () => {
  return (
    <BlogPostLayout
      title="Medical Bathroom Design: Creating Safe and Accessible Spaces"
      description="Learn how to transform standard bathrooms into safe, accessible spaces using medical-grade equipment and design principles to support aging in place and accommodate mobility challenges."
      keywords="medical bathroom, accessible bathroom, handicap bathroom, bathroom safety, aging in place, walk-in tubs, roll-in showers, bathroom modifications, ADA bathroom"
      image="/images/blog/medical-bathroom-design.jpg"
      date="February 24, 2023"
      author="Jennifer Parker, Interior Designer & Accessibility Specialist"
      readTime="9 min read"
      authorImage="https://placehold.co/80x80/e6f0ff/0062cc?text=JP"
      category="Home Modifications"
      featuredImage="/images/blog/medical-bathroom-design.jpg"
    >
      <p>
        Bathrooms present some of the greatest challenges for individuals with mobility limitations, medical conditions, or those aging in place. The combination of water, slippery surfaces, and tight spaces creates potential hazards, while standard fixtures often fail to accommodate diverse accessibility needs.
      </p>
      
      {/* Rest of the content */}
    </BlogPostLayout>
  );
};

export default Blog5;