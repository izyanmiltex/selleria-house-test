import React from 'react';

interface SelleriaLogoProps {
  className?: string;
  theme?: 'dark' | 'light' | 'green';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const SelleriaLogo: React.FC<SelleriaLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-7',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="http://aryezmiltex.com/sellerialogo2"
        alt="Selleria House"
        loading="eager"
        decoding="async"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src === 'http://aryezmiltex.com/sellerialogo2') {
            img.src = 'https://aryezmiltex.com/sellerialogo2';
          }
        }}
        className={`${heightClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};
