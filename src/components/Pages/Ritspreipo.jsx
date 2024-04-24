
import React, { useEffect, useState } from 'react';

const Ritspreipo = () => {

   const [formData, setFormData] = useState({
     name: '',
     email: '',
     mobile: '',

   });
   const [success, setSuccess] = useState(false)
 
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value,
     });
   };
 
 
   const isEmailValid = (email) => {
     // Basic email validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   };
 
   const isMobileValid = (mobile) => {
     // Basic mobile number validation (10 digits)
     const mobileRegex = /^\d{10}$/;
     return mobileRegex.test(mobile);
   };
 

 
   const handleSubmit = async (e) => {
     e.preventDefault();
  if (!formData.name) {
       alert('Name is mandatory!');
       return;
     }
     // Validate email, mobile, and LinkedIn before submitting
     if (!isEmailValid(formData.email)) {
       alert('Invalid email address');
       return;
     }
 
     if (!isMobileValid(formData.mobile)) {
       alert('Invalid mobile number');
       return;
     }
 
    
 
 
     const comment = `contact - ${formData.mobile} page-pre-ipo`;
 
     // Create payload for API
     const payload = {
       name: formData.name,
       email: formData.email,
       // linkedin: "contact-" + formData.linkedin, 
       sponsor: `contact-${formData.mobile}`,
 
       message: comment,
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
     setSuccess(true)
 
     setFormData({
       name: '',
       email: '',
      
       mobile: '',
   
     });
   };
 
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
   <div className="preipoWrapper">
   <div className="pageWrapper  ">
       <h2>From Little Seeds Growth Mighty Trees</h2>
       <div className="row">
           <div className="col-md-8">
               <div className="container text-center">
                   <div className="row">
                       <div className="col-md-6">
                           <div className="box">
                               <p>PRE IPO </p>
                               <p>Average Return</p>
                               <button>50-85%</button>
                           </div>
                           
                       </div>
                       <div className="col-md-6">
                           <div className="box">
                               <p>Start Up</p>
                               <p>Opportunity</p>
                               <p>to invest in </p>
                               <p>high growth</p>
                               <p>Start Up</p>
                           </div>
                       </div>
                       <div className="col-md-6">
                           <p>Want to know secret to grow your wealth</p>
                           <p>Contact us Now +91 9810915695</p>
                           <p>support@ritscapital.com</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className="col-md-4">
               <form onSubmit={handleSubmit} className="text-center" action="#" method="post">
                   <br/>
                   <input type="text"  value={formData.name} onChange={handleInputChange} name="name" placeholder="Full Name" required />
                   <input type="number"  name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Mobile No" required/>
                   <input type="text"  value={formData.email} onChange={handleInputChange} name="email" placeholder="Email id" required/>
                   <input type="submit" id="email" value="Register Now" name="submit"/>
                 {success &&   <p className="text-success">Thanks, We will connect you soon! </p>}
                   <br/>
                   <p>Get free Pre IPO</p>
                   <p>Share in prominent companies</p>

               </form>
           </div>
       </div>
   </div>
</div>
  )
}

export default Ritspreipo