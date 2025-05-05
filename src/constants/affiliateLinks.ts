// Base affiliate link from Commission Junction
const BASE_AFFILIATE_LINK = 'https://www.kqzyfj.com/click-9083409-13364204';

/**
 * Generate an affiliate link for AvaCare Medical
 * @param path - Path on the target site (e.g., 'product/123' or 'category/mobility')
 * @param source - Tracking source (e.g., 'product_listing', 'blog')
 * @returns Full affiliate link
 */
export const getAffiliateLink = (path: string = '', source: string = ''): string => {
  // Build the destination URL
  let destinationUrl = 'https://www.avacaremedical.com';
  
  // Add path if provided, ensuring it has a leading slash
  if (path) {
    destinationUrl += path.startsWith('/') ? path : `/${path}`;
  }
  
  // Add tracking parameters if source is provided
  if (source) {
    const separator = destinationUrl.includes('?') ? '&' : '?';
    destinationUrl += `${separator}utm_source=careassistpro&utm_medium=affiliate&utm_campaign=${source}`;
  }
  
  // Return the full affiliate link with encoded destination
  return `${BASE_AFFILIATE_LINK}?url=${encodeURIComponent(destinationUrl)}`;
};

/**
 * Generate an affiliate link for a specific product
 * @param productId - Product ID or slug on AvaCare Medical
 * @param source - Tracking source
 * @returns Product-specific affiliate link
 */
export const getProductLink = (productId: string, source: string = ''): string => {
  // Map common product IDs to actual AvaCare Medical product URLs
  const productMap: Record<string, string> = {
    // Wheelchairs
    'standard-wheelchair': 'drive-blue-streak-wheelchair',
    'lightweight-wheelchair': 'drive-cruiser-iii-lightweight-wheelchair',
    'transport-wheelchair': 'drive-lightweight-expedition-transport-wheelchair',
    'bariatric-wheelchair': 'drive-bariatric-wheelchair-with-swing-away-footrest',
    
    // Mobility
    'folding-walker': 'medline-folding-walker-two-button',
    'rollator': 'drive-four-wheel-rollator',
    'cane': 'drive-adjustable-offset-handle-cane',
    'forearm-crutches': 'drive-forearm-crutches',
    
    // Bathroom Safety
    'shower-chair': 'drive-adjustable-shower-chair',
    'grab-bar': 'drive-grab-bar',
    'raised-toilet-seat': 'drive-raised-toilet-seat',
    'toilet-safety-rail': 'drive-toilet-safety-rail',
    
    // Daily Living
    'bed-rail': 'drive-bed-rail',
    'overbed-table': 'drive-overbed-table',
    'reachers': 'drive-reacher',
    'pill-organizer': 'drive-pill-organizer',
    
    // Default values for testing
    'exampleProductId': 'drive-blue-streak-wheelchair',
    'default': 'drive-blue-streak-wheelchair'
  };
  
  // Get the actual product path or use the provided ID if not in our map
  const productPath = productMap[productId] || productId;
  
  return getAffiliateLink(`/${productPath}`, source);
};

/**
 * Generate an affiliate link for a specific category
 * @param category - Category slug on AvaCare Medical
 * @param source - Tracking source
 * @returns Category-specific affiliate link
 */
export const getCategoryLink = (category: string, source: string = ''): string => {
  // Map our categories to actual AvaCare Medical category URLs
  const categoryMap: Record<string, string> = {
    'mobility': 'mobility-aids',
    'bathroom-safety': 'bathroom-safety',
    'daily-living': 'daily-living-aids',
    'beds': 'hospital-beds',
    'wound-care': 'wound-care',
    'incontinence': 'incontinence',
    
    // Default value
    'default': 'mobility-aids'
  };
  
  // Get the actual category path or use the provided category if not in our map
  const categoryPath = categoryMap[category] || category;
  
  return getAffiliateLink(`/${categoryPath}`, source);
};

/**
 * Generate an affiliate link for search results
 * @param query - Search query
 * @param source - Tracking source
 * @returns Search-specific affiliate link
 */
export const getSearchLink = (query: string, source: string = ''): string => {
  return getAffiliateLink(`/search?k=${encodeURIComponent(query)}`, source);
};