import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const ProductInfo = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 2rem;
  margin-bottom: 2rem;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 1rem 0;
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
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

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would normally fetch product details from an API or data store
  // For now, we'll use placeholder content
  const product = {
    id: id,
    name: "Premium Medical Bathroom Safety Equipment",
    price: "$129.99",
    description: "High-quality bathroom safety equipment designed for seniors and individuals with mobility challenges. This product helps prevent falls and accidents in the bathroom while promoting independence and dignity.",
    features: [
      "Anti-slip surface for maximum safety",
      "Easy installation - no tools required",
      "Adjustable height to accommodate different users",
      "Durable construction supporting up to 350 lbs",
      "Medical-grade materials for long-lasting performance"
    ],
    imageUrl: "/images/products/bathroom-safety-product.jpg"
  };

  return (
    <Container>
      <Title>{product.name}</Title>
      
      <ProductInfo>
        <img 
          src={product.imageUrl} 
          alt={product.name}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1.5rem' }}
        />
        
        <Price>{product.price}</Price>
        
        <Description>{product.description}</Description>
        
        <h3>Key Features:</h3>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        
        <CTAButton 
          href="https://www.kqzyfj.com/click-9083409-13371812" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Buy Now - Special Offer
        </CTAButton>
      </ProductInfo>
    </Container>
  );
};

export default ProductDetailPage;