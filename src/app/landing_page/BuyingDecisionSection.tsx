'use client';

import React, { useState, useRef, useEffect } from 'react';
import FeatureCard from '@/components/FeatureCard';

type CardKey = 'listing' | 'canvas' | 'brokers' | '';

const features = [
  'Curated property matched',
  'Pre-screened properties only',
  'Dedicated expert support',
  'Transparent pricing & 0 hidden fees',
  'Streamlined process',
];

const BuyingDecisionSection: React.FC = () => {
  const [active, setActive] = useState<CardKey>('canvas');
  const [containerHeight, setContainerHeight] = useState<number>(460); // fallback height
  const containerRef = useRef<HTMLDivElement>(null);
  const order: CardKey[] = ['listing', 'canvas', 'brokers'];

  // Debug function
  const debugHeight = (height: number, source: string) => {
    console.log(`Setting container height to ${height}px from ${source}`);
  };

  const getCardData = (key: CardKey) => ({
    title:
      key === 'listing'
        ? 'Listing Sites'
        : key === 'canvas'
        ? 'Canvas Homes'
        : 'Traditional Brokers',
    subtitle:
      key === 'canvas'
        ? 'The modern home buying experience is'
        : 'The typical home buying experience is',
    features,
  });

  const positionOf = (key: CardKey): -1 | 0 | 1 => {
    const idx = order.indexOf(active);
    const leftKey = order[(idx + order.length - 1) % order.length];

    if (key === active) return 0;
    if (key === leftKey) return -1;
    return 1;
  };

  // Calculate container height based on all cards
  useEffect(() => {
    const calculateHeight = () => {
      if (!containerRef.current) return;
      
      let maxHeight = 0;
      
      // First try to measure existing cards
      const buttons = containerRef.current.querySelectorAll('button');
      buttons.forEach((button) => {
        // Get the inner content div height
        const contentDiv = button.querySelector('div > div:last-child');
        if (contentDiv) {
          const height = (contentDiv as HTMLElement).offsetHeight + 16; // Add padding
          maxHeight = Math.max(maxHeight, height);
        }
      });
      
      // If we couldn't measure existing cards, create temporary ones
      if (maxHeight === 0) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = Math.floor(containerWidth * 0.8); // 80% width
        
        // Create a hidden container for measurement
        const measureContainer = document.createElement('div');
        measureContainer.style.position = 'absolute';
        measureContainer.style.top = '-9999px';
        measureContainer.style.left = '-9999px';
        measureContainer.style.width = cardWidth + 'px';
        measureContainer.style.visibility = 'hidden';
        measureContainer.style.pointerEvents = 'none';
        document.body.appendChild(measureContainer);
        
        order.forEach((key) => {
          const data = getCardData(key);
          
          // Create temporary card structure
          const tempCard = document.createElement('div');
          tempCard.className = 'bg-global-14 border border-[#999090] rounded-[10px] px-6 py-8 shadow-lg';
          tempCard.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div style="display: flex; flex-direction: column; gap: 6px; z-index: 10;">
                <h3 style="font-size: 22px; font-weight: 500; line-height: 1; margin-bottom: 12px; font-family: Poppins;">${data.title}</h3>
                <p style="font-size: 14px; line-height: 1.2; margin-bottom: 16px; font-family: Poppins;">${data.subtitle}</p>
              </div>
              <div style="display: flex; flex-direction: column; gap: 17px;">
                ${data.features.map(f => `
                  <div style="display: flex; flex-direction: row;">
                    <div style="width: 15px; height: 15px; margin-top: 4px; flex-shrink: 0;"></div>
                    <span style="font-size: 14px; line-height: 1.5; margin-left: 8px; font-family: Poppins;">${f}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
          
          measureContainer.appendChild(tempCard);
          const height = tempCard.offsetHeight;
          maxHeight = Math.max(maxHeight, height);
          measureContainer.removeChild(tempCard);
        });
        
        document.body.removeChild(measureContainer);
      }
      
      // Add some padding to the height
      const finalHeight = maxHeight + 32; // Extra padding for positioning
      
      if (finalHeight > 100) { // Sanity check
        debugHeight(finalHeight, 'initial calculation');
        setContainerHeight(finalHeight);
      }
    };

    // Initial calculation
    const timer = setTimeout(calculateHeight, 100);
    
    // Also calculate when fonts load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(calculateHeight);
    }
    
    return () => clearTimeout(timer);
  }, [active, order]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      const timer = setTimeout(() => {
        if (!containerRef.current) return;
        
        let maxHeight = 0;
        const buttons = containerRef.current.querySelectorAll('button');
        buttons.forEach((button) => {
          const contentDiv = button.querySelector('div > div:last-child');
          if (contentDiv) {
            const height = (contentDiv as HTMLElement).offsetHeight + 16;
            maxHeight = Math.max(maxHeight, height);
          }
        });
        
        if (maxHeight > 100) {
          debugHeight(maxHeight + 32, 'resize calculation');
          setContainerHeight(maxHeight + 32);
        }
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full mt-[54px] lg:mt-[108px] px-4 lg:px-[78px] overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-[7px] lg:gap-[14px] justify-start items-center w-full max-w-[956px] mx-auto">
        <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] text-center text-global-2 font-['Poppins'] w-full">
          Buying a home is one of the biggest decisions you will ever make.
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[1.5] text-left text-global-6 font-['Poppins'] w-auto">
          Make sure the right people help you with it.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full mt-[30px] lg:mt-[60px]">
        {/* Mobile: horizontal deck */}
        <div className="md:hidden flex flex-col items-center">
          {/* Card stack with dynamic height */}
          <div 
            ref={containerRef}
            className="relative w-full transition-all duration-300"
            style={{ height: `${containerHeight}px` }}
          >
            {order.map((key) => {
              const pos = positionOf(key);
              const isActive = pos === 0;
              const data = getCardData(key);

              return (
                <FeatureCard
                  key={key}
                  title={data.title}
                  subtitle={data.subtitle}
                  features={data.features}
                  isActive={isActive}
                  isGradient={isActive}
                  onClick={() => setActive(key)}
                  isMobile={true}
                  position={pos}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop: three-column layout */}
        <div className="hidden md:flex md:flex-row items-stretch justify-between w-full md:gap-15">
          {order.map((key) => {
            const isActiveCard = key === active;
            const data = getCardData(key);

            return (
              <FeatureCard
                key={key}
                title={data.title}
                subtitle={data.subtitle}
                features={data.features}
                isActive={isActiveCard}
                isGradient={key === 'canvas'}
                onMouseEnter={() => setActive(key)}
                onMouseLeave={() => setActive('')}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuyingDecisionSection;