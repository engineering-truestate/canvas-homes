import { useState } from 'react';
import Image from 'next/image';
import Slider from '@/components/ui/Slider';
import Button from '@/components/ui/Button';

interface SellSectionProps {
  id?: string;
}

const SellSection: React.FC<SellSectionProps> = ({ id }) => {
  return (
    <>
      {/* Home Buying Journey Slider */}
      <section className="w-full mt-[90px] lg:mt-[180px] px-4 lg:px-[72px]" id={id}>
        <Slider className="w-full" />
        {/* Slider Indicators */}
        <div className="flex flex-col gap-[1px] lg:gap-[2px] justify-start items-center w-[42%] mx-auto mt-[-8px] lg:mt-[-16px]">
          <div className="flex flex-row gap-[11px] lg:gap-[22px] justify-center items-start w-full">
            <div className="w-[25px] lg:w-[51px] h-[8px] lg:h-[17px] bg-gradient-to-b from-[#6c63ff] to-[#342e8a] mt-[8px] lg:mt-[16px]"></div>
            <h3 className="text-[20px] lg:text-[40px] font-medium leading-[1.5] text-center text-global-4 font-['Poppins'] w-auto">
              Guided Property Visits
            </h3>
            <div className="w-[25px] lg:w-[51px] h-[8px] lg:h-[17px] bg-gradient-to-b from-[#6c63ff] to-[#342e8a] mt-[8px] lg:mt-[16px]"></div>
          </div>
          <div className="flex flex-row gap-[2px] justify-center items-center w-auto">
            <div className="w-[6px] h-[6px] lg:w-[12px] lg:h-[12px] bg-global-6 rounded-[6px]"></div>
            <div className="w-[6px] h-[6px] lg:w-[12px] lg:h-[12px] bg-global-7 rounded-[6px]"></div>
            <div className="w-[6px] h-[6px] lg:w-[12px] lg:h-[12px] bg-global-7 rounded-[6px]"></div>
            <div className="w-[6px] h-[6px] lg:w-[12px] lg:h-[12px] bg-global-7 rounded-[6px]"></div>
            <div className="w-[6px] h-[6px] lg:w-[12px] lg:h-[12px] bg-global-7 rounded-[6px]"></div>
          </div>
        </div>
      </section>

      {/* Loan Section */}
      <section className="w-full mt-[48px] lg:mt-[96px] px-[65px] lg:px-[130px]">
        <div className="w-full bg-global-5 rounded-[12px] p-[9px] lg:p-[18px] shadow-[0px_4px_4px_#0000003f]">
          <div className="flex flex-col lg:flex-row justify-start items-end w-full">
            <div className="w-full lg:w-[66%] flex flex-col gap-[24px] lg:gap-[48px] justify-start items-start mt-[14px] lg:mt-[28px] ml-[3px] lg:ml-[6px]">
              <div className="flex flex-col gap-[3px] lg:gap-[6px] justify-start items-start w-full">
                <div className="flex flex-col gap-[4px] lg:gap-[8px] justify-start items-start w-full">
                  <Button
                    variant="primary"
                    className="bg-global-6 text-global-20 font-medium px-4 py-1 border border-[#bdb9b9] w-auto rounded-full"
                  >
                    Loan Made Easy
                  </Button>
                  <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.2] text-left text-global-20 font-['Poppins'] w-auto">
                    Found Your Dream Home?<br/>Secure it With the Best Loan.
                  </h2>
                </div>
              </div>
              {/* Testimonial */}
              <div className="flex flex-row justify-center items-start w-[90%] bg-gradient-to-b from-[#8479b3] to-[#5d509a] rounded-[6px] p-[12px] lg:p-[24px] mb-[6px] lg:mb-[12px]">
                <div className="flex flex-col gap-[14px] lg:gap-[28px] justify-start items-center w-full">
                  <div className="flex flex-row gap-[9px] lg:gap-[18px] justify-start items-start w-full">
                    <Image
                      src="/images/img_ellipse_5.png"
                      alt="Aditi Kapoor"
                      width={60}
                      height={60}
                      className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full"
                    />
                    <div className="flex flex-col gap-[4px] lg:gap-[8px] justify-start items-start flex-1">
                      <span className="text-[16px] lg:text-[24px] font-semibold leading-[1.5] text-left text-global-15 font-['Poppins'] w-auto">
                        ADITI KAPOOR
                      </span>
                      <p className="text-[12px] lg:text-[18px] font-normal leading-[1.3] text-left text-global-20 font-['Poppins'] w-[94%]">
                        The entire process was incredibly smooth, and we finally secured the home we
                        wanted.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center w-full px-[63px] lg:px-[126px]">
                    <Button
                      variant="primary"
                      className="bg-global-4 hover:bg-global-6 text-global-20 font-medium rounded-[10px] px-4 py-4 border border-[#dbd7d7] w-full"
                    >
                      Ready to Buy? Get in Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[34%] flex justify-end items-end mt-8 lg:mt-0">
              <Image
                src="/images/img_undraw_fast_loading_ae60.svg"
                alt="Fast Loading"
                width={390}
                height={452}
                className="w-full h-auto max-w-[390px] max-h-[452px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellSection;
