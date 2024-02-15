import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'
import SocialWidget from '../Widget/SocialWidget'

const Accounting = () => {
  return (
   <>
   <PageHeading 
     title='Accounting '
     bgSrc='/images/team_hero_bg.jpeg'
     pageLinkText='Accounting '
   /><Spacing lg='150' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-5 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/h21.jpg" alt="Member" className="w-100" />
         </Div>
       </Div>
       <Div className="col-lg-6 offset-xl-1">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Accounting</h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
           <Div className="cs-separator cs-accent_bg" />
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Experience financial precision with Rits Capital's comprehensive accounting services. Our experts bring accuracy and transparency to your financial records, ensuring compliance with Tax regulations. Dive into our Advisory Services for strategic financial guidance tailored to your goals. With Audit Support Services, trust in a meticulous review of your financial processes.</p>
           <Div className="cs-height_25 cs-height_lg_20" />
           <p className="cs-m0"> Rits Capital is your trusted partner for holistic accounting solutions, crafting a financial landscape where accuracy, compliance, and strategic vision converge for sustained success.</p>
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Precision in Financial Management </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
           <Div className="cs-separator cs-accent_bg" />
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Rits Capital ensures accuracy and compliance in your financial records with our top-notch Accounting Services. From bookkeeping to financial reporting, our experts manage every detail, providing a robust foundation for your business's financial success. </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-5 col-lg-6 offset-xl-1">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/h22.jpg" alt="Member" className="w-100" />
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-5 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/h23.jpg" alt="Member" className="w-100" />
         </Div>
       </Div>
       <Div className="col-lg-6 offset-xl-1">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Navigate Taxation with Confidence </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
           <Div className="cs-separator cs-accent_bg" />
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Stay tax-efficient and compliant with Rits Capital's Tax Services. Our experts navigate the complexities of taxation, offering strategic planning and compliance solutions. Maximize your tax advantages and minimize liabilities with our comprehensive tax expertise. </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
     
       <Div className="col-lg-6">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Strategic Financial Guidance </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
           <Div className="cs-separator cs-accent_bg" />
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Rits Capital provides Advisory Services tailored to your unique financial goals. From business planning to investment strategies, our seasoned advisors offer insights that drive success. Partner with us for strategic financial guidance that propels your business forward. </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
       <Div className="col-xl-5 col-lg-6 offset-xl-1">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/h24.jpg" alt="Member" className="w-100" />
         </Div>
       </Div>
     </Div>
     
   </Div>
   <Spacing lg='50' md='80'/>
   <Div className="container">
     <Div className="row align-items-center">
       <Div className="col-xl-5 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/h25.jpg" alt="Member" className="w-100" />
         </Div>
       </Div>
       <Div className="col-lg-6 offset-xl-1">
         <Spacing lg='0' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title">Rigorous Examination, Reliable Assurance </h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           <Div className="cs-height_5 cs-height_lg_5" />
           <Div className="cs-separator cs-accent_bg" />
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0">Ensure the integrity of your financial statements with Rits Capital's Audit Support Services. Our meticulous examination and support enhance the reliability and transparency of your financial reporting. Trust our experts for a robust audit process and comprehensive assurance. </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           {/* <p className="cs-m0">Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p> */}
           <Div className="cs-height_45 cs-height_lg_30" />
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
  
   <Spacing lg='150' md='80'/>
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

export default Accounting