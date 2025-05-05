import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { getCategoryLink } from '../constants/links';
import { getProductLink } from '../constants/affiliateLinks';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: this 1rem;
`;

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductImageContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '8px'};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors?.primary || '#0062cc'};
  margin-bottom: 1rem;
`;

const ProductDescription = styled.div`
  margin-bottom: 1.5rem;
`;

const BuyButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors?.secondary || '#4dabf7'};
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '8px'};
  text-decoration: none;
  margin-top: auto;
  text-align: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors?.secondaryDark || '#1a82e2'};
    text-decoration: none;
    color: white;
  }
`;

const ProductDetailsSection = styled.div`
  margin: 3rem 0;
`;

const ProductDetailsTitle = styled.h2`
  margin-bottom: 1.5rem;
`;

// Sample product data for demonstration
const sampleProducts: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Standard Wheelchair',
    price: 299.99,
    category: 'mobility',
    categoryName: 'Mobility',
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Standard+Wheelchair',
    description: 'A durable and comfortable standard wheelchair designed for everyday use. Features a sturdy steel frame, padded armrests, and easy-to-clean upholstery.',
    details: [
      'Weight capacity: 250 lbs',
      'Seat dimensions: 18" W x 16" D',
      'Overall width: 24"',
      'Folding design for easy transport',
      'Swing-away footrests',
      'Tool-free assembly'
    ]
  },
  '2': {
    id: '2',
    name: 'Adjustable Shower Chair',
    price: 89.99,
    category: 'bathroom-safety',
    categoryName: 'Bathroom Safety',
    image: 'https://placehold.co/600x400/e6f0ff/0062cc?text=Shower+Chair',
    description: 'Height-adjustable shower chair with non-slip rubber tips for stability. Provides a safe and comfortable seating option for those with limited mobility.',
    details: [
      'Weight capacity: 300 lbs',
      'Seat dimensions: 16" W x 13" D',
      'Adjustable height: 16" to 21"',
      'Tool-free assembly',
      'Corrosion-resistant aluminum frame',
      'Non-slip seat with drainage holes'
    ]
  }
};

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  
  // In a real app, you would fetch product data based on the productId
  const product = productId && sampleProducts[productId] 
    ? sampleProducts[productId] 
    : null;
  
  if (!product) {
    return (
      <Container>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </Container>
    );
  }
  
  // Generate affiliate link for the product
  const affiliateLink = getProductLink(productId || '', `product_view_${product.category}`);
  
  return (
    <Container>
      <Helmet>
        <title>{product.name} | CareAssist Pro</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, ${product.categoryName}, medical equipment, home healthcare`} />
      </Helmet>
      
      <Breadcrumbs
        items={[
          { name: 'Products', path: '/products' },
          { name: product.categoryName, path: `/category/${product.category}` },
          { name: product.name }
        ]}
      />
      
      <ProductLayout>
        <ProductImageContainer>
          <ProductImage src={product.image} alt={product.name} />
        </ProductImageContainer>
        
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          
          <ProductDescription>
            <p>{product.description}</p>
          </ProductDescription>
          
          <BuyButton 
            href={getProductLink(product.id, 'product_details')} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Buy Now
          </BuyButton>
        </ProductInfo>
      </ProductLayout>
      
      <ProductDetailsSection>
        <ProductDetailsTitle>Product Details</ProductDetailsTitle>
        <ul>
          {product.details.map((detail: string, index: number) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </ProductDetailsSection>
    </Container>
  );
};

export default ProductPage;