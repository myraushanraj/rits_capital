import React from 'react'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'
import { Link } from 'react-router-dom'

const Whyus = () => {
  return (
    <>
    <PageHeading 
        title='Why us'
        bgSrc='/images/service_hero_bg.png'
        pageLinkText="Why Us"
      />
      <Div className="container">
     <Div className="row align-items-center">
       {/* <Div className="col-xl-6 col-lg-6">
         <Div className="cs-radius_15 cs-shine_hover_1">
           <img src="/images/animated/Startup Incubation.png" alt="Member" className="w-100" />
         </Div>
       </Div> */}
       <Div className="col-lg-12  ">
         <Spacing lg='50' md='45'/>
         <Div className="cs-section_heading cs-style1">
           <h2 className="cs-section_title text-center"> Why Us</h2>
           <Div className="cs-height_10 cs-height_lg_10" />
           {/* <h3 className="cs-section_subtitle">Product Designer</h3> */}
           {/* <Div className="cs-height_5 cs-height_lg_5" /> */}
           <div className="d-flex align-items-center justify-content-center"><Div className="cs-separator cs-sep cs-accent_bg mx-1" />◈<Div className="cs-separator cs-sep cs-accent_bg mx-1" /></div>
           <Div className="cs-height_45 cs-height_lg_25" />
           <p className="cs-m0 text-center">Our commitment to client success is unwavering, with tailored solutions that address their unique financial goals and challenges. </p>
           <Div className="cs-height_25 cs-height_lg_20" />
           <div className="d-flex align-items-center justify-content-center">
           <Link to="/contact" className="action-btn "><span>Consult Us</span></Link>
           </div>
           {/* <p className="cs-m0"> At Rits Capital, we go beyond funding – we provide comprehensive Funding Support, ensuring your business has the financial backing it needs to thrive. Propel your journey with Rits Capital's Acceleration services, where mentorship, strategy, infrastructure, and funding converge for a transformative business trajectory.</p>
           <Div className="cs-height_45 cs-height_lg_30" /> */}
           {/* <SocialWidget/> */}
         </Div>
       </Div>
     </Div>
     
   </Div>
      {/* <Spacing lg='145' md='80'/> */}
            {/* Start Why Choose Section */}
            <Spacing lg="50" md="80" />
            <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            {/* <Div className="cs-image_layer cs-style1"> */}
              <Div className="cs-image_layer_in">
                <img
                  src="/images/animated/qulifiedprofictional.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              {/* </Div> */}
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Qualified Professionals"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              The team comprises of experienced professionals who are CPAs, FCCAs, ACAs, CMAs, CFAs, and MBAs and provide high-quality services.
              </p>
              {/* <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p> */}
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* <Spacing lg="100" md="80" /> */}
      <Spacing lg="75" md="55" />
      <Div className="container">
        <Div className="row">
          
          <Div className="col-xl-5 col-lg-6 order-lg-1 order-2">
            <SectionHeading
              title="With Global Presence"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              RITS Capital is an Investment banking firm with offices in the US, India, UK, and UAE, offering multi-disciplinary services.
              </p>
              <Spacing lg="15" md="15" />
              {/* <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p> */}
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-xl-6 offset-xl-1 col-lg-6 order-lg-2 order-1  ">
            {/* <Div className="cs-image_layer cs-style1"> */}
              <Div className="cs-image_layer_in">
                <img
                  src="/images/animated/globalpresence.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              {/* </Div> */}
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* <Spacing lg="100" md="80" /> */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6 ">
            {/* <Div className="cs-image_layer cs-style1"> */}
              <Div className="cs-image_layer_in">
                <img
                  src="/images/animated/allinone.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              {/* </Div> */}
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6 ">
            <SectionHeading
              title="Providing all in One Solutions"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0 ">
              Our team is dedicated to meeting all of your business consulting needs with our all-in-one solution.
              </p>
              <Spacing lg="15" md="15" />
              {/* <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p> */}
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
    
      {/* <Spacing lg="50" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/h36.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-6  col-lg-6">
            <SectionHeading
              title="Values"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      <Spacing lg="50" md="80" />
      <Div className="container">
        <Div className="row">
          
          <Div className="col-xl-6  col-lg-6">
            <SectionHeading
              title="Impact"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-xl-6 col-lg-6 ">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/h37.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="50" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/h38.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-6  col-lg-6">
            <SectionHeading
              title="Innovation"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      <Spacing lg="50" md="80" />
      <Div className="container">
        <Div className="row">
          
          <Div className="col-xl-6  col-lg-6">
            <SectionHeading
              title="Excellence"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-xl-6 col-lg-6 ">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/h39.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
        </Div>
      </Div> */}
      {/* End Why Choose Section */}
    </>
  )
}

export default Whyus