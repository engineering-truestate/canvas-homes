import Image from 'next/image';

export interface TestimonialData {
  name: string;
  role: string;
  company: string;
  avatar: string;
  review: string;
  savedAmount: string;
  processTime: string;
}

export const TestimonialCard: React.FC<{ 
  data: TestimonialData; 
  className?: string;
  onClick?: () => void;
  isExpanded?: boolean;
}> = ({ 
  data, 
  className = "",
  onClick,
  isExpanded = false
}) => (
  <div 
    className={`bg-global-15 border border-[#bfb6df] rounded-[8px] shadow-lg transition-all duration-300  ${className}`}
    onClick={onClick}
  >
    <div className="flex flex-col gap-4 w-full p-5">
      <div className="flex flex-row gap-4 w-full ">
        <Image
          src={data.avatar}
          alt={data.name}
          width={60}
          height={60}
          className="w-[60px] h-[60px]"
        />
        <div className="flex flex-col flex-1">
          <span className="text-[16px] font-semibold leading-[1.5] text-global-2 font-['Poppins']">
            {data.name}
          </span>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-[12px] font-medium leading-[1.3] text-global-7 font-['Plus Jakarta Sans']">
              {data.role}
            </span>
            <span className="text-[12px] font-medium leading-[1.3] font-['Plus Jakarta Sans'] whitespace-nowrap">
              Moved in with <span className="text-global-2">{data.company}</span>
            </span>
          </div>
        </div>
      </div>

      <div className='flex-col gap-4 w-full '>
        <div className="flex flex-row gap-4 w-full">
          <div className="w-8 h-8 bg-global-2 border border-[#bfb6df] rounded-full flex items-center justify-center">
            <img src={'/images/colon.svg'} alt="" />
          </div>
          <p className="text-[12px] font-normal leading-[1.6] text-left text-global-2 font-['Poppins'] flex-1 mt-2 pb-4">
            {data.review}
          </p>
        </div>
        <div className="w-full h-px bg-global-8"></div>

        {/* Testimonial Stats */}
        <div className="flex flex-row items-center w-full pt-4">
          <div className="flex flex-col items-start w-1/2">
            <span className="text-[20px] font-semibold leading-[1.55] text-global-4 font-['Poppins']">
              {data.savedAmount}
            </span>
            <span className="text-[12px] font-medium leading-[1.3] text-global-9 font-['Poppins'] ml-1">
              Saved up to
            </span>
          </div>
          <div className="flex flex-col items-end w-1/2">
            <span className="text-[20px] font-semibold leading-[1.55] text-global-2 font-['Poppins']">
              {data.processTime}
            </span>
            <span className="text-[12px] font-medium leading-[1.3] text-global-9 font-['Poppins']">
              Process time
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);