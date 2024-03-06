import React from 'react'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

const Whyus = () => {
  return (
    <>
    <PageHeading 
        title='Why us'
        bgSrc='/images/service_hero_bg.png'
        pageLinkText="Why us"
      />
      {/* <Spacing lg='145' md='80'/> */}
            {/* Start Why Choose Section */}
            <Spacing lg="50" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/h34.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-6  col-lg-6">
            <SectionHeading
              title="Mission"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Our Mission is to empower our clients through the delivery of precise, timely, and efficient investment banking services. 
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
              By providing strategic financial solutions, we equip our clients with the tools to make informed decisions, fostering the growth and success of their businesses on a global scale.
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
          
          <Div className="col-xl-6  col-lg-6 order-md-1 order-2">
            <SectionHeading
              title="Vision"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Our Vision is to emerge as a premier and highly regarded Investment Banking firm. We are dedicated to delivering expert financial solutions, strategic investment guidance, and unparalleled services tailored for a global clientele.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
              Our aim is to be recognized as the foremost customer-centric firm, providing specialized expertise in investment banking, and ensuring financial success and growth for all our clients on the global stage.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-xl-6 col-lg-6 order-md-2 order-1 ">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/h35.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
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