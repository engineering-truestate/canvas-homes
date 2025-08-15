import React from 'react';
import Image from 'next/image';

const PropertyReviewsSection: React.FC = () => {
  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          flex-wrap: nowrap;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Reviews Badge */}
      <section className="w-full mt-[56px] lg:mt-10 flex justify-center">
        <div className="flex flex-col gap-[9px] lg:gap-[18px] justify-start items-center w-auto">
          <div className="flex flex-row justify-center items-center w-auto bg-global-6 border border-[#bdb9b9] rounded-[18px] px-[3px] py-[3px]">
            <div className="flex flex-row gap-1 lg:gap-2 justify-center items-center w-auto px-1 py-1 animate-glow">
              <span className="text-[14px] lg:text-[18px] font-medium text-global-20 font-['Poppins']">
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
                <span className="text-[14px] lg:text-[18px] font-medium text-global-20 font-['Poppins']">
                  Reviews
                </span>
              </div>
              <div className="flex flex-row gap-[2px] justify-center items-center w-auto">
                <div className="w-[1px] lg:w-[2px] h-[11px] lg:h-[22px] bg-global-20"></div>
                <span className="text-[14px] lg:text-[18px] font-medium text-global-20 font-['Poppins']">
                  | 4.7 stars
                </span>
              </div>
            </div>
          </div>
          <p className="text-[18px] lg:text-[28px] font-normal text-global-8 font-['Poppins']">
            Curated Homes From Bengaluru&apos;s Top Developers
          </p>
        </div>
      </section>

      {/* Developer Logos - Auto scrolling */}
      <div className="w-full mt-[6px] lg:mt-10 px-4 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap gap-6 md:gap-12">
            {[
              '/images/img_godrej_1.png',
              '/images/img_image_8.png',
              '/images/img_tata_housing_de.png',
              '/images/img_image_7.png',
              '/images/img_godrej_2.png',
              '/images/img_godrej_1.png',
              '/images/img_image_8.png',
              '/images/img_tata_housing_de.png',
            ].map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Developer ${idx}`}
                width={437} 
                height={437} 
                className="inline-block w-[200px] h-[80px] lg:w-[437px] lg:h-[150px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyReviewsSection;
