/**
 * Affiliate program links for AvaCare Medical
 */
export const AFFILIATE_LINKS = {
  main: 'https://www.tkqlhce.com/click-9083409-13376996',
  // Add any other specific affiliate links here
};

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/AvaCare-Medical-1711689799061280/',
  twitter: 'https://twitter.com/avacaremedical',
  instagram: 'https://www.instagram.com/avacaremedical/',
  youtube: 'https://www.youtube.com/channel/UCFaZsGOOIxQPNO6Zn9ZCtOA'
};

/**
 * Generates an affiliate link for a specific product
 * @param productId The ID of the product (can be SKU or path)
 * @param source Tracking source
 * @returns The complete affiliate link
 */
export const getProductLink = (productId: string, source: string = 'general'): string => {
  // Base affiliate URL
  const baseAffiliateUrl = 'https://www.tkqlhce.com/click-9083409-13376996';
  
  // Add tracking parameters
  let url = `${baseAffiliateUrl}`;
  
  // If specific product ID is provided, add it as a parameter
  if (productId) {
    url += `?u=https%3A%2F%2Fwww.avacaremedical.com%2F${productId}`;
  }
  
  // Add source tracking if available
  if (source && source !== 'general') {
    url += url.includes('?') ? `&s=${source}` : `?s=${source}`;
  }
  
  return url;
};

/**
 * Get general site affiliate link
 * @param category Optional category to link to
 * @param source Source of the click for tracking
 * @returns Affiliate link to the category or main site
 */
export const getCategoryLink = (category?: string, source: string = 'general'): string => {
  // Base affiliate URL
  const baseAffiliateUrl = 'https://www.tkqlhce.com/click-9083409-13376996';
  
  let url = baseAffiliateUrl;
  
  // Add category if provided
  if (category) {
    url += `?u=https%3A%2F%2Fwww.avacaremedical.com%2F${category}`;
  }
  
  // Add source tracking
  if (source && source !== 'general') {
    url += url.includes('?') ? `&s=${source}` : `?s=${source}`;
  }
  
  return url;
};