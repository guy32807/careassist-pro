import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SEO/SeoHead';
import { getProductLink, getCategoryLink } from '../constants/links';
import Breadcrumbs from '../components/common/Breadcrumbs';

const Hero = styled.section`
  background-color: ${({ theme }) => theme.colors.primaryLightest};
  padding: 4rem 0;
  text-align: center;
  background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 0;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.textLight};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    text-decoration: none;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLightest};
    text-decoration: none;
  }
`;

const FeaturedCategories = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CategoryCard = styled.a`
  display: block;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    text-decoration: none;
  }
`;

const CategoryImage = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const CategoryContent = styled.div`
  padding: 1.5rem;
`;

const CategoryName = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const CategoryDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  margin-bottom: 0;
`;

const PromoSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 4rem 0;
  text-align: center;
  background-image: linear-gradient(rgba(30, 95, 116, 0.9), rgba(30, 95, 116, 0.9)), url('/images/promo-bg.jpg');
  background-size: cover;
  background-position: center;
`;

const PromoContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PromoTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const PromoText = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const PromoButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    text-decoration: none;
  }
`;

const WhyChooseSection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primaryLightest};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.75rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  margin-bottom: 0;
  line-height: 1.6;
`;

const HomePage: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="CareAssist Pro | Medical Equipment & Supplies | Home Care Products"
        description="Find quality medical equipment and supplies for home care, medical facilities, and healthcare professionals. Explore mobility aids, daily living aids, and more."
      />
      
      <Breadcrumbs 
        items={[
          { name: 'Blogs', path: '/blogs' },
          { name: 'Enhancing Life Through Better Care' }
        ]}
      />
      
      <Hero>
        <HeroContainer>
          <HeroTitle>Enhancing Life Through <span>Better Care</span></HeroTitle>
          <HeroSubtitle>
            Discover expertly selected medical supplies, mobility equipment, and home care products to support independent living and improve quality of care.
          </HeroSubtitle>
          <ButtonGroup>
            <PrimaryButton href={getProductLink('', 'homepage_hero')} target="_blank" rel="noopener noreferrer">
              Shop Best Sellers
            </PrimaryButton>
            <SecondaryButton to="/products">
              Explore All Categories
            </SecondaryButton>
          </ButtonGroup>
        </HeroContainer>
      </Hero>
      
      <FeaturedCategories>
        <SectionTitle>Popular Categories</SectionTitle>
        <CategoryGrid>
          <CategoryCard href={getCategoryLink('wheelchairs', 'homepage_category')} target="_blank" rel="noopener noreferrer">
            <CategoryImage style={{ backgroundImage: `url('/images/categories/wheelchairs.jpg')` }} />
            <CategoryContent>
              <CategoryName>Wheelchairs</CategoryName>
              <CategoryDescription>
                Manual and electric wheelchairs designed for comfort and mobility.
              </CategoryDescription>
            </CategoryContent>
          </CategoryCard>
          
          <CategoryCard href={getCategoryLink('bathroom-safety', 'homepage_category')} target="_blank" rel="noopener noreferrer">
            <CategoryImage style={{ backgroundImage: `url('/images/categories/bathroom-safety.jpg')` }} />
            <CategoryContent>
              <CategoryName>Bathroom Safety</CategoryName>
              <CategoryDescription>
                Equipment to make bathrooms safer and more accessible.
              </CategoryDescription>
            </CategoryContent>
          </CategoryCard>
          
          <CategoryCard href={getCategoryLink('hospital-beds', 'homepage_category')} target="_blank" rel="noopener noreferrer">
            <CategoryImage style={{ backgroundImage: `url('/images/categories/hospital-beds.jpg')` }} />
            <CategoryContent>
              <CategoryName>Hospital Beds</CategoryName>
              <CategoryDescription>
                Adjustable beds designed for comfort and care at home.
              </CategoryDescription>
            </CategoryContent>
          </CategoryCard>
          
          <CategoryCard href={getCategoryLink('daily-living-aids', 'homepage_category')} target="_blank" rel="noopener noreferrer">
            <CategoryImage style={{ backgroundImage: `url('/images/categories/daily-living-aids.jpg')` }} />
            <CategoryContent>
              <CategoryName>Daily Living Aids</CategoryName>
              <CategoryDescription>
                Practical tools to help with everyday activities and independence.
              </CategoryDescription>
            </CategoryContent>
          </CategoryCard>
        </CategoryGrid>
      </FeaturedCategories>
      
      <PromoSection>
        <PromoContainer>
          <PromoTitle>Special Discount for New Customers</PromoTitle>
          <PromoText>
            First-time customers can enjoy a 10% discount on their first order. Use code WELCOME10 at checkout.
          </PromoText>
          <PromoButton href={getProductLink('', 'homepage_promo')} target="_blank" rel="noopener noreferrer">
            Shop Now and Save
          </PromoButton>
        </PromoContainer>
      </PromoSection>
      
      <WhyChooseSection>
        <SectionTitle>Why Choose CareAssist Pro</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-shipping-fast"></i>
            </FeatureIcon>
            <FeatureTitle>Fast Delivery</FeatureTitle>
            <FeatureDescription>
              Quick delivery with free shipping on orders over $75. Most items ship within 24 hours.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-medal"></i>
            </FeatureIcon>
            <FeatureTitle>Quality Assurance</FeatureTitle>
            <FeatureDescription>
              Only the highest quality medical equipment and supplies from trusted manufacturers.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-headset"></i>
            </FeatureIcon>
            <FeatureTitle>Expert Support</FeatureTitle>
            <FeatureDescription>
              Dedicated customer service team available to help you find the right products for your needs.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-tag"></i>
            </FeatureIcon>
            <FeatureTitle>Best Value</FeatureTitle>
            <FeatureDescription>
              Competitive pricing and regular promotions to help you save on essential medical supplies.
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </WhyChooseSection>
    </>
  );
};

export default HomePage;