import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { TestimonialCard, TestimonialData } from '@/components/TestimonialCard';

// Types
interface Stat {
  id: string;
  count: string;
  label: string;
}

// Local data for stats
const stats: Stat[] = [
  { id: 'verified', count: '3500', label: 'Verified Properties' },
  { id: 'homeowners', count: '500', label: 'Happy Homeowners' },
  { id: 'experience', count: '15', label: 'Years of Experience' },
];

// Testimonial data
const testimonialData: TestimonialData = {
  name: 'Dhananjay Mishra',
  role: 'Buyer',
  company: 'cavas-homes',
  avatar: '/images/img_group_102.png',
  review: 'I loved how smooth the move was, and finally got the house we wanted.',
  savedAmount: '₹280000',
  processTime: '-24 hrs',
};

// StatItem sub-component
const StatItem: React.FC<Stat> = ({ count, label }) => (
  <div className="flex flex-col items-start md:items-center">
    <span className="text-[24px] md:text-[24px] font-semibold text-global-4">
      {count.replace('+', '')}
      <span className="text-global-6" style={{ color: '#7065F0' }}>
        +
      </span>
    </span>
    <span className="text-[14px] md:text-[16px] font-medium text-global-6 whitespace-nowrap">
      {label}
    </span>
  </div>
);

const Hero: React.FC = () => {
  const [isTestimonialExpanded, setIsTestimonialExpanded] = useState(false);

  // Handle scroll to reset testimonial position
  useEffect(() => {
    const handleScroll = () => {
      if (isTestimonialExpanded) {
        setIsTestimonialExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTestimonialExpanded]);

  const handleTestimonialClick = () => {
    setIsTestimonialExpanded(!isTestimonialExpanded);
  };

  // Handle click outside to close testimonial
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isTestimonialExpanded && !target.closest('[data-testimonial]')) {
        setIsTestimonialExpanded(false);
      }
    };

    if (isTestimonialExpanded) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isTestimonialExpanded]);

  return (
    <section className="w-full relative overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-center md:justify-end w-full md:min-h-[650px] pt-15 md:pt-[18px] pl-4 md:px-0 mt-16 md:mt-0">
        {/* Left Content */}
        <div className="w-full md:w-[44%] flex flex-col gap-8 md:gap-[70px] justify-center items-center md:items-start">
          {/* Main Content */}
          <div className="flex flex-col gap-6 md:gap-[40px] w-full">
            <div className="flex flex-col gap-12 md:gap-10 w-full items-center md:items-start">
              {/* Headline & Subtitle */}
              <div className="flex flex-col gap-2.5 md:gap-[18px] w-full">
                <h1 className="text-[28px] md:text-[48px] font-semibold leading-[1.2] text-center md:text-left text-global-4 font-['Poppins'] w-full">
                  Bangalore&apos;s Most Trusted Home Platform
                </h1>
                <p className="text-[18px] md:text-[24px] font-medium leading-[1.2] text-center md:text-left text-global-5 font-['Poppins'] w-full">
                  Largest selection of verified listings with accurate prices and 0 fake listings.
                </p>
              </div>

              {/* Stats Row with Mobile Testimonial */}
              <div className="relative w-full">
                {/* Stats Container */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-7 items-start md:items-center md:justify-between w-fit lg:w-1/2 z-10 relative">
                  {stats.map((stat) => (
                    <StatItem key={stat.id} {...stat} />
                  ))}
                </div>

                {/* Mobile Testimonial Card - positioned relative to stats */}
                {/* <div className={`md:hidden absolute transition-all duration-500 ease-in-out z-30 ${
                  isTestimonialExpanded 
                    ? 'top-[-120px] left-1/2 transform -translate-x-1/2' 
                    : 'top-0 left-full ml-4'
                }`}>
                  <TestimonialCard
                    data={testimonialData} 
                    className="w-[280px] transition-all duration-500 cursor-pointer"
                    onClick={handleTestimonialClick}
                    data-testimonial="true"
                  />
                </div> */}

                {/* Overlay for mobile when testimonial is expanded */}
                {isTestimonialExpanded && (
                  <div className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-20" />
                )}
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
          </div>
        </div>

        {/* Right Image & Testimonial - Desktop only */}
        <div className="hidden md:flex relative w-[50%] h-[500px] items-end mt-0 pb-6">
          {/* Main Image */}
          <div className="absolute inset-0 right-0 bg-[url('/images/img_hut.svg')] bg-contain bg-no-repeat bg-center" />

          {/* Testimonial - Desktop */}
          <TestimonialCard data={testimonialData} className="absolute top-[5%] left-10 w-[280px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
