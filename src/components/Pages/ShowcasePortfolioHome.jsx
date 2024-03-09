import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';

import Hero6 from '../Hero/Hero6';

export default function ShowcasePortfolioHome() {
  pageTitle('Showcase Portfolio');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroSocialLinks = [
    {
      name: 'Behance',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];

  const showcaseData = [
    {
      title: 'Rits Capital',
      imgUrl: '/images/b1.png',
      // href: '/case-study/case-study-details',
      subtitle:"At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations.",
    },
    {
      title: 'Wealth Management Service',
      imgUrl: '/images/b2.png',
      // href: '/case-study/case-study-details',
      subtitle:"At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations.",
    },
    {
      title: 'Investement',
      imgUrl: '/images/b3.png',
      // href: '/case-study/case-study-details',
      subtitle:"At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations.",
    },
    {
      title: 'Accounting',
      imgUrl: '/images/b4.png',
      // href: '/case-study/case-study-details',
      subtitle:"At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations.",
    },
    {
      title: 'Acceleration',
      imgUrl: '/images/b5.png',
      // href: '/case-study/case-study-details',
      subtitle:"At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations.",
    },
    {
      title: 'Pre-Ipo',
      imgUrl: '/images/b6.png',
      // href: '/case-study/case-study-details',
      subtitle:"At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations.",
    },
  ];

  return (
    <Hero6
      heroSocialLinks={heroSocialLinks}
      socialLinksHeading="Follow Us"
      showcaseData={showcaseData}
    />
  );
}
