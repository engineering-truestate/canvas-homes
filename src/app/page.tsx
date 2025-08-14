'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from './landing_page/Footer';
import ContactForm from './landing_page/ContactForm';
import BlogSection from './landing_page/BlogsSection';
import ReviewsSection from './landing_page/ReviewSection';
import SellSection from './landing_page/SellSection';
import Hero from './landing_page/Hero';
import BuyingDecisionSection from './landing_page/BuyingDecisionSection';
import EndToEndSupportSection from './landing_page/EndToEndSupportSection';
import PropertyVerificationSection from './landing_page/PropertyVerificationSection';
import PropertyReviewsSection from './landing_page/PropertyReviewsSection';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-15">
      <div className="w-full">
        <Header />
        <Hero />
        <BuyingDecisionSection />
        <PropertyReviewsSection />
        <EndToEndSupportSection id="our-process" />
        <PropertyVerificationSection />
        <SellSection id="buy"/>
        <ReviewsSection id="sell"/>
        <BlogSection id="blogs"/>
        <ContactForm id='contact-form'/>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
