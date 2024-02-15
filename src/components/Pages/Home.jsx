import React, { useEffect } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Portfolio2 from '../Portfolio/Portfolio2';
import Portfolio3 from '../Portfolio/Portfolio3';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import FunFact2 from '../FunFact/FunFact2';
import MovingText2 from '../MovingText/MovingText2';

import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import PortfolioSlider from '../Slider/PortfolioSlider';
import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import TeamSlider from '../Slider/TeamSlider';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';
import ShowcasePortfolioHome from './ShowcasePortfolioHome';

export default function Home() {
  pageTitle('Home');
  

  // Hero Social Links
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
  const funfaceData2 = [
    {
      title: 'WEALTH MANAGERS',
      factNumber: '10',
    },
    {
      title: ' HNIs, Ultra HNIs',
      factNumber: '100',
    },
    {
      title: 'CXO',
      factNumber: '10',
    },
    {
      title: 'Investors and Founders',
      factNumber: '100',
    },
  ]
  const serviceData1 = [
    {
      title: 'UI/UX Design',
      href: '/service/service-details',
    },
    {
      title: 'Marketing',
      href: '/service/service-details',
    },
    {
      title: 'Branding',
      href: '/service/service-details',
    },
  ];
  // FunFact Data

  const funfaceData = [
    {
      title: 'ASSETS UNDER MANAGEMENT',
      factNumber: '$250M',
    },
    {
      title: 'AVERAGE RETURN',
      factNumber: '80%',
    },
    {
      title: 'RAISED SO FAR',
      factNumber: '$10Bn',
    },
    {
      title: 'YEARS OF COMBINED EXPERIENCE',
      factNumber: '55',
    },
  ];
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const portfolioData = [
    {
      title: 'Wealth Management Services',
      subtitle: "With Rits Capital's Wealth Management Services, we guide you on your financial dreams from our experts. We boost your investment journey with our Portfolio Management Services (PMS) that meets your goals. Our Wealth Planning services are a roadmap for your financial success. With our team, you secure your future Insurance solutions and learn to manage your money wisely for flexibility. Explore new opportunities with our adaptable Lending Services. At Rits Capital, you attain wealth solutions and ensure your financial landscape is set for growth. W Your financial success pathway begins here.",
      btnText: 'See Details',
      btnLink: '/Wealthmanagement',
      imageUrl: '/images/h3.jpg',
      category: 'Web Development',
    },
    {
      title: 'Investment Banking',
      subtitle: "Unlock the power of financial success with Rits Capital's Investment Banking expertise. From guiding Initial Public Offerings (IPOs) to managing Mergers and acquisitions (M&A), our seasoned team ensures strategic growth. Get access to funding with Private Equity solutions tailored to your vision. Our Valuation services provide clarity in the complex financial landscape. Seamlessly navigate Equity Capital Markets (ECM) with our advisory and secure your financial future with Debt Advisory services. Rits Capital's Investment Banking is your gateway to precision, strategy, and sustainable financial triumphs – because every financial move is a step towards your success. ",
      btnText: 'See Details',
      btnLink: '/Investment',
      imageUrl: '/images/h4.jpg',
      category: 'Branding',
    },
    {
      title: 'Accounting ',
      subtitle: "Experience financial precision with Rits Capital's comprehensive accounting services. Our experts bring accuracy and transparency to your financial records, ensuring compliance with Tax regulations. Dive into our Advisory Services for strategic financial guidance tailored to your goals. With Audit Support Services, trust in a meticulous review of your financial processes. Rits Capital is your trusted partner for holistic accounting solutions, crafting a financial landscape where accuracy, compliance, and strategic vision converge for sustained success. ",
      btnText: 'See Details',
      btnLink: '/Accounting',
      imageUrl: '/images/h5.jpg',
      category: 'UI Design',
    },
    {
      title: 'Acceleration ',
      subtitle: "Fuel your business growth with Rits Capital's Acceleration services. Experience personalized mentorship and handholding that propels your venture to new heights. Navigate strategic roll-ups with our expert guidance, optimizing synergies for unparalleled success. Unlock a dynamic office space that fosters innovation and collaboration. At Rits Capital, we go beyond funding – we provide comprehensive Funding Support, ensuring your business has the financial backing it needs to thrive. Propel your journey with Rits Capital's Acceleration services, where mentorship, strategy, infrastructure, and funding converge for a transformative business trajectory. ",
      btnText: 'See Details',
      btnLink: '/Acceleration',
      imageUrl: '/images/h6.jpg',
      category: 'Apps Design',
    },
    {
      title: 'Pre-IPO ',
      subtitle: "Embark on your Pre-IPO journey with Rits Capital, where unique opportunities await. Explore exclusive deals in unlisted shares, strategically curated to align with your investment goals. Dive into a diverse portfolio with baskets of unlisted shares, offering a tailored approach to wealth creation. Rits Capital's Pre-IPO expertise ensures that you stay ahead in the ever-evolving financial landscape, securing your position for success. Join us as we navigate the uncharted territories of unlisted shares, bringing you unparalleled opportunities and strategic investment avenues. Elevate your investment experience with Rits Capital's Pre-IPO offers. ",
      btnText: 'See Details',
      btnLink: '/Preipo',
      imageUrl: '/images/h7.jpg',
      category: 'Apps Design',
    },

  ];

  return (
    <>
      {/* Start Hero Section */}
      <ShowcasePortfolioHome/>
      {/* <Hero
        title="Rits Capital"
        subtitle="At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        // socialLinksHeading="Follow Us"
        // heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/h1.jpg"
        
      /> */}
     
      
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact/>
        {/* <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        /> */}
      </div>

      {/* // About */}
      {/* <Spacing lg="50" md="80" />
       <Div className="container">
        <Div className="row align-items-center cs-column_reverse_lg">
          <Div className="col-lg-5">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/h2.jpg"
                alt="About"
                className="cs-w100 cs-radius_5"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-lg-1">
            <SectionHeading
              title="About Us"
              subtitle="At Rits Capital, we understand that wealth management is more than just numbers. It's about your goals, your dreams, and your legacy. We partner with you to create a personalized plan that grows your wealth, protects your assets, and helps you achieve your financial aspirations."
              btnText="Learn More"
              btnLink="/about"
            />
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div> */}
      {/* what we do */}
      <Spacing lg="90" md="45" />
      {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
             <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
            
              // category={item.category}
            />
           
            <Spacing lg="50" md="50" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              
              // category={item.category}
            />
            <Spacing lg="50" md="70" />
          </Div>
        ),
      )}
      {/* End FunFact Section */}

      {/* Start Service Section */}
      {/* <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      {/* <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div> */}
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              
              <SectionHeading
                title="Why Us"
                subtitle="Why Us"
                bgSrc="/images/contactbg.avif"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      {/* <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div> */}
      {/* End Video Block Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testimonial Section */}
      {/* <Spacing lg="150" md="80" /> */}
      <Div className="container">
        <FunFact2
          // data={funfaceData2}
          // variant="cs-no_shadow"
          // bgUrl="/images/contactbg.avif"
        />
      </Div>
      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      {/* <MovingText text="Our reputed world wide partners" /> */}
      
      <MovingText2 data={serviceData1} />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          // bgSrc="/images/contactbg.avif"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
