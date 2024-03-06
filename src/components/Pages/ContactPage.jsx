import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import IconBox from '../IconBox';



export default function ContactPage({withIcon}) {
  pageTitle('Contact Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      {/* <Spacing lg='145' md='80'/> */}
      <Div className="container">
        <SectionHeading 
          title='Our Presence' 
          subtitle='' 
          variant='cs-style1 text-center'
        />
        {/* <Spacing lg='90' md='45'/> */}
        <Div className="row">
          <Div className="contactt d-flex justify-content-evenly">
          
          <ul className="cs-menu_widget cs-style1 cs-mp0">
        <h5>INDIA</h5>
        <li>
          {<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>}
          +919711996998
        </li>
        <li>
          {<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>}
          rit@ritscapital.co
        </li>
        <li>
          {<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>}
          A-96, Sector-63, noida (VB), india
        </li>
      </ul>
      {/* <ul className="cs-menu_widget cs-style1 cs-mp0">
        <h5>UAE</h5>
        <li>
          {<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>}
          +1 925 915 6637
        </li>
        <li>
          {<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>}
          rit@ritscapital.co
        </li>
        <li>
          {<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>}
           SUITE 7000 CASPER
      WY 82609, <br/>USA
        </li>
      </ul> */}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <h5>US</h5>
        <li>
          {<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>}
          +1 925 915 6637
        </li>
        <li>
          {<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>}
          rit@ritscapital.co
        </li>
        <li>
          {<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>}
           SUITE 7000 CASPER
      WY 82609, <br/>USA
        </li>
      </ul>

            {/* <Spacing lg='30' md='30'/> */}
          </Div>
            <Spacing lg='30' md='30'/>

          {/* <Div className="col-lg-4">
            <h5>UAE</h5>
          <ContactInfoWidget withIcon />

            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <h5>US</h5>
          <ContactInfoWidget withIcon />

            <Spacing lg='30' md='30'/>
          </Div> */}
        </Div>
      </Div>
      <Spacing lg="50" md="80" />
      <Div className="container text-center">
        <Div className="row">
          <Div className="col-lg-12">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            {/* <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" /> */}
          </Div>
          <Div className="col-lg-8 mx-auto">
            <form action="#" className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Mobile*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
