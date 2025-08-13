import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

// Types
interface Stat {
  id: string;
  count: string;
  label: string;
}

// Local data for stats
const stats: Stat[] = [
  { id: 'verified', count: '3500+', label: 'Verified Properties' },
  { id: 'homeowners', count: '500+', label: 'Happy Homeowners' },
  { id: 'experience', count: '15+', label: 'Years of Experience' }
];

// StatItem sub-component
const StatItem: React.FC<Stat> = ({ count, label }) => (
  <div className="flex flex-col items-start md:items-center">
    <span className="text-[20px] md:text-[24px] font-semibold text-global-4">
      {count.replace('+', '')}
      <span className="text-global-6">+</span>
    </span>
    <span className="text-[14px] md:text-[16px] text-global-6 whitespace-nowrap">{label}</span>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="w-full relative">
      <div className="flex flex-col md:flex-row justify-center md:justify-end w-full md:min-h-[650px] pt-15 md:pt-[18px] pl-4 md:px-0">
        {/* Left Content */}
        <div className="w-full md:w-[44%] flex flex-col gap-8 md:gap-[70px] justify-center items-center md:items-start">
          {/* Main Content */}
          <div className="flex flex-col gap-6 md:gap-[40px] w-full">
            <div className="flex flex-col gap-12 md:gap-10 w-full items-center md:items-start">
              {/* Headline & Subtitle */}
              <div className="flex flex-col gap-2.5 md:gap-[18px] w-full">
                <h1 className="text-[24px] md:text-[48px] font-semibold leading-[1.2] text-center md:text-left text-global-4 font-['Poppins'] w-full">
                  Bangalore&apos;s Most Trusted Home Platform
                </h1>
                <p className="text-[14px] md:text-[24px] font-medium leading-[1.2] text-center md:text-left text-global-5 font-['Poppins'] w-full">
                  Largest selection of verified listings with accurate prices and 0 fake listings.
                </p>
              </div>

              {/* Stats Row */}
              <div className="flex flex-row lg:flex-row items-center gap-2 w-full relative h-40 md:h-auto">
                <div className="flex flex-col md:flex-row gap-3.5 md:gap-7 items-start md:items-center md:justify-between w-fit lg:w-1/2 z-10">
                  {stats.map((stat) => (
                    <StatItem key={stat.id} {...stat} />
                  ))}
                </div>

                {/* Hut Image - Mobile only */}
                <div className="md:hidden absolute right-0 top-0 w-45 h-40 opacity-[50%]">
                  <img
                    src="/images/img_hut.png"
                    alt="Hut"
                    className="h-40 w-45"
                  />
                </div>
              </div>

            </div>

            {/* Expert Card - Desktop only */}
            <div className="hidden max-w-[592px] md:flex flex-row gap-6 w-full p-[18px] bg-global-9 border-2 border-[#ffecec] rounded-[4px]">
              <Image
                src="/images/img_ellipse_3.png"
                alt="Amit Daga"
                width={60}
                height={60}
                className="w-[60px] h-[60px] rounded-full"
              />
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex flex-col w-full">
                  <span className="text-[24px] font-medium leading-[1.1] text-global-6 font-['Poppins']">
                    Amit Daga
                  </span>
                  <span className="text-[18px] font-normal leading-[1.5] text-global-17 font-['Poppins']">
                    Senior Consultant
                  </span>
                </div>
                <p className="text-[20px] font-normal leading-[1.1] text-global-6 font-['Poppins'] w-full">
                  Expert in Bangalore real estate with 15+ years of experience.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center md:items-start justify-center md:justify-start w-full">
            <Button
              variant="primary"
              className="bg-global-4 hover:bg-global-6 text-global-20 font-semibold rounded-[10px] px-4 py-4 border-2 border-[#dbd7d7] w-auto"
            >
              Ready to Buy? Get in Touch
            </Button>
            <span className="text-[14px] md:text-[18px] font-semibold leading-[1.5] text-center md:text-left text-global-4 font-['Poppins'] underline cursor-pointer hover:text-global-6 transition-colors ml-0 md:ml-7 py-2">
              Our Process
            </span>
          </div>
        </div>

        {/* Right Image & Testimonial - Desktop only */}
        <div className="hidden md:flex w-[50%] justify-center items-end mt-0 pb-6">
          <div className="relative w-full h-[500px] flex items-end">
            {/* Main Image */}
            <div className="absolute inset-0 right-0 bg-[url('/images/img_hut.png')] bg-contain bg-no-repeat bg-bottom"></div>

            {/* Testimonial */}
            <div className="absolute top-[5%] right-[50%] w-[280px] bg-global-15 border border-[#bfb6df] rounded-[8px] p-5 shadow-lg">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row gap-4 w-full">
                  <Image
                    src="/images/img_group_102.png"
                    alt="Dhananjay Mishra"
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px]"
                  />
                  <div className="flex flex-col flex-1">
                    <span className="text-[16px] font-semibold leading-[1.5] text-global-2 font-['Poppins']">
                      Dhananjay Mishra
                    </span>
                    <div className="flex flex-col gap-1 w-full">
                      <span className="text-[12px] font-medium leading-[1.3] text-global-7 font-['Plus Jakarta Sans']">
                        Buyer
                      </span>
                      <span className="text-[12px] font-medium leading-[1.3] font-['Plus Jakarta Sans'] whitespace-nowrap">
                        Moved in with <span className="text-global-2">cavas-homes</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review */}
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-row gap-4 w-full">
                    <div className="w-8 h-8 bg-global-2 border border-[#bfb6df] rounded-full flex items-center justify-center">
                      <span className="text-[16px] font-semibold leading-[1.25] text-global-20 font-['Montserrat']">
                        "
                      </span>
                    </div>
                    <p className="text-[12px] font-normal leading-[1.6] text-left text-global-2 font-['Poppins'] flex-1 mt-2">
                      I loved how smooth the move was, and finally got the house we wanted.
                    </p>
                  </div>
                  <div className="w-full h-px bg-global-8"></div>

                  {/* Testimonial Stats */}
                  <div className="flex flex-row items-center w-full">
                    <div className="flex flex-col items-start w-1/2">
                      <span className="text-[20px] font-semibold leading-[1.55] text-global-4 font-['Poppins']">
                        ₹280000
                      </span>
                      <span className="text-[12px] font-medium leading-[1.3] text-global-9 font-['Poppins'] ml-1">
                        Saved up to
                      </span>
                    </div>
                    <div className="flex flex-col items-end w-1/2">
                      <span className="text-[20px] font-semibold leading-[1.55] text-global-2 font-['Poppins']">
                        -24 hrs
                      </span>
                      <span className="text-[12px] font-medium leading-[1.3] text-global-9 font-['Poppins']">
                        Process time
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;