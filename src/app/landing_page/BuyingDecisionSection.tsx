"use client";

import React, { useState } from "react";
import FeatureCard from "@/components/FeatureCard";

type CardKey = "listing" | "canvas" | "brokers" | "";

const features = [
  "Curated property matched",
  "Pre-screened properties only",
  "Dedicated expert support",
  "Transparent pricing & 0 hidden fees",
  "Streamlined process",
];

const BuyingDecisionSection: React.FC = () => {
  const [active, setActive] = useState<CardKey>("");
  const order: CardKey[] = ["listing", "canvas", "brokers"];

  const getCardData = (key: CardKey) => ({
    title: key === "listing" ? "Listing Sites" : key === "canvas" ? "Canvas Homes" : "Traditional Brokers",
    subtitle: key === "canvas" ? "The modern home buying experience is" : "The typical home buying experience is",
    features
  });

  const positionOf = (key: CardKey): -1 | 0 | 1 => {
    const idx = order.indexOf(active);
    const leftKey = order[(idx + order.length - 1) % order.length];
    
    if (key === active) return 0;
    if (key === leftKey) return -1;
    return 1;
  };

  return (
    <section className="w-full mt-[54px] lg:mt-[108px] px-4 lg:px-[78px]">
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
        {/* Mobile: horizontal deck (ONLY <769px) */}
        <div className="relative min-[769px]:hidden h-[560px]">
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

          {/* dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {order.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setActive(k)}
                className={`w-2 h-2 rounded-full ${active === k ? "bg-global-6" : "bg-global-8"}`}
                aria-label={`Go to ${k}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: three-column layout (>=769px) */}
        <div className="hidden md:flex md:flex-row items-center justify-between w-full md:gap-15">
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
                onMouseLeave={() => setActive("")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuyingDecisionSection;