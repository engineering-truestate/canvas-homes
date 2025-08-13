"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
  const idx = order.indexOf(active);
  const leftKey = order[(idx + order.length - 1) % order.length];
  const rightKey = order[(idx + 1) % order.length];

  // Ref for scrollable developer logos
  const logosRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect for logos
  useEffect(() => {
    const logos = logosRef.current;
    if (!logos) return;

    let scrollDirection = 1;
    let scrollAmount = 0;
    const maxScroll = logos.scrollWidth - logos.clientWidth;

    const scroll = () => {
      if (!logos) return;

      scrollAmount += 0.5 * scrollDirection;

      if (scrollAmount >= maxScroll) {
        scrollDirection = -1;
      } else if (scrollAmount <= 0) {
        scrollDirection = 1;
      }

      logos.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const positionOf = (key: CardKey): -1 | 0 | 1 => {
    if (key === active) return 0;
    if (key === leftKey) return -1;
    return 1;
  };

  const cardBg = (gradient: boolean) =>
    gradient
      ? "bg-gradient-to-b from-[#775DD2] to-[#3D306C] border border-[#666060]"
      : "bg-global-14 border border-[#999090]";

  const isGradientMobile = (key: CardKey) => key === active;
  const isGradientDesktop = (key: CardKey) => key === active;

  return (
    <>
      {/* Buying Decision Section */}
      <section className="w-full mt-[54px] lg:mt-[108px] px-4 lg:px-[78px]">
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

              // Positioning logic for cards
              const translate =
                pos === -1 ? "left-0 -translate-x-[20%]" :
                  pos === 1 ? "right-0 translate-x-[20%]" :
                    "left-1/2 -translate-x-1/2";
              const scale = isActive ? "scale-100" : "scale-90";
              const z = isActive ? "z-30" : pos === -1 ? "z-20" : "z-10";
              const opacity = isActive ? "opacity-100" : "opacity-80";

              const title =
                key === "listing" ? "Listing Sites" : key === "canvas" ? "Canvas Homes" : "Traditional Brokers";
              const subtitle =
                key === "canvas"
                  ? "The modern home buying experience is"
                  : "The typical home buying experience is";
              const textColor = isGradientMobile(key) ? "text-global-20" : "text-global-2";
              const subColor = isGradientMobile(key) ? "text-global-19" : "text-global-12";
              const bullet = isGradientMobile(key) ? "/images/img_frame.svg" : "/images/img_alert_circle.svg";

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(key)}
                  aria-label={`Select ${title}`}
                  className={`absolute top-0 ${translate} ${scale} ${z} ${opacity} transition-all duration-300 w-[80%]`}
                >
                  <div className="flex flex-col items-center relative">
                    {/* top pill with icon - positioned at corner */}
                    <div className="absolute -top-16 right-4 flex flex-row justify-end items-end w-24 h-24 bg-global-16 rounded-full p-3 shadow-[0px_4px_1px_#888888ff] z-10">
                      <Image
                        src="/images/img_vector_447.png"
                        alt={title}
                        width={102}
                        height={126}
                        className="w-[40px] h-[50px]"
                      />
                    </div>

                    {/* card body */}
                    <div className={`${cardBg(isGradientMobile(key))} rounded-[10px] p-[20px] pt-[20px] shadow-lg w-full`}>
                      <div className="flex flex-col gap-[14px]">
                        <div className="flex flex-col gap-[6px]">
                          <h3 className={`text-[22px] font-medium leading-[1] ${textColor} font-['Poppins']`}>{title}</h3>
                          <p className={`text-[14px] leading-[1.2] ${subColor} font-['Poppins']`}>{subtitle}</p>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                          {features.map((f, i) => (
                            <div key={i} className="flex flex-row items-center">
                              <Image src={bullet} alt="Feature" width={20} height={20} className="w-[15px] h-[15px]" />
                              <span className={`text-[14px] font-medium leading-[1.5] ${textColor} font-['Poppins'] ml-2`}>
                                {f}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
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

          {/* Desktop: three-column layout with centered active card (>=769px) */}
          <div className="hidden md:flex md:flex-row items-center justify-between w-full md:gap-15">
            {order.map((key) => {
              const isActiveCard = key === active;
              const textColor = isGradientDesktop(key) ? "text-global-20" : "text-global-2";
              const subColor = isGradientDesktop(key) ? "text-global-19" : "text-global-12";
              const bullet = key == 'canvas' ? "/images/img_frame.svg" : "/images/img_alert_circle.svg";
              const scale = isActiveCard ? "scale-100" : "scale-95";
              const zIndex = isActiveCard ? "z-20" : "z-10";

              const title =
                key === "listing" ? "Listing Sites" : key === "canvas" ? "Canvas Homes" : "Traditional Brokers";
              const subtitle =
                key === "canvas"
                  ? "The modern home buying experience is"
                  : "The typical home buying experience is";

              return (
                <div
                  key={key}
                  className={`flex flex-col justify-start items-center max-w-[388px] transition-all duration-300 ${scale} ${zIndex}`}
                  onMouseEnter={() => setActive(key)}
                  onMouseLeave={() => { setActive("") }}
                >
                  {/* Pill on top right */}
                  <div className="relative w-full">
                    <div className="absolute top-0 w-full h-[200px] bg-global-16 rounded-b-full flex items-end justify-end">
                    </div>
                    <div className="absolute top-0 right-0 z-10">
                      <Image src="/images/img_vector_447.png" alt={title} width={103} height={127} className="w-[103px] h-[127px]" />
                    </div>

                    {/* Card body with 60px top margin */}
                    <div className={`${cardBg(isGradientDesktop(key))} rounded-[10px] p-[40px] pt-[60px] w-full cursor-pointer`}>
                      <div className="flex flex-col gap-[28px] w-full mb-[30px]">
                        <div className="flex flex-col gap-[6px] w-full">
                          <h3 className={`text-[40px] font-medium leading-[1.1] ${textColor} font-['Poppins'] break-words max-w-[200px]`}>
                            {title}
                          </h3>
                          <p className={`text-[18px] leading-[1.2] ${subColor} font-['Poppins']`}>
                            {subtitle}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[24px] w-full">
                          {features.map((feature, index) => (
                            <div key={index} className="flex flex-row items-center w-full">
                              <Image src={bullet} alt="Feature" width={20} height={20} className="w-[20px] h-[20px]" />
                              <span className={`text-[18px] font-normal leading-[1.5] ${textColor} font-['Poppins'] ml-2`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* /Desktop */}
        </div>
      </section>

      {/* Reviews Badge (unchanged) */}
      <section className="w-full mt-[56px] lg:mt-[112px] flex justify-center">
        <div className="flex flex-col gap-[9px] lg:gap-[18px] justify-start items-center w-auto">
          <div className="flex flex-row justify-center items-center w-auto bg-global-6 border border-[#bdb9b9] rounded-[18px] px-[3px] py-[3px]">
            <div className="flex flex-row gap-1 lg:gap-2 justify-center items-center w-auto px-1 py-1
                animate-glow">
              <span className="text-[14px] lg:text-[18px] font-medium leading-[1.5] text-left text-global-20 font-['Poppins'] w-auto">
                90+
              </span>
              <div className="flex flex-row justify-center items-center w-auto">
                <Image
                  src="/images/img_image_16.png"
                  alt="Reviews"
                  width={16}
                  height={16}
                  className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]"
                />
                <span className="text-[14px] lg:text-[18px] font-medium leading-[1.5] text-left text-global-20 font-['Poppins'] w-auto">
                  Reviews
                </span>
              </div>
              <div className="flex flex-row gap-[2px] justify-center items-center w-auto">
                <div className="w-[1px] lg:w-[2px] h-[11px] lg:h-[22px] bg-global-20"></div>
                <span className="text-[14px] lg:text-[18px] font-medium leading-[1.5] text-left text-global-20 font-['Poppins'] w-auto">
                  4.7 stars
                </span>
              </div>
            </div>

          </div>
          <p className="text-[18px] lg:text-[28px] font-normal leading-[1.5] text-left text-global-8 font-['Poppins'] w-auto">
            Curated Homes From Bengaluru&apos;s Top Developers
          </p>
        </div>
      </section>

      {/* Developer Logos - Auto scrolling like news ticker */}
      <section className="w-full mt-[6px] lg:mt-[12px] px-4 overflow-hidden">
        <div className="relative w-full">
          <div className="flex animate-marquee whitespace-nowrap gap-6 md:gap-12">
            <Image
              src="/images/img_godrej_1.png"
              alt="Godrej"
              width={208}
              height={202}
              className="w-[80px] h-[40px] lg:w-[208px] lg:h-[100px] object-contain"
            />
            <Image
              src="/images/img_image_8.png"
              alt="Developer 2"
              width={122}
              height={150}
              className="w-[48px] h-[40px] lg:w-[122px] lg:h-[100px] object-contain"
            />
            <Image
              src="/images/img_tata_housing_de.png"
              alt="Tata Housing"
              width={436}
              height={42}
              className="w-[174px] h-[40px] lg:w-[436px] lg:h-[100px] object-contain"
            />
            <Image
              src="/images/img_image_7.png"
              alt="Developer 4"
              width={106}
              height={46}
              className="w-[42px] h-[40px] lg:w-[106px] lg:h-[100px] object-contain"
            />
            <Image
              src="/images/img_godrej_2.png"
              alt="Godrej 2"
              width={228}
              height={202}
              className="w-[91px] h-[40px] lg:w-[228px] lg:h-[100px] object-contain"
            />
            {/* Repeat logos for seamless loop */}
            <Image
              src="/images/img_godrej_1.png"
              alt="Godrej"
              width={208}
              height={202}
              className="w-[80px] h-[40px] lg:w-[208px] lg:h-[100px] object-contain"
            />
            <Image
              src="/images/img_image_8.png"
              alt="Developer 2"
              width={122}
              height={150}
              className="w-[48px] h-[40px] lg:w-[122px] lg:h-[100px] object-contain"
            />
            {/* Add more repeats as needed */}
          </div>
        </div>
      </section>

    </>
  );
};

export default BuyingDecisionSection;

// Add this to global CSS to hide scrollbars
/*
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
*/
