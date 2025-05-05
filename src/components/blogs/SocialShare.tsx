import React from 'react';
import styled from 'styled-components';

interface SocialShareProps {
  title: string;
  url: string;
  description: string;
  imageUrl?: string; // Add optional imageUrl prop
}

const ShareContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ShareTitle = styled.div`
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors?.textLight || '#6c757d'};
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    opacity: 0.9;
    text-decoration: none;
    color: white;
  }
`;

const FacebookButton = styled(ShareButton)`
  background-color: #1877F2;
`;

const TwitterButton = styled(ShareButton)`
  background-color: #1DA1F2;
`;

const LinkedInButton = styled(ShareButton)`
  background-color: #0A66C2;
`;

const EmailButton = styled(ShareButton)`
  background-color: #D44638;
`;

const SocialShare: React.FC<SocialShareProps> = ({ title, url, description, imageUrl }) => {
  // Encode parameters for social sharing
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  // Generate sharing links
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  
  // Add image to Twitter if available
  const twitterUrl = imageUrl 
    ? `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&image=${encodeURIComponent(imageUrl)}`
    : `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const emailUrl = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`;
  
  return (
    <ShareContainer>
      <ShareTitle>Share this article:</ShareTitle>
      <ShareButtons>
        <FacebookButton 
          href={facebookUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          f
        </FacebookButton>
        <TwitterButton 
          href={twitterUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
        >
          t
        </TwitterButton>
        <LinkedInButton 
          href={linkedInUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          in
        </LinkedInButton>
        <EmailButton 
          href={emailUrl}
          aria-label="Share via Email"
        >
          @
        </EmailButton>
      </ShareButtons>
    </ShareContainer>
  );
};

export default SocialShare;