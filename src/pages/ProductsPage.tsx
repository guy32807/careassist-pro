import React, { useState } from 'react';
import styled from 'styled-components';
import SeoHead from '../components/SEO/SeoHead';
import { getCategoryLink, getProductLink } from '../constants/links';

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

const PageDescription = styled.p`
  font-size: 1.125rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
`;

const FilterButton = styled.button<{ $isActive?: boolean }>`
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.primary : 'white'};
  color: ${({ theme, $isActive }) => $isActive ? 'white' : theme.colors.text};
  border: 1px solid ${({ theme, $isActive }) => $isActive ? theme.colors.primary : theme.colors.border};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.primaryDark : theme.colors.backgroundAlt};
  }
`;

const SortSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.875rem;
  background-color: white;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
`;

const ProductCategory = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ProductPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const ProductLink = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
  }
`;

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const allProducts: Product[] = [
  {
    id: 'drive-medical-10105-1',
    name: 'Drive Medical Aluminum Rollator Walker',
    description: 'Lightweight aluminum rollator with fold-up seat, ergonomic handles, and convenient carry pouch.',
    price: '$79.99',
    category: 'mobility',
    image: '/images/products/rollator-walker.jpg'
  },
  {
    id: 'carex-health-brands-fgb22700-0000',
    name: 'Carex Shower Chair Bath Seat',
    description: 'Adjustable bath and shower seat with non-slip feet for safety and stability.',
    price: '$39.99',
    category: 'bathroom-safety',
    image: '/images/products/shower-chair.jpg'
  },
  {
    id: 'medline-mds80215h',
    name: 'Medline Semi-Electric Hospital Bed',
    description: 'Semi-electric hospital bed with adjustable head and foot sections for enhanced comfort and care.',
    price: '$899.99',
    category: 'hospital-beds',
    image: '/images/products/hospital-bed.jpg'
  },
  {
    id: 'drive-medical-rtl10266',
    name: 'Drive Medical Raised Toilet Seat',
    description: 'Raised toilet seat with arms for added support and independence in the bathroom.',
    price: '$49.99',
    category: 'bathroom-safety',
    image: '/images/products/raised-toilet-seat.jpg'
  },
  {
    id: 'mckesson-mds808200',
    name: 'McKesson Blood Pressure Monitor',
    description: 'Digital automatic blood pressure monitor for accurate readings at home.',
    price: '$29.99',
    category: 'daily-living',
    image: '/images/products/blood-pressure-monitor.jpg'
  },
  {
    id: 'invacare-9805p',
    name: 'Invacare Wheelchair',
    description: 'Lightweight, foldable wheelchair with padded armrests and swing-away footrests.',
    price: '$289.99',
    category: 'mobility',
    image: '/images/products/wheelchair.jpg'
  },
  {
    id: 'drive-medical-rtl12062',
    name: 'Drive Medical Bedside Commode',
    description: 'Versatile 3-in-1 commode that can be used as a toilet safety frame, bedside commode, or raised toilet seat.',
    price: '$59.99',
    category: 'bathroom-safety',
    image: '/images/products/bedside-commode.jpg'
  },
  {
    id: 'dynarex-4411',
    name: 'Dynarex Disposable Underpads',
    description: 'Pack of 100 disposable underpads for incontinence protection on beds and chairs.',
    price: '$24.99',
    category: 'incontinence',
    image: '/images/products/underpads.jpg'
  }
];

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('default');
  
  // Filter products based on selected category
  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);
  
  // Sort products based on selected sort order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case 'price_low_high':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price_high_low':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'name_a_z':
        return a.name.localeCompare(b.name);
      case 'name_z_a':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
  
  return (
    <>
      <SeoHead 
        title="Medical Equipment & Supplies | Product Catalog | MedSupplyGuide"
        description="Browse our complete catalog of medical equipment and supplies. Find wheelchairs, hospital beds, bathroom safety equipment, and more for home care and medical facilities."
        keywords="medical supplies, medical equipment, mobility aids, bathroom safety, hospital beds, daily living aids, healthcare products, home care"
      />
      
      <PageContainer>
        <PageHeader>
          <PageTitle>Medical Equipment & Supplies</PageTitle>
          <PageDescription>
            Browse our comprehensive selection of high-quality medical equipment and supplies designed to support independent living, enhance patient care, and improve quality of life.
          </PageDescription>
        </PageHeader>
        
        <FilterSection>
          <FilterGroup>
            <FilterButton 
              $isActive={activeCategory === 'all'} 
              onClick={() => setActiveCategory('all')}
            >
              All Products
            </FilterButton>
            <FilterButton 
              $isActive={activeCategory === 'mobility'} 
              onClick={() => setActiveCategory('mobility')}
            >
              Mobility
            </FilterButton>
            <FilterButton 
              $isActive={activeCategory === 'bathroom-safety'} 
              onClick={() => setActiveCategory('bathroom-safety')}
            >
              Bathroom Safety
            </FilterButton>
            <FilterButton 
              $isActive={activeCategory === 'hospital-beds'} 
              onClick={() => setActiveCategory('hospital-beds')}
            >
              Hospital Beds
            </FilterButton>
            <FilterButton 
              $isActive={activeCategory === 'daily-living'} 
              onClick={() => setActiveCategory('daily-living')}
            >
              Daily Living
            </FilterButton>
          </FilterGroup>
          
          <SortSelect value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="default">Sort by: Featured</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
            <option value="name_a_z">Name: A to Z</option>
            <option value="name_z_a">Name: Z to A</option>
          </SortSelect>
        </FilterSection>
        
        <ProductGrid>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage style={{ backgroundImage: `url(${product.image})` }} />
              <ProductContent>
                <ProductCategory>{product.category.replace('-', ' ')}</ProductCategory>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductLink 
                  href={getProductLink(product.id, `products_page_${product.category}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Product
                </ProductLink>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductGrid>
      </PageContainer>
    </>
  );
};

export default ProductsPage;