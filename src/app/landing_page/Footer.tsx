"use client";
import { useState } from "react";
import Image from "next/image";

const cx = {
  title: "text-white font-semibold font-['Poppins']",
  smallCaps: "text-white font-medium uppercase font-['Poppins']",
  text: "text-white font-medium font-['Poppins']",
  link:
    "text-white font-medium uppercase font-['Poppins'] cursor-pointer " +
    "transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm",
  policyLink:
    "font-medium cursor-pointer hover:underline transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm",
  icon:
    "w-5 h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-200 will-change-transform hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-full",
  divider: "w-full h-px bg-white/70",
};

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="w-full mt-[60px] lg:mt-[120px] bg-gradient-to-b from-[#433878] to-[#6f56ac] p-4 lg:p-8">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6 lg:gap-14 w-[90%] mx-auto py-4 lg:py-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${cx.title}`}>
              Canvas Homes
            </h2>
            <p className={`text-xs lg:text-base ${cx.smallCaps} mt-2`}>
              Stay Connected! Let&apos;s Make Real Estate Simple.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
            {/* Quick Links */}
            <div className="flex flex-col gap-2">
              <span className={`text-base lg:text-2xl ${cx.title}`}>Quick Links</span>
              <div className="flex gap-12">
                <div className="flex flex-col gap-1">
                  <span tabIndex={0} className={`text-xs lg:text-base ${cx.link}`}>Home</span>
                  <span tabIndex={0} className={`text-xs lg:text-base ${cx.link}`}>Buy</span>
                  <span tabIndex={0} className={`text-xs lg:text-base ${cx.link}`}>Sell</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span tabIndex={0} className={`text-xs lg:text-base ${cx.link}`}>Buying Journey</span>
                  <span tabIndex={0} className={`text-xs lg:text-base ${cx.link}`}>Loan assistance</span>
                  <span tabIndex={0} className={`text-xs lg:text-base ${cx.link}`}>Contact us</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <span className={`text-base lg:text-2xl ${cx.title}`}>Contact Info</span>
              <div className="flex flex-col gap-2">
                <div className="flex items-start">
                  <Image
                    src="/images/img_group_896.svg"
                    alt="Location"
                    width={12}
                    height={14}
                    className="w-2 h-2 lg:w-3 lg:h-4 mt-1"
                  />
                  <p className={`text-xs lg:text-base ${cx.text} ml-2 capitalize`}>
                    1579, 27th Main Rd, HSR Layout, Bengaluru, Karnataka 560102
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/img_vector_white_a700_14x12.svg"
                    alt="Phone"
                    width={12}
                    height={14}
                    className="w-2 h-2 lg:w-3 lg:h-4"
                  />
                  <span className={`text-xs lg:text-base ${cx.text} ml-2 capitalize`}>
                    +91 98765 43210
                  </span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/img_group_936.svg"
                    alt="Hours"
                    width={12}
                    height={10}
                    className="w-2 h-2 lg:w-3 lg:h-3"
                  />
                  <span className={`text-xs lg:text-base ${cx.text} ml-2`}>
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/img_time_svgrepo_com.svg"
                    alt="Email"
                    width={14}
                    height={14}
                    className="w-2 h-2 lg:w-3.5 lg:h-3.5"
                  />
                  <span className={`text-xs lg:text-base ${cx.text} ml-2`}>
                    info@canvashomes.com
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center gap-4">
              <span className={`text-base lg:text-2xl ${cx.title}`}>Connect With Us</span>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/img_vector_white_a700_32x32.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className={cx.icon}
                />
                <Image
                  src="/images/img_vector_32x32.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className={cx.icon}
                />
                <Image
                  src="/images/img_whatsapp_128_white_a700.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className={cx.icon}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-4 w-full">
            <div className={cx.divider} />
            <div className="flex flex-col lg:flex-row justify-between items-center w-full text-xs lg:text-sm text-white font-['Poppins']">
              <div className="flex flex-wrap justify-center gap-4 mb-2 lg:mb-0">
                <span tabIndex={0} className={cx.policyLink}>Privacy Policy</span>
                <span tabIndex={0} className={cx.policyLink}>Terms of Service</span>
                <span tabIndex={0} className={cx.policyLink}>Cookie Policy</span>
              </div>
              <span className="font-medium">© {year} Canvas Homes. All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
