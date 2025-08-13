'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';

interface SliderProps {
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  className = '',
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/img_undraw_data_reports_l2u3.svg",
      title: "5 Simple Steps to Finding Your Dream Home",
      subtitle: "Expert support, clear pricing, and personalised service for every step of your home buying journey",
      buttonText: "Your Home Buying Journey"
    }
  ];

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-start items-start w-full">
          {/* Image Section */}
          <div className="w-full md:w-[44%] flex justify-center items-center mb-6 md:mb-0">
            <Image
              src={slides[currentSlide].image}
              alt="Home Buying Journey"
              width={566}
              height={448}
              className="w-full h-auto max-w-[566px] max-h-[448px] object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-[56%] flex flex-col gap-[18px] justify-start items-end md:pl-8">
            <div className="flex flex-col gap-[8px] justify-start items-end w-full">
              <Button
                variant="primary"
                className="bg-global-6 text-global-20 font-medium rounded-[18px] px-4 py-1.5 border border-[#bdb9b9] w-auto"
              >
                {slides[currentSlide].buttonText}
              </Button>
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] text-right text-global-4 font-['Poppins'] w-full md:w-[86%]">
                {slides[currentSlide].title}
              </h2>
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[1.5] text-right text-slider-1 font-['Poppins'] w-full md:w-[90%]">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-global-6 scale-110' :'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;