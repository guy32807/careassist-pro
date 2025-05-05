import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { getProductLink } from '../constants/affiliateLinks';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

const Description = styled.div`
  margin-bottom: 2rem;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

// Add the missing ShopButton component
const ShopButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '8px'};
  text-decoration: none;
  margin-top: 1rem;
  text-align: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    text-decoration: none;
    color: white;
  }
`;

// This is a placeholder - in a real app, you'd fetch category data
const categoryData = {
  'mobility': {
    title: 'Mobility Products',
    description: 'Browse our selection of high-quality mobility aids including wheelchairs, walkers, rollators, and more.',
    metaDescription: 'Find high-quality mobility aids for improved independence and daily living. Shop wheelchairs, walkers, rollators, canes and more.',
    keywords: 'mobility aids, wheelchairs, walkers, rollators, transport chairs, canes, crutches, mobility scooters'
  },
  'bathroom-safety': {
    title: 'Bathroom Safety Products',
    description: 'Our bathroom safety products are designed to reduce the risk of slips and falls in the bathroom, providing security and independence.',
    metaDescription: 'Shop our bathroom safety products including shower chairs, grab bars, raised toilet seats, and more for a safer bathroom environment.',
    keywords: 'bathroom safety, shower chairs, grab bars, bath benches, raised toilet seats, safety rails, transfer benches'
  },
  // Add more categories as needed
};

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // Get category data or provide defaults
  const categoryInfo = category && categoryData[category as keyof typeof categoryData] 
    ? categoryData[category as keyof typeof categoryData]
    : {
        title: 'Products',
        description: 'Browse our selection of medical equipment and supplies.',
        metaDescription: 'Medical equipment and supplies for home healthcare needs.',
        keywords: 'medical equipment, medical supplies, home healthcare'
      };

  const formattedCategoryName = category 
    ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Products';
  
  return (
    <Container>
      <Helmet>
        <title>{categoryInfo.title} | CareAssist Pro</title>
        <meta name="description" content={categoryInfo.metaDescription} />
        <meta name="keywords" content={categoryInfo.keywords} />
      </Helmet>
      
      <Breadcrumbs
        items={[
          { name: 'Products', path: '/products' },
          { name: formattedCategoryName }
        ]}
      />
      
      <Title>{categoryInfo.title}</Title>
      
      <Description>
        <p>{categoryInfo.description}</p>
      </Description>
      
      <ProductList>
        {/* Product listings would go here - in a real app these would be fetched from an API */}
        {/* For now, we'll just show a placeholder */}
        <div>
          <p>Product listings would appear here. In a real application, these would be fetched from an API or database.</p>
          <ShopButton 
            href={getProductLink('standard-wheelchair', `category_${category}`)} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Product
          </ShopButton>
        </div>
      </ProductList>
    </Container>
  );
};

export default CategoryPage;