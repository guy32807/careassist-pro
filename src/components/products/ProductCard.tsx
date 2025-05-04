import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getProductLink } from '../../constants/links';

const Card = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1rem;
`;

const SaleTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.accent || '#FF6B6B'};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 600;
  font-size: 0.8rem;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Name = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Price = styled.span<{ isOnSale?: boolean }>`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme, isOnSale }) => isOnSale ? theme.colors.textLight : theme.colors.text};
  text-decoration: ${({ isOnSale }) => isOnSale ? 'line-through' : 'none'};
  margin-right: ${({ isOnSale }) => isOnSale ? '0.5rem' : '0'};
`;

const SalePrice = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.accent || '#FF6B6B'};
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Stars = styled.div`
  color: #FFD700; /* Gold color for stars */
  letter-spacing: 2px;
`;

const ReviewCount = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.85rem;
  margin-left: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 0.5rem 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex: 1;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark || '#0056b3'};
    text-decoration: none;
    color: white;
  }
`;

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
}

// Simple function to render star ratings
const renderStars = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  return '★'.repeat(fullStars) + (halfStar ? '★' : '') + '☆'.repeat(emptyStars);
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  salePrice,
  image,
  rating,
  reviewCount,
  category
}) => {
  const isOnSale = salePrice !== undefined;
  
  // Define special affiliate links for specific categories
  const getMobilityCategoryLink = (productId: string, source: string) => {
    return `https://www.jdoqocy.com/click-9083409-13357766?url=https://www.avacaremedical.com/product/${productId}&sid=${source}`;
  };
  
  const getBathroomSafetyLink = (productId: string, source: string) => {
    return `https://www.jdoqocy.com/click-9083409-13371812?url=https://www.avacaremedical.com/product/${productId}&sid=${source}`;
  };

  // Determine which affiliate link to use based on the category
  let affiliateLink;
  
  if (category === 'mobility') {
    affiliateLink = getMobilityCategoryLink(id, `category_${category}`);
  } else if (category === 'bathroom-safety') {
    affiliateLink = getBathroomSafetyLink(id, `category_${category}`);
  } else {
    affiliateLink = getProductLink(id, `category_${category}`);
  }
    
  const productDetailLink = `/product/${id}`;
  
  return (
    <Card>
      <ImageContainer>
        <Image src={image} alt={name} />
        {isOnSale && <SaleTag>SALE</SaleTag>}
      </ImageContainer>
      
      <Content>
        <Name to={productDetailLink}>{name}</Name>
        
        <PriceContainer>
          <Price isOnSale={isOnSale}>${price.toFixed(2)}</Price>
          {isOnSale && <SalePrice>${salePrice.toFixed(2)}</SalePrice>}
        </PriceContainer>
        
        <RatingContainer>
          <Stars>{renderStars(rating)}</Stars>
          <ReviewCount>({reviewCount})</ReviewCount>
        </RatingContainer>
        
        <ButtonContainer>
          <Button href={affiliateLink} target="_blank" rel="noopener noreferrer">
            Shop Now
          </Button>
        </ButtonContainer>
      </Content>
    </Card>
  );
};

export default ProductCard;