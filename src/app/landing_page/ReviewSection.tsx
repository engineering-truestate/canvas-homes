import { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import RatingBar from '@/components/ui/RatingBar';

interface ReviewsSectionProps {
  id: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Review data
  const reviewsData = [
    {
      image: '/images/img_group_103.png',
      rating: 5,
      review:
        '"Canvas homes made my journey so smooth, personalised, professional and truly reliable".',
      name: 'Dhanajay Mishra',
      position: 'Real Estate Investor',
    },
    {
      image: '/images/img_group_103.png',
      rating: 5,
      review:
        '"The team at Canvas Homes guided me through every step of the home buying process with expertise and care."',
      name: 'Priya Singh',
      position: 'First-time Homebuyer',
    },
    {
      image: '/images/img_group_103.png',
      rating: 5,
      review:
        '"Their market knowledge and negotiation skills helped me secure my dream home at a great price."',
      name: 'Akash Patel',
      position: 'Property Developer',
    },
    {
      image: '/images/img_group_103.png',
      rating: 4,
      review:
        '"Responsive, transparent, and genuinely interested in finding the right home for my family."',
      name: 'Sunita Reddy',
      position: 'Business Owner',
    },
    {
      image: '/images/img_group_103.png',
      rating: 5,
      review:
        '"I\'ve worked with several agencies, but Canvas Homes truly understands the Bengaluru market."',
      name: 'Rahul Sharma',
      position: 'Corporate Executive',
    },
  ];

  // Custom navigation
  const navigateToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <>
      {/* Reviews Section Header */}
      <section className="w-full mt-[82px] lg:mt-[164px] px-[150px] lg:px-[300px]">
        <div className="flex flex-col gap-[2px] lg:gap-[4px] justify-start items-center w-full">
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] text-center text-global-4 font-['Poppins'] w-full">
            Reviews from Real Home Buyers who Found Their Perfect Place
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[1.5] text-center text-global-8 font-['Poppins'] w-full">
            Real stories from happy customers who found their dream home with us sharing their
            journey
          </p>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="w-full mt-[24px] lg:mt-[48px] px-4">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={14}
          centeredSlides
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.review-pagination' }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="flex items-center"
        >
          {reviewsData.map((review, index) => {
            const isActive = activeIndex === index;

            return (
              <SwiperSlide key={index} className="flex justify-center py-6">
                <div
                  className={`flex flex-row justify-start items-center w-[268px] lg:w-[500px] lg:h-[449px] rounded-[8px] p-[18px] bg-gray-200 lg:py-[36px] lg:py-[24px] mt-[23px] lg:mt-[46px] transition-all duration-300 ${
                    isActive ? 'scale-110 shadow-lg z-10' : 'scale-60 opacity-80 shadow-md'
                  }`}
                >
                  <div className="flex flex-col gap-[20px] lg:gap-[40px] justify-start items-start w-full">
                    <div className="flex flex-col gap-[9px] lg:gap-[18px] justify-start items-center w-full">
                      <div className="flex flex-col gap-[14px] lg:gap-[28px] justify-start items-start w-full">
                        <Image
                          src={review.image}
                          alt="Reviewer"
                          width={48}
                          height={48}
                          className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
                        />
                        <div className="flex flex-row justify-start items-center w-full">
                          <RatingBar rating={review.rating} size="sm" />
                        </div>
                      </div>
                      <p className="text-[16px] lg:text-[24px] font-medium leading-[1.5] text-left text-global-8 font-['Poppins'] w-full">
                        {review.review}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[2px] justify-start items-center w-auto">
                      <span className="text-[14px] lg:text-[20px] font-semibold leading-[1.5] text-left text-global-4 font-['Poppins'] w-auto">
                        {review.name}
                      </span>
                      <span className="text-[14px] lg:text-[20px] font-normal leading-[1.5] text-left text-global-8 font-['Poppins'] w-auto">
                        {review.position}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-8 bg-global-6' : 'w-3 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="w-full mt-[73px] lg:mt-[146px] px-[40px] lg:px-[80px]">
        <div className="w-full bg-gradient-to-b from-[#ffe1ff] to-[#140648] rounded-[12px] p-[14px] lg:p-[28px] shadow-[0px_4px_4px_#0000003f]">
          <div className="flex flex-col lg:flex-row justify-start items-start w-full">
            <div className="w-full lg:w-[70%] flex flex-col gap-[30px] lg:gap-[60px] justify-start items-start mt-[14px] lg:mt-[28px]">
              <div className="flex flex-col gap-[3px] lg:gap-[6px] justify-start items-start w-full">
                <div className="flex flex-col gap-[4px] lg:gap-[8px] justify-start items-start w-full">
                  <button className="bg-global-6 text-global-20 font-medium rounded-[18px] px-4 py-1.5 border border-[#bdb9b9] w-auto">
                    Be Updated with Real Estate
                  </button>
                  <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] text-left text-global-20 font-['Poppins'] w-auto">
                    Join our WhatsApp{'\n'}Community
                  </h2>
                </div>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[1.2] text-left text-global-20 font-['Poppins'] w-[94%]">
                  Daily market updates, expert answers, project alerts, and the guidance you need to
                  buy confidently in Bengaluru.
                </p>
              </div>
              <button className="bg-global-6 hover:bg-global-4 text-global-20 font-medium rounded-[10px] px-4 py-4 border-2 border-[#aca3ba] w-auto flex items-center gap-2">
                <Image
                  src="/images/img_whatsapp_128.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
                />
                Join 1000+ Prospective Homebuyers
              </button>
            </div>
            <div className="w-full lg:w-[26%] flex justify-end items-end mt-8 lg:mt-0 pr-[14px] lg:pr-[28px]">
              <Image
                src="/images/img_iphone_15_pro_front.png"
                alt="iPhone"
                width={288}
                height={310}
                className="w-full h-auto max-w-[288px] max-h-[310px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-[82px] lg:mt-[164px] px-4 lg:px-[34px]" id={id}>
        <div className="flex flex-col justify-start items-center w-full">
          <div className="flex flex-col lg:flex-row justify-start items-center w-full">
            {/* Left Column - Features */}
            <div className="w-full lg:w-[50%] flex flex-col gap-[14px] lg:gap-[28px] justify-start items-start">
              <div className="flex flex-col gap-[24px] lg:gap-[48px] justify-start items-start w-full">
                {/* Heading */}
                <div className="flex flex-col gap-[9px] lg:gap-[18px] justify-start items-start w-full">
                  <div className="flex flex-col gap-[4px] lg:gap-[8px] justify-start items-start w-full">
                    <button className="bg-global-6 text-global-20 font-medium rounded-[18px] px-4 py-1.5 border border-[#bdb9b9] w-auto">
                      Selling Made Simple
                    </button>
                    <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] text-left text-global-4 font-['Poppins'] w-auto">
                      Want to Sell{'\n'}Your Home?
                    </h2>
                  </div>
                  <p className="text-[18px] lg:text-[28px] font-medium leading-[1.5] text-left text-global-6 font-['Poppins'] w-[80%]">
                    Expert support, clear pricing, and personalised help to sell your home.
                  </p>
                </div>

                {/* Selling Features */}
                <div className="flex flex-col gap-[9px] lg:gap-[18px] justify-start items-center w-auto">
                  {[
                    { icon: '/images/img_trending_up.svg', title: 'Market Analysis' },
                    { icon: '/images/img_users.svg', title: 'Buyer Network' },
                    { icon: '/images/img_calendar.svg', title: 'Fast Turnaround' },
                    { icon: '/images/img_dollar_sign.svg', title: 'Pricing Strategy' },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-row gap-[9px] lg:gap-[18px] justify-center items-center w-auto"
                    >
                      <div className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] bg-global-2 rounded-full p-[8px] lg:p-[16px] flex items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={20}
                          height={20}
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-[16px] lg:text-[24px] font-medium leading-[1.5] text-left text-global-2 font-['Poppins'] w-auto">
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-global-6 hover:bg-global-4 text-global-20 font-semibold rounded-[10px] px-[17px] lg:px-[34px] py-[7px] lg:py-[14px] border-2 border-[#aca3ba] w-auto">
                Talk to an Expert Today
              </button>
            </div>

            {/* Right Column - Stats */}
            <div className="w-full lg:w-[50%] flex justify-center items-center mt-8 lg:mt-0">
              <div className="flex flex-col gap-[24px] lg:gap-[48px] justify-start items-start w-full bg-gradient-to-b from-[#433878] to-[#8463cd] rounded-[10px] p-[14px] lg:p-[28px] mt-[5px] lg:mt-[10px]">
                <div className="flex flex-col gap-[20px] lg:gap-[40px] justify-start items-end w-[88%]">
                  <h3 className="text-[20px] lg:text-[40px] font-medium leading-[1] text-left text-global-20 font-['Poppins'] w-full">
                    Contact with High{'\n'}Intent Buyers
                  </h3>
                  <div className="flex flex-row justify-center items-center w-auto bg-[#d9d9d926] border border-gray-400 rounded-[2px] p-[24px] lg:p-[48px] shadow-[0px_4px_8px_#888888ff]">
                    <Image
                      src="/images/img_group_935.svg"
                      alt="Contact Stats"
                      width={382}
                      height={316}
                      className="w-full h-auto max-w-[191px] max-h-[158px] lg:max-w-[382px] lg:max-h-[316px] object-contain"
                    />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex flex-row gap-[11px] lg:gap-[22px] justify-start items-center w-full">
                  <div className="flex flex-col justify-center items-center w-full">
                    <span className="text-[20px] lg:text-[32px] font-medium leading-[1] text-center bg-gradient-to-b from-[#f9f9ff] to-[#959599] bg-clip-text text-transparent font-['Poppins'] w-full">
                      95%
                    </span>
                    <span className="text-[16px] lg:text-[24px] font-normal leading-[1.5] text-left text-global-20 font-['Poppins'] w-auto">
                      Success Rate
                    </span>
                  </div>
                  <div className="flex flex-col justify-start items-center w-full">
                    <span className="text-[20px] lg:text-[32px] font-medium leading-[1] text-center bg-gradient-to-b from-[#ffffff] to-[#999999] bg-clip-text text-transparent font-['Poppins'] w-full">
                      30
                    </span>
                    <span className="text-[16px] lg:text-[24px] font-normal leading-[1.5] text-left text-global-20 font-['Poppins'] w-auto">
                      Daily Average
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center w-[30%]">
                    <span className="text-[20px] lg:text-[32px] font-medium leading-[1] text-center bg-gradient-to-b from-[#ffffff] to-[#999999] bg-clip-text text-transparent font-['Poppins'] w-full">
                      500+
                    </span>
                    <span className="text-[16px] lg:text-[24px] font-normal leading-[1.5] text-left text-global-20 font-['Poppins'] w-auto">
                      Homes Sold
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
