import React from 'react';
import styled from 'styled-components';
import { getProductLink } from '../../constants/affiliateLinks';

const BlogContent = styled.div`
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
  }
  
  h3 {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const ProductRecommendation = styled.div`
  margin: 3rem 0;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors?.primaryLightest || '#e6f0ff'};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-right: 1.5rem;
    margin-bottom: 0;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
`;

const ProductDescription = styled.p`
  margin-bottom: 1rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors?.secondary || '#4dabf7'};
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors?.secondaryDark || '#1a82e2'};
    text-decoration: none;
    color: white;
  }
`;

const Blog1: React.FC = () => {
  console.log('Blog1 component rendering');
  
  return (
    <>
      <BlogContent>
        <p>Wheelchairs provide essential mobility for millions of people worldwide, offering independence and improving quality of life. However, selecting the right wheelchair isn't always straightforward, as there are numerous factors to consider based on individual needs, lifestyle, and physical capabilities.</p>
        
        <p>In this comprehensive guide, we'll walk you through the different types of wheelchairs available, key features to consider, and how to make the best choice for your specific situation.</p>
        
        <h2>Types of Wheelchairs</h2>
        
        <h3>Manual Wheelchairs</h3>
        <p>Manual wheelchairs are propelled by the user pushing the wheels by hand or with the assistance of a caregiver. They're typically lighter, less expensive, and more portable than power wheelchairs.</p>
        
        <p>Key types of manual wheelchairs include:</p>
        <ul>
          <li><strong>Standard/Conventional Wheelchairs:</strong> Durable, heavy-duty chairs with fixed armrests and footrests, designed for everyday use.</li>
          <li><strong>Lightweight/Ultralight Wheelchairs:</strong> Designed with aluminum or titanium frames, these chairs are easier to propel and transport, making them ideal for active users.</li>
          <li><strong>Transport Wheelchairs:</strong> Featuring smaller wheels and designed to be pushed by a caregiver rather than self-propelled.</li>
          <li><strong>Reclining Wheelchairs:</strong> Allow the backrest to recline, providing comfort for users who need to change positions frequently.</li>
          <li><strong>Sports Wheelchairs:</strong> Specially designed for athletic activities with reinforced frames, angled wheels, and enhanced stability.</li>
        </ul>
        
        <h3>Power Wheelchairs</h3>
        <p>Power or electric wheelchairs use a motor and battery for propulsion, controlled via a joystick or alternative control mechanism. They're ideal for users with limited upper body strength or endurance.</p>
        
        <p>Common types include:</p>
        <ul>
          <li><strong>Rear-Wheel Drive:</strong> Provides stable, predictable handling and good straight-line performance.</li>
          <li><strong>Mid-Wheel Drive:</strong> Offers the tightest turning radius, making them excellent for indoor use and navigating tight spaces.</li>
          <li><strong>Front-Wheel Drive:</strong> Handles uneven terrain well and provides good obstacle climbing ability.</li>
          <li><strong>Standing Power Wheelchairs:</strong> Allow users to elevate to a standing position while remaining secured to the chair.</li>
        </ul>
        
        <h2>Key Factors to Consider When Choosing a Wheelchair</h2>
        
        <h3>User's Physical Condition and Capabilities</h3>
        <p>The user's strength, balance, coordination, and overall health status should guide the selection process. Those with good upper body strength might prefer a manual wheelchair, while those with limited strength would benefit from a power wheelchair.</p>
        
        <h3>Intended Use and Environment</h3>
        <p>Consider where and how the wheelchair will be used most frequently:</p>
        <ul>
          <li>Primarily indoors or outdoors?</li>
          <li>Smooth surfaces or rough terrain?</li>
          <li>Need for frequent transportation in vehicles?</li>
          <li>Daily activities and lifestyle requirements</li>
        </ul>
        
        <h3>Size and Dimensions</h3>
        <p>The wheelchair must fit the user properly for comfort and functionality. Important measurements include:</p>
        <ul>
          <li>Seat width and depth</li>
          <li>Backrest height</li>
          <li>Seat-to-floor height</li>
          <li>Overall wheelchair dimensions for doorways and tight spaces</li>
        </ul>
      </BlogContent>
      
      <ProductRecommendation>
        <ProductImage 
          src="https://placehold.co/400x300/e6f0ff/0062cc?text=Wheelchair" 
          alt="Premium Lightweight Wheelchair"
        />
        <ProductInfo>
          <ProductTitle>Premium Lightweight Wheelchair</ProductTitle>
          <ProductDescription>This ergonomic, easy-to-maneuver wheelchair features a durable aluminum frame, adjustable armrests, and comfortable padding for all-day use.</ProductDescription>
          <CTAButton 
            href={getProductLink('standard-wheelchair', 'blog_1')} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Product
          </CTAButton>
        </ProductInfo>
      </ProductRecommendation>
    </>
  );
};

export default Blog1;