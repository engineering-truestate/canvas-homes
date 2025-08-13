'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const PropertyVerificationSection: React.FC = () => {
  const steps = [
    {
      title: 'Project Overview',
      description: 'Review project details and specifications',
      icon: '/images/img_frame_3373.svg',
    },
    {
      title: 'Legal & Documentation',
      description: 'Verify legal compliance & documentation',
      icon: '/images/img_frame_3373_white_a700.svg',
    },
    {
      title: 'Amenities & Features',
      description: 'Assess available amenities and features',
      icon: '/images/img_frame_3373_white_a700_48x48.svg',
    },
    {
      title: 'Cost & Financials',
      description: 'Analyze pricing and financial aspects',
      icon: '/images/img_frame_3373_blue_gray_800_01.svg',
    },
  ];

  return (
    <section className="w-full mt-[155px] lg:mt-[310px] px-4 lg:px-[78px]">
      <div className="flex flex-col lg:flex-row justify-start items-center w-full">
        {/* Left Column */}
        <div className="w-full lg:w-[50%] flex flex-col gap-[81px] lg:gap-[162px] justify-start items-start">
          <div className="flex flex-col gap-[4px] lg:gap-[8px] justify-start items-start w-full pr-[10px] lg:pr-[20px]">
            <Button
              variant="primary"
              className="bg-global-6 text-global-20 font-medium rounded-[18px] px-4 py-1.5 border border-[#bdb9b9] w-auto"
            >
              Verification Simplified
            </Button>
            <div className="flex flex-col gap-[9px] lg:gap-[18px] justify-start items-start w-full">
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] text-left text-global-4 font-['Poppins'] w-[80%]">
                Property Verification Dashboard
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[1.2] text-left text-global-8 font-['Poppins'] w-full">
                Ready to explore? Book a visit to see the property in person and make sure it&apos;s
                the right fit
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            className="bg-global-6 hover:bg-global-4 text-global-20 font-semibold rounded-[10px] px-[17px] lg:px-[34px] py-[7px] lg:py-[14px] border-2 border-[#aca3ba] w-auto"
          >
            Talk to an Expert Today
          </Button>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[42%] flex justify-center items-center mt-8 lg:mt-0">
          <div className="flex flex-row justify-center items-center w-full">
            {/* Step Indicators */}
            <div className="flex flex-col gap-[22px] lg:gap-[44px] justify-start items-end w-[12%] px-[10px] lg:px-[20px] ml-[10px] lg:ml-[20px]">
              {steps.map((_, index) => (
                <React.Fragment key={index}>
                  <div className="w-[16px] h-[16px] lg:w-[32px] lg:h-[32px] bg-global-4 border-2 border-global-4 rounded-[16px] p-[5px] lg:p-[10px] flex items-center justify-center">
                    <Image
                      src="/images/img_frame_3383.svg"
                      alt="Step"
                      width={12}
                      height={12}
                      className="w-full h-full"
                    />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-[1px] h-[36px] lg:h-[72px] bg-global-4"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Step Content */}
            <div className="flex flex-col gap-[16px] lg:gap-[32px] justify-start items-start w-full">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-start items-center w-full bg-global-10 border-0 border-global-6 rounded-[2px] p-[6px] lg:p-[12px]"
                >
                  <div className="flex flex-row justify-center items-center w-full">
                    <div className="flex flex-row gap-[4px] lg:gap-[8px] justify-center items-start w-full">
                      <div className="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px] bg-global-6 rounded-[2px] p-[6px] lg:p-[12px] flex items-center justify-center">
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={24}
                          height={24}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start flex-1">
                        <span className="text-[16px] lg:text-[24px] font-semibold leading-[1.5] text-left text-global-6 font-['Poppins'] w-auto">
                          {step.title}
                        </span>
                        <span className="text-[12px] lg:text-[18px] font-normal leading-[1.5] text-center text-global-6 font-['Poppins'] w-auto">
                          {step.description}
                        </span>
                      </div>
                    </div>
                    <Image
                      src="/images/img_vector_443.svg"
                      alt="Arrow"
                      width={6}
                      height={12}
                      className="w-[3px] h-[6px] lg:w-[6px] lg:h-[12px] rounded-[1px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyVerificationSection;
