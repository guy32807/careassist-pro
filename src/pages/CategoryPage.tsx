import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/products/ProductCard';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { getProductLink } from '../constants/links';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 800px;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const Filter = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  min-width: 180px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 2rem;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin: 2rem 0;
`;

interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
}

// Mock product data for different categories
const mockProducts: Record<string, Product[]> = {
  'mobility': [
    {
      id: 'standard-wheelchair',
      name: 'Standard Wheelchair',
      price: 299.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Wheelchair',
      rating: 4.5,
      reviewCount: 128
    },
    {
      id: 'lightweight-transport-chair',
      name: 'Lightweight Transport Chair',
      price: 159.99,
      salePrice: 129.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Transport+Chair',
      rating: 4.3,
      reviewCount: 87
    },
    {
      id: 'rollator-walker',
      name: 'Rollator Walker with Seat',
      price: 119.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Rollator',
      rating: 4.7,
      reviewCount: 203
    },
    {
      id: 'folding-walker',
      name: 'Folding Walker',
      price: 69.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Walker',
      rating: 4.4,
      reviewCount: 156
    },
    {
      id: 'quad-cane',
      name: 'Quad Cane',
      price: 39.99,
      salePrice: 29.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Quad+Cane',
      rating: 4.2,
      reviewCount: 94
    },
    {
      id: 'forearm-crutches',
      name: 'Forearm Crutches (Pair)',
      price: 79.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Crutches',
      rating: 4.3,
      reviewCount: 67
    }
  ],
  'bathroom-safety': [
    {
      id: 'shower-chair',
      name: 'Adjustable Shower Chair',
      price: 89.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Shower+Chair',
      rating: 4.6,
      reviewCount: 143
    },
    {
      id: 'grab-bar-18',
      name: '18" Stainless Steel Grab Bar',
      price: 29.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Grab+Bar',
      rating: 4.8,
      reviewCount: 215
    },
    {
      id: 'raised-toilet-seat',
      name: 'Raised Toilet Seat with Arms',
      price: 49.99,
      salePrice: 39.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Toilet+Seat',
      rating: 4.4,
      reviewCount: 176
    },
    {
      id: 'transfer-bench',
      name: 'Tub Transfer Bench',
      price: 109.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Transfer+Bench',
      rating: 4.5,
      reviewCount: 132
    },
    {
      id: 'bath-mat',
      name: 'Non-Slip Bath Mat',
      price: 24.99,
      salePrice: 19.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Bath+Mat',
      rating: 4.2,
      reviewCount: 98
    },
    {
      id: 'toilet-safety-frame',
      name: 'Toilet Safety Frame',
      price: 44.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Safety+Frame',
      rating: 4.3,
      reviewCount: 87
    }
  ],
  'beds': [
    {
      id: 'full-electric-hospital-bed',
      name: 'Full Electric Hospital Bed',
      price: 1899.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Hospital+Bed',
      rating: 4.7,
      reviewCount: 112
    },
    {
      id: 'semi-electric-hospital-bed',
      name: 'Semi-Electric Hospital Bed',
      price: 1299.99,
      salePrice: 1099.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Semi+Electric+Bed',
      rating: 4.4,
      reviewCount: 89
    },
    {
      id: 'pressure-relief-mattress',
      name: 'Pressure Relief Hospital Bed Mattress',
      price: 349.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Mattress',
      rating: 4.6,
      reviewCount: 104
    },
    {
      id: 'bed-rail',
      name: 'Adjustable Bed Rail',
      price: 119.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Bed+Rail',
      rating: 4.3,
      reviewCount: 76
    },
    {
      id: 'overbed-table',
      name: 'Adjustable Overbed Table',
      price: 89.99,
      salePrice: 79.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Overbed+Table',
      rating: 4.5,
      reviewCount: 93
    },
    {
      id: 'bed-trapeze',
      name: 'Heavy-Duty Bed Trapeze',
      price: 199.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Bed+Trapeze',
      rating: 4.4,
      reviewCount: 68
    }
  ],
  'daily-living': [
    {
      id: 'dressing-stick',
      name: 'Dressing Stick and Shoehorn',
      price: 19.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Dressing+Stick',
      rating: 4.3,
      reviewCount: 87
    },
    {
      id: 'reachers',
      name: '32" Reacher Grabber',
      price: 24.99,
      salePrice: 19.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Reacher',
      rating: 4.6,
      reviewCount: 148
    },
    {
      id: 'sock-aid',
      name: 'Sock Aid Kit',
      price: 17.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Sock+Aid',
      rating: 4.2,
      reviewCount: 76
    },
    {
      id: 'pill-organizer',
      name: 'Weekly Pill Organizer with Alarm',
      price: 29.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Pill+Organizer',
      rating: 4.4,
      reviewCount: 129
    },
    {
      id: 'button-hook',
      name: 'Button Hook and Zipper Pull',
      price: 9.99,
      salePrice: 7.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Button+Hook',
      rating: 4.1,
      reviewCount: 62
    },
    {
      id: 'elastic-shoelaces',
      name: 'Elastic No-Tie Shoelaces (3 pairs)',
      price: 14.99,
      image: 'https://placehold.co/300x300/e6f0ff/0062cc?text=Shoelaces',
      rating: 4.3,
      reviewCount: 103
    }
  ]
};

// Category metadata
const categoryInfo: Record<string, { title: string; description: string }> = {
  'mobility': {
    title: 'Mobility Aids & Equipment',
    description: 'Enhance independence and freedom of movement with our selection of high-quality mobility aids. From wheelchairs and walkers to canes and crutches, we offer reliable mobility solutions for various needs and abilities.'
  },
  'bathroom-safety': {
    title: 'Bathroom Safety Products',
    description: 'Make the bathroom safer and more accessible with our comprehensive range of bathroom safety equipment. Our products help prevent slips and falls while promoting independence during bathing and personal care activities.'
  },
  'beds': {
    title: 'Hospital Beds & Accessories',
    description: 'Create a comfortable and functional care environment with our selection of hospital beds and accessories. Designed for both patient comfort and caregiver convenience, our beds offer adjustability, durability, and safety features.'
  },
  'daily-living': {
    title: 'Daily Living Aids',
    description: 'Simplify everyday tasks with our collection of daily living aids. These practical tools help maintain independence by making routine activities easier for those with limited mobility, dexterity, or strength.'
  }
};

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('featured');
  
  // Set the page title and category info
  const categoryData = category ? categoryInfo[category] || { 
    title: 'Products', 
    description: 'Browse our selection of quality medical equipment and supplies.' 
  } : { 
    title: 'Products', 
    description: 'Browse our selection of quality medical equipment and supplies.' 
  };
  
  useEffect(() => {
    // In a real app, this would be an API call based on the category parameter
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      if (category && mockProducts[category]) {
        let productsList = [...mockProducts[category]];
        
        // Apply sorting
        if (sortBy === 'price-low') {
          productsList.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        } else if (sortBy === 'price-high') {
          productsList.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        } else if (sortBy === 'rating') {
          productsList.sort((a, b) => b.rating - a.rating);
        }
        
        setProducts(productsList);
      } else {
        // If the category doesn't exist, show empty list
        setProducts([]);
      }
      setLoading(false);
    }, 500);
  }, [category, sortBy]);
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };
  
  return (
    <Container>
      <Helmet>
        <title>{categoryData.title} | AvaCare Medical</title>
        <meta name="description" content={categoryData.description} />
        <meta name="keywords" content={`medical equipment, ${category}, healthcare products, home medical supplies`} />
      </Helmet>
      
      <Breadcrumbs
        items={[
          { name: 'Products', path: '/products' },
          { name: categoryData.title }
        ]}
      />
      
      <Title>{categoryData.title}</Title>
      <Description>{categoryData.description}</Description>
      
      <FiltersContainer>
        <Filter value={sortBy} onChange={handleSortChange}>
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </Filter>
      </FiltersContainer>
      
      {loading ? (
        <div>Loading products...</div>
      ) : products.length > 0 ? (
        <ProductsGrid>
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              image={product.image}
              rating={product.rating}
              reviewCount={product.reviewCount}
              category={category || ''}
            />
          ))}
        </ProductsGrid>
      ) : (
        <NoProducts>
          <h3>No products found</h3>
          <p>We couldn't find any products in this category. Please try another category or check back later.</p>
        </NoProducts>
      )}
    </Container>
  );
};

export default CategoryPage;