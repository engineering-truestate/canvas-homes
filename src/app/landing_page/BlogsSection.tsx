import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface BlogSectionProps {
  id?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ id }) => {
  const blogData = [
    {
      image: '/images/img_image_3.png',
      title: "A Homebuyer's Guide",
      description: 'Why Bengaluru Homebuyers Need a Reality Check in 2025',
      titleColor: 'text-global-20',
      descColor: 'text-global-13',
    },
    {
      image: '/images/img_gemini_generate.png',
      title: "A Homebuyer's Guide",
      description: 'Why Bengaluru Homebuyers Need a Reality Check in 2025',
      titleColor: 'text-global-20',
      descColor: 'text-global-13',
    },
    {
      image: '/images/img_image_3.png',
      title: "A Homebuyer's Guide",
      description: 'Why Bengaluru Homebuyers Need a Reality Check in 2025',
      titleColor: 'text-global-20',
      descColor: 'text-global-13',
    },
    {
      image: '/images/img_gemini_generate.png',
      title: "A Homebuyer's Guide",
      description: 'The Future of Real Estate in Tech City',
      titleColor: 'text-global-20',
      descColor: 'text-global-13',
    },
    {
      image: '/images/img_image_3.png',
      title: "A Homebuyer's Guide",
      description: 'Top Neighborhoods for First-Time Buyers',
      titleColor: 'text-global-20',
      descColor: 'text-global-13',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef<SwiperRef>(null);

  // Custom navigation
  const navigateToSlide = (index: any) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <>
      {/* Blog Section Heading */}
      <section className="w-full mt-[122px] lg:mt-[244px] px-[89px] lg:px-[178px]" id={id}>
        <div className="flex flex-col gap-[9px] lg:gap-[18px] items-center">
          <button className="bg-global-6 text-global-20 font-medium rounded-[18px] px-4 py-1.5 border border-[#bdb9b9]">
            Blogs
          </button>
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] text-center text-global-4 font-['Poppins']">
            Everything You Need to Know Before You Buy Your Dream Home
          </h2>
        </div>
      </section>

      {/* Carousel */}
      <section className="w-full mt-[30px] lg:mt-[60px] px-[38px] lg:px-[76px]">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="flex items-center"
        >
          {blogData.map((blog, index) => {
            const isActive = activeIndex === index;

            // Determine the card's background color
            const cardBgColor = isActive
              ? 'bg-gradient-to-b from-[#403170] to-[#534092]'
              : 'bg-global-15';

            // Determine text colors based on active state
            const titleColor = isActive ? blog.titleColor : 'text-global-2';
            const descColor = isActive ? blog.descColor : 'text-global-11';

            return (
              <SwiperSlide key={index} className="flex justify-center py-6">
                <div
                  className={`flex flex-col justify-start items-center w-full max-w-[300px] lg:max-w-[402px] ${cardBgColor} border border-global-1 rounded-[10px] p-[9px] lg:p-[18px] transition-all duration-500 shadow-md ${
                    isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'
                  }`}
                  style={{ height: '550px' }} // Fixed height for all cards
                >
                  <div className="flex flex-col gap-[12px] lg:gap-[24px] justify-start items-start w-full h-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={366}
                      height={366}
                      className="w-full h-[183px] lg:h-[366px] object-cover rounded-[2px]"
                    />
                    <div className="flex flex-col gap-[6px] lg:gap-[12px] justify-start items-center w-[84%]">
                      <span
                        className={`text-[18px] lg:text-[28px] font-medium leading-[1.1] text-left ${titleColor} font-['Poppins'] w-full`}
                      >
                        {blog.title}
                      </span>
                      <span
                        className={`text-[12px] lg:text-[18px] font-normal leading-[1.2] text-left ${descColor} font-['Poppins'] w-full`}
                      >
                        {blog.description}
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
          {blogData.map((_, index) => (
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
    </>
  );
};

export default BlogSection;
