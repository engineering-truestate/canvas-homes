import React from 'react';
import Image from "next/image";

const PropertyReviewsSection: React.FC = () => {
  return (
    <>
      {/* Reviews Badge */}
      <section className="w-full mt-[56px] lg:mt-[112px] flex justify-center">
        <div className="flex flex-col gap-[9px] lg:gap-[18px] justify-start items-center w-auto">
          <div className="flex flex-row justify-center items-center w-auto bg-global-6 border border-[#bdb9b9] rounded-[18px] px-[3px] py-[3px]">
            <div className="flex flex-row gap-1 lg:gap-2 justify-center items-center w-auto px-1 py-1 animate-glow">
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

      {/* Developer Logos - Auto scrolling */}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyReviewsSection;