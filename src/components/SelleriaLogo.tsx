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
    sm: 'h-[95px]',
    md: 'h-[115px] sm:h-[129px]',
    lg: 'h-[154px] sm:h-[180px]',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="https://aryezmiltex.com/sellerialogo"
        alt="Selleria House"
        loading="eager"
        decoding="async"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src === 'https://aryezmiltex.com/sellerialogo') {
            img.src = 'http://aryezmiltex.com/sellerialogo';
          }
        }}
        className={`${heightClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};
