import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/h1.jpg',
      memberName: 'R. Suneja',
      memberDesignation: 'Founding Partner',
      memberPoints: ['20 years of Capital Market experience', 'Youngest group controller of $27Bn FTSE 200 UK Listed Group','Previously built a $5 Billion company, raised $6 Billion in capital.'],
      // memberPoints: 'page',

      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_2.jpeg',
      memberName: 'S Imamul Haque',
      memberDesignation: 'AVP- Investment Banking',
      memberPoints: ['10+ Years of experience','Raised $1 Bn so far','10+ M&A Transactions worth $2.5 Bn'],
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_3.jpeg',
      memberName: 'Rounak Mishra',
      memberDesignation: 'Wealth Manager',
      memberPoints: ['6+ Years Managed 400 Cr+ AUM (Multiple Asset Classes) Wealth Planning & Pre-IPO Consultant'],
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_4.jpeg',
      memberName: 'Jyoti Nathani',
      memberDesignation: 'Equity Research',
      memberPoints: ["8+ Years of experience","Worked with GSN Invest, Marsh & McLennan, Moody's Analytics, and MCube Financial LLC" ],
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Praveen Dhingra',
      memberDesignation: 'Equity Operations',
      memberPoints: ['10+ Years experience of capital markets', '7+ years for Experience of Technical analysis', '3+ years experience of Equity Operations'],
      

      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Anshika Burman',
      memberDesignation: 'Capital Markets & BD Manager',
      memberPoints: ['4+ Years of experience', 'Startup & Real Estate Fundraising ', 'Raised $20M+'],
      

      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberPoints={item.memberPoints}
            

            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
