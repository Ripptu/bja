import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  title: string;
  subtitle?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'banner';
  className?: string;
  icon?: React.ReactNode;
  imageUrl?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  title,
  subtitle = "Abb. Platzhalter",
  aspectRatio = 'video',
  className = '',
  icon,
  imageUrl
}) => {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9] min-h-[220px]',
    banner: 'aspect-[3/1] sm:aspect-[4/1] md:aspect-[5/1] min-h-[180px]'
  };

  if (imageUrl) {
    return (
      <div 
        className={`relative w-full rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg group select-none bg-gray-100 ${aspectClasses[aspectRatio]} ${className}`}
      >
        <img 
          src={imageUrl} 
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-white/20 shadow-md backdrop-blur-md z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#002B5B]" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-800">{subtitle}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex items-end justify-between gap-4">
          <p className="text-xs sm:text-sm font-medium tracking-tight text-white/95 max-w-xl leading-snug drop-shadow-sm">
            {title}
          </p>
          {icon && (
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hidden sm:flex items-center justify-center text-white shrink-0">
              {icon}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full rounded-3xl bg-gradient-to-br from-gray-100 via-gray-100/80 to-gray-200/60 border border-gray-200/80 overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none group shadow-inner ${aspectClasses[aspectRatio]} ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 border border-gray-200/60 shadow-sm backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-[#002B5B] transition-colors" />
        <span className="text-[10px] font-mono font-medium tracking-wider uppercase text-gray-500">{subtitle}</span>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-xs transition-transform duration-500 group-hover:scale-105">
        <div className="w-12 h-12 rounded-2xl bg-white/90 border border-gray-200/80 shadow-sm flex items-center justify-center text-gray-400 group-hover:text-[#002B5B] group-hover:shadow transition-all mb-3">
          {icon || <ImageIcon className="w-6 h-6 stroke-[1.5]" />}
        </div>
        <p className="text-xs sm:text-sm font-semibold tracking-tight text-gray-600 px-4 leading-snug">
          {title}
        </p>
      </div>

      <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none" />
    </div>
  );
};
