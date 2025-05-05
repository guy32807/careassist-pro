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

// Define your affiliate base URL
const AFFILIATE_BASE_URL = 'https://www.avacaremedical.com';

// Add your affiliate ID or tracking parameters
const AFFILIATE_PARAMS = 'affiliate=careassistpro';

/**
 * Generate a product link with affiliate tracking
 * @param productId - The product ID or slug
 * @param trackingSource - Optional tracking source for analytics
 * @returns Full affiliate link
 */
export const getProductLink = (productId: string, trackingSource?: string): string => {
  let url = `${AFFILIATE_BASE_URL}/product/${productId}?${AFFILIATE_PARAMS}`;
  
  if (trackingSource) {
    url += `&source=${trackingSource}`;
  }
  
  return url;
};

/**
 * Generate a category link with affiliate tracking
 * @param category - The category slug
 * @param trackingSource - Optional tracking source for analytics
 * @returns Full affiliate link
 */
export const getCategoryLink = (category: string, trackingSource?: string): string => {
  let url = `${AFFILIATE_BASE_URL}/category/${category}?${AFFILIATE_PARAMS}`;
  
  if (trackingSource) {
    url += `&source=${trackingSource}`;
  }
  
  return url;
};

/**
 * Generate a search link with affiliate tracking
 * @param query - The search query
 * @param trackingSource - Optional tracking source for analytics
 * @returns Full affiliate link
 */
export const getSearchLink = (query: string, trackingSource?: string): string => {
  let url = `${AFFILIATE_BASE_URL}/search?q=${encodeURIComponent(query)}&${AFFILIATE_PARAMS}`;
  
  if (trackingSource) {
    url += `&source=${trackingSource}`;
  }
  
  return url;
};

/**
 * Generate a generic affiliate link
 * @param path - The path to append to the base URL
 * @param trackingSource - Optional tracking source for analytics
 * @returns Full affiliate link
 */
export const getAffiliateLink = (path: string = '', trackingSource?: string): string => {
  let url = `${AFFILIATE_BASE_URL}${path ? '/' + path : ''}?${AFFILIATE_PARAMS}`;
  
  if (trackingSource) {
    url += `&source=${trackingSource}`;
  }
  
  return url;
};