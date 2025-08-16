import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

interface ReviewsSectionProps {
  id: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ id }) => {
  return (
    <>
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
                    Join our WhatsApp Community
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

      {/* actual sell section */}
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
                <div className="flex flex-col gap-[9px] lg:gap-[18px] w-auto">
                  {[
                    { icon: '/images/img_trending_up.svg', title: 'Market Trends' },
                    { icon: '/images/img_users.svg', title: 'Buyers Network' },
                    { icon: '/images/img_calendar.svg', title: 'Fast Turnaround' },
                    { icon: '/images/img_dollar_sign.svg', title: 'Cataloging Services' },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-row gap-[9px] lg:gap-[18px] items-center w-full"
                    >
                      {/* Icon */}
                      <div className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] bg-global-2 rounded-full p-[8px] lg:p-[16px] flex items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={20}
                          height={20}
                          className="w-full h-full"
                        />
                      </div>

                      {/* Text */}
                      <span className="text-[16px] lg:text-[24px] font-medium leading-[1.5] text-global-2 font-['Poppins']">
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
              <div className="flex flex-col gap-[24px] lg:gap-[48px] justify-start items-center w-full bg-gradient-to-b from-[#433878] to-[#8463cd] rounded-[10px] p-[14px] lg:p-[28px] mt-[5px] lg:mt-[10px]">
                <div className="flex flex-col gap-[20px] lg:gap-[40px] justify-start items-end w-[88%]">
                  <h3 className="text-[20px] lg:text-[40px] font-medium leading-[1] text-left text-global-20 font-['Poppins'] w-full">
                    Contact with High{'\n'}Intent Buyers
                  </h3>
                </div>
                <div className="flex flex-row justify-center items-center w-auto bg-[#d9d9d926] border border-gray-400 rounded-[2px] p-[24px] lg:p-[48px] shadow-[0px_4px_8px_#888888ff]">
                  <Image
                    src="/images/img_group_935.svg"
                    alt="Contact Stats"
                    width={382}
                    height={316}
                    className="w-full h-auto max-w-[191px] max-h-[158px] lg:max-w-[382px] lg:max-h-[316px] object-contain"
                  />
                </div>

                {/* Stats Row */}
                <div className="flex flex-row gap-[11px] lg:gap-[22px] justify-start items-center w-full">
                  <div className="flex flex-col justify-center items-center flex-1">
                    <span className="text-[20px] lg:text-[32px] font-medium leading-[1] text-center bg-gradient-to-b from-[#f9f9ff] to-[#959599] bg-clip-text text-transparent font-['Poppins']">
                      95%
                    </span>
                    <span className="text-[16px] lg:text-[24px] font-normal leading-[1.5] text-center text-global-20 font-['Poppins']">
                      Success Rate
                    </span>
                  </div>

                  <div className="flex flex-col justify-center items-center flex-1">
                    <span className="text-[20px] lg:text-[32px] font-medium leading-[1] text-center bg-gradient-to-b from-[#ffffff] to-[#999999] bg-clip-text text-transparent font-['Poppins']">
                      30
                    </span>
                    <span className="text-[16px] lg:text-[24px] font-normal leading-[1.5] text-center text-global-20 font-['Poppins']">
                      Daily Average
                    </span>
                  </div>

                  <div className="flex flex-col justify-center items-center flex-1">
                    <span className="text-[20px] lg:text-[32px] font-medium leading-[1] text-center bg-gradient-to-b from-[#ffffff] to-[#999999] bg-clip-text text-transparent font-['Poppins']">
                      500+
                    </span>
                    <span className="text-[16px] lg:text-[24px] font-normal leading-[1.5] text-center text-global-20 font-['Poppins']">
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
