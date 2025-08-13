'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface EndToEndSupportSectionProps {
  id?: string;
}

const EndToEndSupportSection: React.FC<EndToEndSupportSectionProps> = ({ id }) => {
  return (
    <>
      {/* End-to-End Support Section */}
      <section className="w-full mt-[75px] lg:mt-[150px] px-4 lg:px-[78px]" id={id}>
        <div className="w-full bg-gradient-to-b from-[#765dd2] to-[#3d306c] border border-[#999090] rounded-[10px] p-[24px] lg:p-[48px] lg:pr-0">
          <div className="flex flex-col lg:flex-row justify-center items-center w-auto">
            {/* Left Content */}
            <div className="w-full lg:w-[66%] flex flex-col gap-[28px] lg:gap-[56px] justify-start items-start mb-[12px] lg:mb-[24px]">
              <div className="flex flex-col gap-[24px] lg:gap-[48px] justify-start items-center w-[80%]">
                <div className="flex flex-col gap-[11px] lg:gap-[22px] justify-start items-center w-full">
                  <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] text-left text-global-20 font-['Poppins'] w-full">
                    End-to-End Support: With you at Every Step
                  </h2>
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[1.2] text-left text-global-14 font-['Poppins'] w-full">
                    We are your trusted partner for the entire home-buying journey.
                  </p>
                </div>

                {/* Support Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] lg:gap-[40px] w-full">
                  <div className="flex flex-row justify-start items-center w-full">
                    <div className="w-[36px] h-[36px] lg:w-[72px] lg:h-[72px] bg-global-8 border border-global-2 rounded-[6px] p-[8px] lg:p-[16px] flex items-center justify-center">
                      <Image
                        src="/images/img_frame_gray_900.svg"
                        alt="Discovery"
                        width={20}
                        height={20}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-[16px] lg:text-[24px] font-medium leading-[1.5] text-center text-global-20 font-['Poppins'] ml-[8px] lg:ml-[16px]">
                      Discovery
                    </span>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="w-[36px] h-[36px] lg:w-[72px] lg:h-[72px] bg-global-8 rounded-[6px] p-[8px] lg:p-[16px] flex items-center justify-center">
                      <Image
                        src="/images/img_frame_3351.svg"
                        alt="Documentation"
                        width={20}
                        height={20}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-[16px] lg:text-[24px] font-medium leading-[1.5] text-center text-global-20 font-['Poppins'] mr-[17px] lg:mr-[34px]">
                      Documentation
                    </span>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full">
                    <div className="w-[36px] h-[36px] lg:w-[72px] lg:h-[72px] bg-global-8 border border-global-2 rounded-[6px] p-[8px] lg:p-[16px] flex items-center justify-center">
                      <Image
                        src="/images/img_frame_gray_900.svg"
                        alt="Discovery"
                        width={20}
                        height={20}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-[16px] lg:text-[24px] font-medium leading-[1.5] text-center text-global-20 font-['Poppins'] ml-[8px] lg:ml-[16px]">
                      Discovery
                    </span>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="w-[36px] h-[36px] lg:w-[72px] lg:h-[72px] bg-global-8 rounded-[6px] p-[8px] lg:p-[16px] flex items-center justify-center">
                      <Image
                        src="/images/img_frame_3351.svg"
                        alt="Documentation"
                        width={20}
                        height={20}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-[16px] lg:text-[24px] font-medium leading-[1.5] text-center text-global-20 font-['Poppins'] mr-[17px] lg:mr-[34px]">
                      Documentation
                    </span>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                className="bg-global-15 hover:bg-gray-100 text-global-6 font-semibold rounded-[10px] px-[17px] lg:px-[34px] py-[7px] lg:py-[14px] border-2 border-[#aca3ba] w-auto"
              >
                Talk to an Expert Today
              </Button>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[30%] flex justify-center items-center mt-8 lg:mt-0">
              <Image
                src="/images/img_group_937.png"
                alt="Support Illustration"
                width={382}
                height={444}
                className="w-full h-auto max-w-[382px] max-h-[444px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EndToEndSupportSection;
