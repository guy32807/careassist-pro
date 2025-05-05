import React from 'react';
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '8px'};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  padding: 1rem;
  background-color: #f8f9fa;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const ViewButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius?.small || '4px'};
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
  width: 100%;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    color: white;
    text-decoration: none;
  }
`;

// Sample product data - in a real app, this would come from an API
const products = [
  {
    id: 'standard-wheelchair',
    name: 'Standard Wheelchair',
    description: 'Durable and comfortable wheelchair for everyday use with padded armrests and swing-away footrests.',
    price: 299.99,
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Standard+Wheelchair'
  },
  {
    id: 'lightweight-wheelchair',
    name: 'Lightweight Wheelchair',
    description: 'Ultra-lightweight wheelchair perfect for travel and easy transport. Features a foldable frame and comfortable seating.',
    price: 399.99,
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Lightweight+Wheelchair'
  },
  {
    id: 'shower-chair',
    name: 'Adjustable Shower Chair',
    description: 'Height-adjustable shower chair with non-slip feet for secure bathing. Easy assembly with no tools required.',
    price: 89.99,
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Shower+Chair'
  },
  {
    id: 'grab-bar',
    name: 'Bathroom Grab Bar',
    description: 'Securely mounted grab bar provides stability and support in the bathroom. Stainless steel construction.',
    price: 49.99,
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Grab+Bar'
  },
  {
    id: 'rollator',
    name: 'Folding Rollator Walker',
    description: 'Four-wheel rollator with seat, basket, and adjustable height handles. Folds easily for storage and transport.',
    price: 159.99,
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Rollator'
  },
  {
    id: 'raised-toilet-seat',
    name: 'Raised Toilet Seat with Handles',
    description: 'Adds 5 inches of height to your toilet with secure arm supports for easier sitting and standing.',
    price: 79.99,
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Toilet+Seat'
  },
  {
    id: 'cane',
    name: 'Adjustable Walking Cane',
    description: 'Adjustable height aluminum cane with comfortable grip handle and non-slip rubber tip.',
    price: 34.99,
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Walking+Cane'
  },
  {
    id: 'bed-rail',
    name: 'Adjustable Bed Rail',
    description: 'Provides support for getting in and out of bed. Adjustable height and length to fit most beds.',
    price: 129.99,
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Bed+Rail'
  }
];

const ProductsPage: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Medical Products & Equipment | CareAssist Pro</title>
        <meta name="description" content="Browse our selection of high-quality medical equipment and mobility aids designed for comfort, safety, and independence." />
        <meta name="keywords" content="medical equipment, mobility aids, bathroom safety, daily living aids, wheelchairs, walkers, shower chairs" />
      </Helmet>
      
      <Breadcrumbs
        items={[
          { name: 'Products' }
        ]}
      />
      
      <Title>Medical Products & Equipment</Title>
      
      <Description>
        <p>Browse our selection of high-quality medical equipment and mobility aids. We offer products designed to improve comfort, safety, and independence for individuals with mobility challenges or those recovering from surgery or injury.</p>
      </Description>
      
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <ViewButton 
                href={getProductLink(product.id, 'product_listing')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Details
              </ViewButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductsPage;