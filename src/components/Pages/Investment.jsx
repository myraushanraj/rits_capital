import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'
import SocialWidget from '../Widget/SocialWidget'

const Investment = () => {
  return (
   <>
   <PageHeading 
     title='Investment Banking'
     bgSrc='/images/team_hero_bg.jpeg'
     pageLinkText='Investment Banking'
   />
   <Spacing lg='150' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-6 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/webicons/g25.gif" alt="Member" className="w-100" />
         </Div>
       </Div>
       <Div className="col-lg-6 ">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Investment Banking</h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
           <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Unlock the power of financial success with Rits Capital's Investment Banking expertise. From guiding Initial Public Offerings (IPOs) to managing Mergers and acquisitions (M&A), our seasoned team ensures strategic growth. Get access to funding with Private Equity solutions tailored to your vision. </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           <p className="cs-m0"> Our Valuation services provide clarity in the complex financial landscape. Seamlessly navigate Equity Capital Markets (ECM) with our advisory and secure your financial future with Debt Advisory services. Rits Capital's Investment Banking is your gateway to precision, strategy, and sustainable financial triumphs – because every financial move is a step towards your success.  
  </p>
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='80' md='80'/>

   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">  IPO  </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           <h3 className="cs-section_subtitle">   Unlock Your Growth Potential  </h3>
           <Div className="cs-height_5 cs-height_lg_5" />
           <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Step into the world of Initial Public Offering (IPO) with Rits Capital. Our experts help you through the process and turn your private enterprise into a publicly traded success. Seize opportunities, access capital markets, and propel your business to new heights.  
  </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-6 col-lg-6 ">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/webicons/g24.gif" alt="Member" className="w-100" />
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='80' md='80'/>

   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-6 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/webicons/g20.gif" alt="Member" className="w-100" />
         </Div>
       </Div>
       <Div className="col-lg-6 ">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">   M&A  </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           <h3 className="cs-section_subtitle"> Elevate Your Strategy </h3>
           <Div className="cs-height_5 cs-height_lg_5" />
           <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Navigate mergers and acquisitions (M&A) with precision. Rits Capital provides strategic insights, meticulous planning, and execution excellence. Whether you're expanding, consolidating, or restructuring, we ensure a seamless journey towards your growth objectives.  
   </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0"> Our Valuation services provide clarity in the complex financial landscape. Seamlessly navigate Equity Capital Markets (ECM) with our advisory and secure your financial future with Debt Advisory services. Rits Capital's Investment Banking is your gateway to precision, strategy, and sustainable financial triumphs – because every financial move is a step towards your success.  
  </p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='80' md='80'/>

   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">    Private Equity  </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           <h3 className="cs-section_subtitle">Tailored Investment Solutions  </h3>
           <Div className="cs-height_5 cs-height_lg_5" />
           <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Discover bespoke investment solutions with Rits Capital's Private Equity expertise. We align your unique goals with lucrative opportunities, fostering growth, innovation, and sustained success. Partner with us to unlock the full potential of your private investments.
    </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-6 col-lg-6 ">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/webicons/g23.gif"alt="Member" className="w-100" />
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='80' md='80'/>

   <Spacing lg='80' md='80'/>

<Div className="container">
  <Div className="row align-items-center">
    <Div className="col-xl-6 col-lg-6">
      <Div className="cs-radius_15 cs-shine_hover_1">
        <img src="/images/webicons/g21.gif" alt="Member" className="w-100" />
      </Div>
    </Div>
    <Div className="col-lg-6 ">
      <Spacing lg='0' md='45'/>
      <Div className="cs-section_heading cs-style1">
        <h2 className="cs-section_title">   Valuation </h2>
        <Div className="cs-height_10 cs-height_lg_10" />
        <h3 className="cs-section_subtitle">  Precision in Appraisal </h3>
        <Div className="cs-height_5 cs-height_lg_5" />
        <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
        <Div className="cs-height_45 cs-height_lg_25" />
        <p className="cs-m0">Rits Capital brings precision to the art of valuation. Our experts employ industry-leading methodologies to assess and optimize the worth of your assets or businesses. Achieve clarity and make informed decisions with our meticulous valuation services.</p>
        <Div className="cs-height_25 cs-height_lg_20" />
        {/* <p className="cs-m0"> Our Valuation services provide clarity in the complex financial landscape. Seamlessly navigate Equity Capital Markets (ECM) with our advisory and secure your financial future with Debt Advisory services. Rits Capital's Investment Banking is your gateway to precision, strategy, and sustainable financial triumphs – because every financial move is a step towards your success.  
</p> */}
        <Div className="cs-height_45 cs-height_lg_30" />
        {/* <SocialWidget/> */}
      </Div>
    </Div>
  </Div>
  
</Div>
   <Spacing lg='80' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">ECM Advisory </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           <h3 className="cs-section_subtitle">Navigating Capital Markets

  </h3>
           <Div className="cs-height_5 cs-height_lg_5" />
           <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Rits Capital offers comprehensive Equity Capital Market (ECM) advisory services. From structuring to execution, we guide you through every stage of capital market transactions. Harness the power of ECM with our strategic insights and personalized solutions.</p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-6 col-lg-6 ">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/webicons/g12.gif"alt="Member" className="w-100" />
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='80' md='80'/>

<Div className="container">
  <Div className="row align-items-center">
    <Div className="col-xl-6 col-lg-6">
      <Div className="cs-radius_15 cs-shine_hover_1">
        <img src="/images/webicons/g13.gif" alt="Member" className="w-100" />
      </Div>
    </Div>
    <Div className="col-lg-6 ">
      <Spacing lg='0' md='45'/>
      <Div className="cs-section_heading cs-style1">
        <h2 className="cs-section_title"> Debt Advisory </h2>
        <Div className="cs-height_10 cs-height_lg_10" />
        <h3 className="cs-section_subtitle">  Optimize Your Financing  </h3>
        <Div className="cs-height_5 cs-height_lg_5" />
        <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
        <Div className="cs-height_45 cs-height_lg_25" />
        <p className="cs-m0">Optimize your financing strategies with Rits Capital's Debt Advisory services. We craft tailored solutions to address your capital needs, ensuring optimal debt structuring, cost-effectiveness, and financial resilience. Navigate the complex debt landscape with confidence and expertise.</p>
        <Div className="cs-height_25 cs-height_lg_20" />
        {/* <p className="cs-m0"> Our Valuation services provide clarity in the complex financial landscape. Seamlessly navigate Equity Capital Markets (ECM) with our advisory and secure your financial future with Debt Advisory services. Rits Capital's Investment Banking is your gateway to precision, strategy, and sustainable financial triumphs – because every financial move is a step towards your success.  
</p> */}
        <Div className="cs-height_45 cs-height_lg_30" />
        {/* <SocialWidget/> */}
      </Div>
    </Div>
  </Div>
  
</Div>
   <Spacing lg='80' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">  SPAC</h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle"> Optimize Your Financing
  </h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
           <div className="d-flex align-items-center"><Div className="cs-separator cs-accent_bg mx-1" />◈<Div className="cs-separator cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Our SPAC framework, where we meticulously evaluate and select investment opportunities to deliver exceptional value to our stakeholders. Our rigorous selection criteria ensure that we partner with companies poised for success and aligned with our strategic objectives.</p>
           <Div className="cs-height_25 cs-height_lg_20" />
           <p className="cs-m0">We assess the financial health and growth potential of target companies, looking for strong financial metrics and promising growth trajectories that align with our investment goals. We place significant emphasis on the caliber and track record of company management, seeking leadership teams with a proven ability to execute strategies and drive sustainable growth.</p>
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-6 col-lg-6 ">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/webicons/g19.gif"alt="Member" className="w-100" />
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>
   {/* <Div className="container">
     <Cta 
       title='Let’s disscuse make <br />something <i>cool</i> together' 
       btnText='Apply For Meeting' 
       btnLink='/contact' 
       bgSrc='/images/cta_bg.jpeg'
     />
   </Div> */}
 </>
  )
}

export default Investment