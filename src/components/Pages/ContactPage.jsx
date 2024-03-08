import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import IconBox from '../IconBox';



// export default function ContactPage({ withIcon }) {
//   pageTitle('Contact Us');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     projectType: '',
//     mobile: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create payload for API
//     const payload = {
//       name: formData.name,
//       email: formData.email,
//       sponsor: "contact-" + formData.mobile,
//       message: "contact-" + formData.mobile,
//       website: "ritscapital",
//     };

//     // Send data to the API
//     const rawResponse = await fetch("https://api.khubero.com/website/contact", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });
//     // Handle the API response as needed
//     const response = await rawResponse.json();
//     console.log(response);

//     setFormData({
//       name: '',
//       email: '',
//       projectType: '',
//       mobile: '',
//       message: '',
//     });
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);



//   return (
//     <>
//       <PageHeading
//         title="Contact Us"
//         bgSrc="/images/contact_hero_bg.jpeg"
//         pageLinkText="Contact"
//       />
//       {/* <Spacing lg='145' md='80'/> */}
//       <Div className="container">
//         <SectionHeading
//           title='Our Presence'
//           subtitle=''
//           variant='cs-style1 text-center'
//         />
//         {/* <Spacing lg='90' md='45'/> */}
//         <Div className="row">
//           <Div className="contactt d-flex justify-content-evenly">

//             <ul className="cs-menu_widget cs-style1 cs-mp0">
//               <h5>INDIA</h5>
//               <li>
//                 {<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>}
//                 +919711996998
//               </li>
//               <li>
//                 {<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>}
//                 rit@ritscapital.co
//               </li>
//               <li>
//                 {<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>}
//                 A-96, Sector-63, noida (VB), india
//               </li>
//             </ul>
//             {/* <ul className="cs-menu_widget cs-style1 cs-mp0">
//         <h5>UAE</h5>
//         <li>
//           {<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>}
//           +1 925 915 6637
//         </li>
//         <li>
//           {<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>}
//           rit@ritscapital.co
//         </li>
//         <li>
//           {<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>}
//            SUITE 7000 CASPER
//       WY 82609, <br/>USA
//         </li>
//       </ul> */}
//             <ul className="cs-menu_widget cs-style1 cs-mp0">
//               <h5>US</h5>
//               <li>
//                 {<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>}
//                 +1 925 915 6637
//               </li>
//               <li>
//                 {<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>}
//                 rit@ritscapital.co
//               </li>
//               <li>
//                 {<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>}
//                 SUITE 7000 CASPER
//                 WY 82609, <br />USA
//               </li>
//             </ul>

//             {/* <Spacing lg='30' md='30'/> */}
//           </Div>
//           <Spacing lg='30' md='30' />

//           {/* <Div className="col-lg-4">
//             <h5>UAE</h5>
//           <ContactInfoWidget withIcon />

//             <Spacing lg='30' md='30'/>
//           </Div>
//           <Div className="col-lg-4">
//             <h5>US</h5>
//           <ContactInfoWidget withIcon />

//             <Spacing lg='30' md='30'/>
//           </Div> */}
//         </Div>
//       </Div>
//       <Spacing lg="50" md="80" />
//       <Div className="container text-center">
//         <Div className="row">
//           <Div className="col-lg-12">
//             <SectionHeading
//               title="Do you have a project <br/>in your mind?"
//               subtitle="Getting Touch"
//             />
//             {/* <Spacing lg="55" md="30" />
//             <ContactInfoWidget withIcon />
//             <Spacing lg="0" md="50" /> */}
//           </Div>
//           <Div className="col-lg-8 mx-auto">
//             <form onSubmit={handleSubmit} action="#" className="row">
//               <Div className="col-sm-6">
//                 <label className="cs-primary_color">Full Name*</label>
//                 <input type="text" name='fullName' value={formData.name} onChange={handleInputChange} className="cs-form_field" />
//                 <Spacing lg="20" md="20" />
//               </Div>
//               <Div className="col-sm-6">
//                 <label className="cs-primary_color">Email*</label>
//                 <input type="text" name='email' value={formData.email} onChange={handleInputChange} className="cs-form_field" />
//                 <Spacing lg="20" md="20" />
//               </Div>
//               <Div className="col-sm-6">
//                 <label className="cs-primary_color">Project Type*</label>
//                 <input type="text" name='projectType'value={formData.projectType} onChange={handleInputChange} className="cs-form_field" />
//                 <Spacing lg="20" md="20" />
//               </Div>
//               <Div className="col-sm-6">
//                 <label className="cs-primary_color">Mobile*</label>
//                 <input type="text" name='mobile' value={formData.mobile} onChange={handleInputChange} className="cs-form_field" />
//                 <Spacing lg="20" md="20" />
//               </Div>
//               <Div className="col-sm-12">
//                 <label className="cs-primary_color">Mobile*</label>
//                 <textarea
//                 name='message'
//                 value={formData.message}
//                 onChange={handleInputChange}
//                   cols="30"
//                   rows="7"
//                   className="cs-form_field"
//                 ></textarea>
//                 <Spacing lg="25" md="25" />
//               </Div>
//               <Div className="col-sm-12">
//                 <button type='submit' className="cs-btn cs-style1">
//                   <span>Send Message</span>
//                   <Icon icon="bi:arrow-right" />
//                 </button>
//               </Div>
//             </form>
//           </Div>
//         </Div>
//       </Div>
//       <Spacing lg="150" md="80" />
//       <Div className="cs-google_map">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
//           allowFullScreen
//           title="Google Map"
//         />
//       </Div>
//       <Spacing lg="50" md="40" />
//     </>
//   );
// }
// ... (import statements remain unchanged)

export default function ContactPage({ withIcon }) {
  pageTitle('Contact Us');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    mobile: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create payload for API
    const payload = {
      name: formData.name,
      email: formData.email,
      sponsor: "contact-" + formData.mobile,
      message: "contact-" + formData.mobile,
      website: "ritscapital",
    };

    // Send data to the API
    const rawResponse = await fetch("https://api.khubero.com/website/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Handle the API response as needed
    const response = await rawResponse.json();
    console.log(response);

    setFormData({
      name: '',
      email: '',
      projectType: '',
      mobile: '',
      message: '',
    });
  };

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
      <div className="container">
        <SectionHeading
          title="Our Presence"
          subtitle=""
          variant="cs-style1 text-center"
        />
        <div className="row">
          <div className="contactt d-flex justify-content-evenly">
            <ul className="cs-menu_widget cs-style1 cs-mp0">
              <h5>INDIA</h5>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="material-symbols:add-call-rounded" />
                </span>
                +919711996998
              </li>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="mdi:envelope" />
                </span>
                rit@ritscapital.co
              </li>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="mdi:map-marker" />
                </span>
                A-96, Sector-63, Noida (VB), India
              </li>
            </ul>
            <ul className="cs-menu_widget cs-style1 cs-mp0">
              <h5>US</h5>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="material-symbols:add-call-rounded" />
                </span>
                +1 925 915 6637
              </li>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="mdi:envelope" />
                </span>
                rit@ritscapital.co
              </li>
              <li>
                <span className="cs-accent_color">
                  <Icon icon="mdi:map-marker" />
                </span>
                SUITE 7000 CASPER, WY 82609, <br />USA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Spacing lg="50" md="80" />
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
          </div>
          <div className="col-lg-8 mx-auto">
            <form onSubmit={handleSubmit} action="#" className="row">
              <div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="cs-form_field"
                />
              </div>
              <div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="cs-form_field"
                />
              </div>
              <div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input
                  type="text"
                  name="projectType"
                  // value={formData.projectType}
                  onChange={handleInputChange}
                  className="cs-form_field"
                />
              </div>
              <div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="cs-form_field"
                />
              </div>
              <div className="col-sm-12">
                <label className="cs-primary_color">Mobile*</label>
                <textarea
                  name="message"
                  // value={formData.message}
                  onChange={handleInputChange}
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
              </div>
              <div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Spacing lg="150" md="80" />
      <div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </div>
      <Spacing lg="50" md="40" />
    </>
  );
}
