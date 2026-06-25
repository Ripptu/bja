import React from 'react';

interface ImagePlaceholderProps {
  title?: string;
  subtitle?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'banner';
  className?: string;
  icon?: React.ReactNode;
  imageUrl?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  title = "BJA Medical Solutions",
  aspectRatio = 'video',
  className = '',
  imageUrl
}) => {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9] min-h-[160px] sm:min-h-[220px]',
    banner: 'aspect-[3/1] sm:aspect-[4/1] md:aspect-[5/1] min-h-[140px] sm:min-h-[180px]'
  };

  if (imageUrl) {
    return (
      <div 
        className={`hidden sm:block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm select-none bg-gray-100 ${aspectClasses[aspectRatio]} ${className}`}
      >
        <img 
          src={imageUrl} 
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div 
      className={`hidden sm:block relative w-full rounded-2xl sm:rounded-3xl bg-gray-200/80 border border-gray-300/60 overflow-hidden select-none ${aspectClasses[aspectRatio]} ${className}`}
    />
  );
};

