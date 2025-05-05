import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/common/Breadcrumbs';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const Section = styled.section`
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const AboutContent = styled.div`
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const TeamMemberName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.5rem;
`;

const TeamMemberBio = styled.p`
  font-size: 0.9rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ValueDescription = styled.p`
  font-size: 0.9rem;
`;

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>About Us | CareAssist Pro</title>
        <meta name="description" content="Learn about CareAssist Pro, our mission to improve healthcare equipment accessibility, and the team behind our service." />
        <meta name="keywords" content="healthcare equipment, medical supplies, about us, mission, values, team" />
      </Helmet>
      
      <Breadcrumbs
        items={[
          { name: 'About Us' }
        ]}
      />
      
      <Title>About CareAssist Pro</Title>
      
      <AboutContent>
        <p>
          CareAssist Pro was founded with a simple yet powerful mission: to make quality healthcare equipment accessible to everyone who needs it. We understand that navigating the world of medical supplies can be overwhelming, especially during challenging times when you or your loved ones require home healthcare solutions.
        </p>
        
        <p>
          What began as a small family business in 2010 has grown into a trusted resource for thousands of customers nationwide. Our team of healthcare professionals, industry experts, and customer service specialists work together to provide not just products, but comprehensive solutions that enhance quality of life and promote independence.
        </p>
      </AboutContent>
      
      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <AboutContent>
          <p>
            Our mission is to enhance the quality of life for individuals with health challenges by providing access to high-quality, affordable medical equipment and supplies, complemented by exceptional customer service and expert guidance.
          </p>
          <p>
            We believe that everyone deserves the dignity and independence that comes with having the right healthcare equipment. That's why we curate our selection based on quality, functionality, and value, ensuring that our customers can find solutions that truly meet their needs.
          </p>
        </AboutContent>
      </Section>
      
      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <ValuesGrid>
          <ValueCard>
            <ValueIcon>🌟</ValueIcon>
            <ValueTitle>Excellence</ValueTitle>
            <ValueDescription>
              We're committed to excellence in everything we do, from product selection to customer service and support.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>❤️</ValueIcon>
            <ValueTitle>Compassion</ValueTitle>
            <ValueDescription>
              We approach every customer interaction with empathy, understanding the challenges that come with healthcare needs.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>🔍</ValueIcon>
            <ValueTitle>Integrity</ValueTitle>
            <ValueDescription>
              We operate with transparency and honesty, providing accurate information and fair pricing.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueIcon>🚀</ValueIcon>
            <ValueTitle>Innovation</ValueTitle>
            <ValueDescription>
              We continuously seek improved products and services that better address evolving healthcare needs.
            </ValueDescription>
          </ValueCard>
        </ValuesGrid>
      </Section>
      
      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <AboutContent>
          <p>
            CareAssist Pro is powered by a dedicated team of professionals who bring diverse healthcare and customer service expertise to serve you better.
          </p>
        </AboutContent>
        
        <TeamGrid>
          <TeamMember>
            <TeamMemberImage src="https://placehold.co/300x300/e6f0ff/0062cc?text=J.S." alt="John Smith" />
            <TeamMemberName>John Smith</TeamMemberName>
            <TeamMemberRole>Founder & CEO</TeamMemberRole>
            <TeamMemberBio>
              A former physical therapist with 15 years of experience in healthcare, John founded CareAssist Pro to address the equipment needs he saw first-hand with his patients.
            </TeamMemberBio>
          </TeamMember>
          
          <TeamMember>
            <TeamMemberImage src="https://placehold.co/300x300/e6f0ff/0062cc?text=M.J." alt="Maria Johnson" />
            <TeamMemberName>Maria Johnson</TeamMemberName>
            <TeamMemberRole>Director of Product Selection</TeamMemberRole>
            <TeamMemberBio>
              With a background in occupational therapy, Maria oversees our product selection process, ensuring we offer equipment that truly enhances independence and quality of life.
            </TeamMemberBio>
          </TeamMember>
          
          <TeamMember>
            <TeamMemberImage src="https://placehold.co/300x300/e6f0ff/0062cc?text=R.T." alt="Robert Thompson" />
            <TeamMemberName>Robert Thompson</TeamMemberName>
            <TeamMemberRole>Customer Success Manager</TeamMemberRole>
            <TeamMemberBio>
              Robert leads our customer support team, drawing on his experience as a home health aide to ensure that every customer receives knowledgeable, compassionate service.
            </TeamMemberBio>
          </TeamMember>
        </TeamGrid>
      </Section>
      
      <Section>
        <SectionTitle>Our Approach</SectionTitle>
        <AboutContent>
          <p>
            At CareAssist Pro, we believe that getting the right medical equipment should be a straightforward and supportive experience. Our approach focuses on:
          </p>
          <ul>
            <li><strong>Education:</strong> Providing clear, comprehensive information about products, their uses, and benefits</li>
            <li><strong>Personalization:</strong> Understanding each customer's unique needs to recommend appropriate solutions</li>
            <li><strong>Quality:</strong> Offering only equipment that meets our stringent standards for durability, functionality, and value</li>
            <li><strong>Support:</strong> Being available to answer questions and provide guidance before, during, and after purchase</li>
          </ul>
          <p>
            We're not just in the business of selling medical equipment—we're in the business of improving lives through the right healthcare solutions.
          </p>
        </AboutContent>
      </Section>
    </Container>
  );
};

export default AboutPage;