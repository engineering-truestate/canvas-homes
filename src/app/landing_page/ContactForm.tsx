import { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { name, phone, message });
  };

  return (
    <section className="w-full mt-[82px] lg:mt-[164px] px-4 lg:px-[72px]">
      <div className="flex flex-col lg:flex-row justify-start items-center w-full">
        <div className="w-full lg:w-[58%] flex flex-col gap-[35px] lg:gap-[70px] justify-start items-start pr-[9px] lg:pr-[18px]">
          <div className="flex flex-col gap-[27px] lg:gap-[54px] justify-start items-start w-full">
            <div className="flex flex-col justify-start items-center w-full">
              <div className="flex flex-col justify-start items-start w-full">
                <button className="bg-global-6 text-global-20 font-medium rounded-[18px] px-3 py-1.5 border border-[#bdb9b9] w-auto">
                  Blogs
                </button>
                <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.5] text-left text-global-4 font-['Poppins'] w-auto mt-[-1px] lg:mt-[-2px]">
                  Step into your space
                </h2>
              </div>
              <p className="text-[18px] lg:text-[28px] font-medium leading-[1.2] text-left text-global-10 font-['Poppins'] w-full">
                Ready to explore? Book a visit to see the property in person and make sure it&apos;s
                the right fit
              </p>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col gap-[44px] lg:gap-[88px] justify-start items-center w-[88%]">
              <div className="flex flex-col lg:flex-row gap-[14px] lg:gap-[28px] justify-start items-start w-full">
                <div className="flex flex-col justify-start items-start w-full lg:w-[304px]">
                  <div className="flex flex-col justify-start items-start w-full">
                    <span className="text-[16px] lg:text-[24px] font-medium leading-[1.5] text-left font-['Poppins'] w-auto">
                      <span className="text-global-2">Your Name</span>
                      <span className="text-global-6">*</span>
                    </span>
                    <div className="w-full h-[53px] lg:h-[106px] border-b-2 border-global-2 mt-[-17px] lg:mt-[-34px]">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-full bg-transparent border-none outline-none pt-[35px] lg:pt-[70px] text-[16px] lg:text-[24px] font-normal leading-[1.5] text-left text-global-8 font-['Poppins']"
                        placeholder="Joe Doe"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-start items-start w-full lg:w-[304px]">
                  <div className="flex flex-col justify-start items-start w-full">
                    <span className="text-[16px] lg:text-[24px] font-medium leading-[1.5] text-left font-['Poppins'] w-auto">
                      <span className="text-global-2">Your Phone</span>
                      <span className="text-global-6">*</span>
                    </span>
                    <div className="w-full h-[53px] lg:h-[106px] border-b-2 border-global-2 mt-[-17px] lg:mt-[-34px]">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-full bg-transparent border-none outline-none pt-[35px] lg:pt-[70px] text-[16px] lg:text-[24px] font-normal leading-[1.5] text-left text-global-8 font-['Poppins']"
                        placeholder="9875 4321"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start w-full">
                <div className="flex flex-row justify-start items-start w-full border-b-2 border-global-1">
                  <span className="text-[16px] lg:text-[24px] font-medium leading-[1.5] text-left text-global-1 font-['Poppins'] w-auto mb-[34px] lg:mb-[68px]">
                    Your Message
                  </span>
                </div>
                <div className="w-full mt-[-15px] lg:mt-[-30px]">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-[16px] lg:text-[24px] font-normal leading-[1.5] text-left text-global-1 font-['Poppins']"
                    placeholder="Write your Message"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center w-[52%]">
            <button
              onClick={handleSubmit}
              className="bg-global-4 hover:bg-global-6 text-global-20 font-semibold rounded-[10px] px-4 py-4 border-2 border-[#dbd7d7] w-full"
            >
              Ready to Buy? Get in Touch
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[42%] flex justify-end items-end mt-8 lg:mt-0">
          <Image
            src="/images/img_undraw_quality_time_ay6x.svg"
            alt="Quality Time"
            width={558}
            height={478}
            className="w-full h-auto max-w-[558px] max-h-[478px] object-contain rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
