import React from 'react';
import styled from 'styled-components';
import SeoHead from '../components/SEO/SeoHead';
import { getProductLink } from '../constants/links';

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

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

const ContentSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const TextContent = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const TeamSection = styled.section`
  margin-bottom: 4rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin: 0 auto 1.5rem;
`;

const TeamMemberName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const TeamMemberTitle = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

const TeamMemberBio = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
`;

const CtaSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primaryLightest};
  padding: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-align: center;
  margin-bottom: 2rem;
`;

const CtaTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CtaText = styled.p`
  font-size: 1.125rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const CtaButton = styled.a`
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

const AboutPage: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="About Us | MedSupplyGuide | Medical Equipment Information"
        description="Learn about MedSupplyGuide, your trusted source for information on medical equipment and supplies. We're dedicated to helping you find the best products for your needs."
        keywords="about MedSupplyGuide, medical equipment guide, medical supplies information, healthcare product reviews"
      />
      
      <PageContainer>
        <PageHeader>
          <PageTitle>About MedSupplyGuide</PageTitle>
          <PageSubtitle>
            Your trusted source for information on medical equipment and supplies to enhance care, comfort, and independence.
          </PageSubtitle>
        </PageHeader>
        
        <ContentSection>
          <TwoColumnGrid>
            <ImageContainer>
              <img src="/images/about/about-us.jpg" alt="MedSupplyGuide team" />
            </ImageContainer>
            
            <TextContent>
              <SectionTitle>Our Mission</SectionTitle>
              <p>
                At MedSupplyGuide, our mission is to help individuals and caregivers find the best medical equipment and supplies for their specific needs. We understand that navigating the world of healthcare products can be overwhelming, which is why we're dedicated to providing clear, reliable information and recommendations.
              </p>
              <p>
                Founded in 2020, we've helped thousands of people discover high-quality products that improve comfort, mobility, and independence. Whether you're recovering from surgery, managing a chronic condition, or caring for a loved one, we're here to guide you to the right solutions.
              </p>
            </TextContent>
          </TwoColumnGrid>
        </ContentSection>
        
        <ContentSection>
          <SectionTitle>What Sets Us Apart</SectionTitle>
          <TwoColumnGrid>
            <TextContent>
              <ul>
                <li>
                  <strong>Expert Research:</strong> Our team thoroughly researches every product category to identify the best options at different price points.
                </li>
                <li>
                  <strong>User-Focused Approach:</strong> We consider the real-world needs of users, including those with limited mobility, dexterity, or strength.
                </li>
                <li>
                  <strong>Transparency:</strong> We're transparent about our affiliate relationships and how we make recommendations.
                </li>
                <li>
                  <strong>Accessibility:</strong> We're committed to making healthcare information accessible and easy to understand.
                </li>
                <li>
                  <strong>Quality Focus:</strong> We prioritize products from reputable manufacturers with proven track records for safety and durability.
                </li>
              </ul>
            </TextContent>
            
            <ImageContainer>
              <img src="/images/about/our-values.jpg" alt="MedSupplyGuide values" />
            </ImageContainer>
          </TwoColumnGrid>
        </ContentSection>
        
        {/* <TeamSection>
          <SectionTitle>Our Team</SectionTitle>
          <TeamGrid>
            <TeamMember>
              <TeamMemberImage style={{ backgroundImage: 'url(/images/team/team-member-1.jpg)' }} />
              <TeamMemberName>Sarah Johnson</TeamMemberName>
              <TeamMemberTitle>Founder & Medical Equipment Specialist</TeamMemberTitle>
              <TeamMemberBio>
                With 15 years of experience in healthcare, Sarah founded MedSupplyGuide to help others navigate the complex world of medical equipment.
              </TeamMemberBio>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage style={{ backgroundImage: 'url(/images/team/team-member-2.jpg)' }} />
              <TeamMemberName>Michael Chen</TeamMemberName>
              <TeamMemberTitle>Occupational Therapist & Product Advisor</TeamMemberTitle>
              <TeamMemberBio>
                Michael provides expert insight on how different products can support daily activities and rehabilitation goals.
              </TeamMemberBio>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage style={{ backgroundImage: 'url(/images/team/team-member-3.jpg)' }} />
              <TeamMemberName>David Rodriguez</TeamMemberName>
              <TeamMemberTitle>Content Director</TeamMemberTitle>
              <TeamMemberBio>
                David ensures that our product information is accurate, comprehensive, and accessible to all readers.
              </TeamMemberBio>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage style={{ backgroundImage: 'url(/images/team/team-member-4.jpg)' }} />
              <TeamMemberName>Emily Wong</TeamMemberName>
              <TeamMemberTitle>Customer Support Specialist</TeamMemberTitle>
              <TeamMemberBio>
                Emily helps users find the right products for their specific needs and answers questions about medical equipment.
              </TeamMemberBio>
            </TeamMember>
          </TeamGrid>
        </TeamSection>
         */}
        <CtaSection>
          <CtaTitle>Ready to Find the Right Medical Equipment?</CtaTitle>
          <CtaText>
            Browse our carefully selected products and discover solutions that can enhance comfort, mobility, and independence for you or your loved ones.
          </CtaText>
          <CtaButton href={getProductLink('', 'about_page_cta')} target="_blank" rel="noopener noreferrer">
            Explore Products
          </CtaButton>
        </CtaSection>
      </PageContainer>
    </>
  );
};

export default AboutPage;