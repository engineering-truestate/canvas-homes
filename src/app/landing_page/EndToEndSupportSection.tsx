'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface EndToEndSupportSectionProps {
  id?: string;
}

const EndToEndSupportSection: React.FC<EndToEndSupportSectionProps> = ({ id }) => {
  return (
    <section className="w-full mt-[75px] lg:mt-[150px] px-4 lg:px-[78px]" id={id}>
      <div className="relative w-full bg-white border border-[#E0E0E0] rounded-[10px] p-[24px] lg:bg-gradient-to-b lg:from-[#765dd2] lg:to-[#3d306c] lg:border-[#999090] lg:rounded-[10px] lg:p-[48px] overflow-hidden">

        {/* ===== MOBILE VIEW ===== */}
        <div className="flex flex-col items-center text-center gap-6 lg:hidden">
          {/* Heading */}
          <div>
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#2E1F50] font-['Poppins'] leading-[1.3]">
              End-to-End Support:<br /> With you at Every Step
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#6B6B6B] mt-2 font-medium">
              We are your trusted partner for the entire home-buying journey.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 w-full">
            <div className="flex flex-col items-center">
              <div className="w-[48px] h-[48px] bg-[#2E1F50] rounded-[6px] flex items-center justify-center">
                <Image src="/images/img_frame_gray_900.svg" alt="Discovery" width={24} height={24} />
              </div>
              <span className="mt-2 text-[14px] font-medium text-[#2E1F50]">Discovery</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[48px] h-[48px] bg-[#2E1F50] rounded-[6px] flex items-center justify-center">
                <Image src="/images/img_frame_3351.svg" alt="Site Visits" width={24} height={24} />
              </div>
              <span className="mt-2 text-[14px] font-medium text-[#2E1F50]">Handover</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[48px] h-[48px] bg-[#2E1F50] rounded-[6px] flex items-center justify-center">
                <Image src="/icons/home-loans.svg" alt="Negotiations" width={24} height={24} />
              </div>
              <span className="mt-2 text-[14px] font-medium text-[#2E1F50]">Negotiations</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[48px] h-[48px] bg-[#2E1F50] rounded-[6px] flex items-center justify-center">
                <Image src="/icons/due-deligence.svg" alt="Documentation" width={24} height={24} />
              </div>
              <span className="mt-2 text-[14px] font-medium text-[#2E1F50]">Documentation</span>
            </div>
          </div>

          {/* Button */}
          <Button
            variant="primary"
            className="bg-transparent border border-[#2E1F50] text-[#2E1F50] hover:bg-[#2E1F50] hover:text-white font-semibold rounded-[6px] px-[20px] py-[8px]"
          >
            Get Started
          </Button>

          {/* Testimonial */}
          <p className="text-[12px] text-[#6B6B6B] leading-[1.4] max-w-[280px]">
            The entire process was incredibly smooth, and we finally got the home we wanted.
            <br /> <span className="text-[11px]">– Aryan Kapoor</span>
          </p>

          {/* Decorative bottom-right image */}
          <div className="absolute bottom-0 right-0">
            <Image src="/images/mobile-grid-decor.svg" alt="Decorative Grid" width={120} height={120} />
          </div>
        </div>

        {/* ===== DESKTOP VIEW ===== */}
        <div className="hidden lg:flex flex-row justify-between items-center w-auto">
          {/* Left Content */}
          <div className="w-[66%] flex flex-col gap-[28px] lg:gap-[56px] z-10 relative">
            <div className="flex flex-col gap-[24px] lg:gap-[48px] w-[80%]">
              <div className="flex flex-col gap-[11px] lg:gap-[22px] w-full">
                <h2 className="text-[48px] font-semibold leading-[1.2] text-global-20 font-['Poppins']">
                  End-to-End Support:<br/> With you at Every Step
                </h2>
                <p className="text-[24px] font-medium leading-[1.2] text-global-14 font-['Poppins']">
                  Where guidance meets trust, and trust meets results.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-[40px]">
                {/* same desktop grid items */}
                <div className="flex items-center">
                  <div className="w-[72px] h-[72px] bg-global-8 border border-global-2 rounded-[6px] flex items-center justify-center p-[16px]">
                    <Image src="/images/img_frame_gray_900.svg" alt="Discovery" width={36} height={36} />
                  </div>
                  <span className="ml-[16px] text-[24px] font-medium text-global-20">Discovery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-[72px] h-[72px] bg-global-8 rounded-[6px] flex items-center justify-center p-[16px]">
                    <Image src="/images/img_frame_3351.svg" alt="Site Visits" width={36} height={36} />
                  </div>
                  <span className="ml-[16px] text-[24px] font-medium text-global-20">Handover</span>
                </div>
                <div className="flex items-center">
                  <div className="w-[72px] h-[72px] bg-global-8 border border-global-2 rounded-[6px] flex items-center justify-center p-[16px]">
                    <Image src="/icons/home-loans.svg" alt="Negotiations" width={36} height={36} />
                  </div>
                  <span className="ml-[16px] text-[24px] font-medium text-global-20">Negotiations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-[72px] h-[72px] bg-global-8 rounded-[6px] flex items-center justify-center p-[16px]">
                    <Image src="/icons/due-deligence.svg" alt="Documentation" width={36} height={36} />
                  </div>
                  <span className="ml-[16px] text-[24px] font-medium text-global-20">Documentation</span>
                </div>
              </div>
            </div>
            <Button
              variant="primary"
              className="bg-global-15 hover:bg-gray-100 text-global-6 font-semibold rounded-[10px] px-[34px] py-[14px] border-2 border-[#aca3ba] w-auto mt-[16px]"
            >
              Talk to an Expert Today
            </Button>
          </div>
          {/* Right Absolute Image */}
          <div className="absolute right-[40px] top-1/2 -translate-y-1/2">
            <Image src="/images/img_group_937.png" alt="Support Illustration" width={382} height={700} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndToEndSupportSection;
