'use client';
import React, { useState } from 'react';

interface RatingBarProps {
  rating?: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  readonly?: boolean;
  showValue?: boolean;
  onRatingChange?: (rating: number) => void;
  className?: string;
  color?: string;
  emptyColor?: string;
}

const RatingBar: React.FC<RatingBarProps> = ({
  rating = 0,
  maxRating = 5,
  size = 'md',
  readonly = false,
  showValue = false,
  onRatingChange,
  className = '',
  color = '#fbbf24',
  emptyColor = '#d1d5db'
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const handleStarClick = (starIndex: number) => {
    if (readonly) return;
    
    const newRating = starIndex + 1;
    setCurrentRating(newRating);
    onRatingChange?.(newRating);
  };

  const handleStarHover = (starIndex: number) => {
    if (readonly) return;
    setHoverRating(starIndex + 1);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverRating(0);
  };

  const getStarColor = (starIndex: number) => {
    const ratingToCheck = hoverRating || currentRating;
    return starIndex < ratingToCheck ? color : emptyColor;
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div 
        className="flex items-center gap-1"
        onMouseLeave={handleMouseLeave}
      >
        {Array.from({ length: maxRating }, (_, index) => (
          <button
            key={index}
            type="button"
            className={`
              ${sizes[size]} 
              ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} 
              transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded
            `}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            disabled={readonly}
            aria-label={`Rate ${index + 1} out of ${maxRating} stars`}
          >
            <svg
              className={`${sizes[size]} transition-colors duration-200`}
              fill={getStarColor(index)}
              stroke={getStarColor(index)}
              strokeWidth="1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
        ))}
      </div>
      
      {showValue && (
        <span className={`ml-2 font-medium text-gray-600 ${textSizes[size]}`}>
          {currentRating.toFixed(1)} / {maxRating}
        </span>
      )}
    </div>
  );
};

export default RatingBar;