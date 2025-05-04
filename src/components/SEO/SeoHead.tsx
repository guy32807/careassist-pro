import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  children?: React.ReactNode;
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title = 'CareAssist Pro | Quality Medical Equipment & Supplies',
  description = 'Find high-quality medical equipment and supplies for home care, facilities, and healthcare professionals. Best prices on mobility aids, patient care, and more.',
  keywords = 'medical supplies, medical equipment, home care, mobility aids, wheelchair, hospital beds, patient care',
  image = '/og-image.jpg',
  type = 'website',
  children
}) => {
  const { pathname } = useLocation();
  const siteUrl = 'https://careassistpro.com'; // Replace with your actual domain
  const canonicalUrl = `${siteUrl}${pathname}`;
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Favicon references */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Raleway:wght@500;600;700&display=swap" rel="stylesheet" />
      
      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      
      {/* Pass through any additional tags */}
      {children}
    </Helmet>
  );
};

export default SeoHead;