import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  features: string[];
  isActive: boolean;
  isGradient: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isMobile?: boolean;
  position?: -1 | 0 | 1; // for mobile positioning
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  features,
  isActive,
  isGradient,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isMobile = false,
  position = 0,
}) => {
  const cardBg = (gradient: boolean) =>
    gradient
      ? 'bg-gradient-to-b from-[#775DD2] to-[#3D306C] border border-[#666060]'
      : 'bg-global-14 border border-[#999090]';

  const textColor = isGradient ? 'text-global-20' : 'text-global-2';
  const subColor = isGradient ? 'text-global-19' : 'text-global-12';
  const bullet =
    title === 'Canvas Homes' ? '/images/img_frame.svg' : '/images/img_alert_circle.svg';

  // Get unique image for each card type
  const getCardImage = () => {
    switch (title) {
      case 'Canvas Homes':
        return '/images/img_vector_447.png'; // Unique image for Canvas Homes
      case 'Listing Sites':
        return '/images/brokers.svg'; // Unique image for Listing Sites
      case 'Traditional Brokers':
        return '/images/listing.svg'; // Unique image for Traditional Brokers
      default:
        return '/images/img_vector_447.png'; // Fallback image
    }
  };

  if (isMobile) {
    // Mobile positioning
    const translate =
      position === -1
        ? 'left-0 -translate-x-[5%]'
        : position === 1
          ? 'right-0 translate-x-[5%]'
          : 'left-1/2 -translate-x-1/2';
    const scale = isActive ? 'scale-100' : 'scale-90';
    const z = isActive ? 'z-30' : position === -1 ? 'z-20' : 'z-10';
    const opacity = isActive ? 'opacity-100' : 'opacity-80';

    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={`Select ${title}`}
        className={`absolute top-0 ${translate} ${scale} ${z} ${opacity} transition-all duration-300 w-[80%]`}
      >
        <div className="flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-2 right-2 flex flex-row justify-end items-end z-0">
            <Image
              src={getCardImage()}
              alt={title}
              width={240}
              height={240}
              className="w-[69px] h-[69px]"
            />
          </div>
          <div
            className={`${cardBg(isGradient)} rounded-[10px] text-left px-6 py-8 shadow-lg w-full`} 
          >
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-col gap-[6px] z-10">
                <h3 className={`text-[22px] font-medium leading-[1] ${textColor} font-['Poppins'] mb-3`}>
                  {title}
                </h3>
                <p className={`text-[14px] leading-[1.2] ${subColor} font-['Poppins'] mb-4`}>
                  {subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-[17px]">
                {features.map((f, i) => (
                  <div key={i} className="flex flex-row ">
                    <Image
                      src={bullet}
                      alt="Feature"
                      width={20}
                      height={20}
                      className="w-[15px] h-[15px] mt-1 flex-shrink-0"
                    />
                    <span
                      className={`text-[14px] leading-[1.5] ${textColor} font-['Poppins'] ml-2`}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }

  // Desktop version
  return (
    <div
      className={`flex flex-col justify-start items-stretch w-[32%] transition-all duration-300 ${
        isActive ? 'scale-100 z-20' : 'scale-95 z-10'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute top-0 right-2 z-0">
          <Image
            src={getCardImage()}
            alt={title}
            width={240}
            height={240}
            className="w-[103px] h-[127px]"
          />
        </div>
        <div
          className={`${cardBg(isGradient)} rounded-[10px] p-[40px] pt-[60px] w-full h-full cursor-pointer flex flex-col`}
        >
          <div className="flex flex-col gap-[28px] w-full mb-[30px] flex-1">
            <div className="flex flex-col gap-[6px] w-full">
              <h3
                className={`text-[40px] font-medium leading-[1.1] ${textColor} font-['Poppins'] break-words  z-10 text-balance`}
              >
                {title}
              </h3>
              <p className={`text-[18px] leading-[1.2] ${subColor} font-['Poppins']`}>{subtitle}</p>
            </div>
            <div className="flex flex-col gap-[24px] w-full flex-1">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-row items-center w-full">
                  <Image
                    src={bullet}
                    alt="Feature"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] flex-shrink-0"
                  />
                  <span
                    className={`text-[18px] font-normal leading-[1.5] ${textColor} font-['Poppins'] ml-2`}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;