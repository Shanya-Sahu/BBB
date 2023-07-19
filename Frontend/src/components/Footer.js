import React from 'react';
// import {RiMailSendLine} from "react-icons/ri";
import { Link } from "react-router-dom";
import {FaPhoneAlt , FaWhatsapp} from "react-icons/fa";
import {MdEmail } from "react-icons/md";
import Logo from '../assets/logo.png';
// import emailjs from '@emailjs/browser';
// import { toast, Toaster } from 'react-hot-toast';




function Footer() {

  function movePageHandler() {
    const targetElement = document.getElementById('top-section');
   targetElement.scrollIntoView({ behavior: 'smooth' });

 }

  //Newsletter
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_ascqj24', 'template_lflur37', form.current, 'GNVaFKkDpRObcwGsq')
  //     .then((result) => {
  //         console.log("Thanks for submitting your enquiry our team will contact you shortly.");
  //         toast.success('Thanks for submitting your enquiry our team will contact you shortly.');

  //     }, (error) => {
  //         console.log(error.text);
  //         toast.success(error.text);

  //     });


  //     //connect with goolge sheets
  //   const formElem = document.querySelector("#newsletter");
  //   e.preventDefault();
  //   console.log("Submitted");
  //   const formData = new FormData(formElem);
  //    fetch(
  //     "https://script.google.com/macros/s/AKfycbytZOdWTZs7EFlmtoI71rkm_zBg6mG0NiDumtjjowCizBF6tH_5FGY3IFXJ5xvIwmvMTA/exec",
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   )
  //     .then(
  //       toast.success(
  //         "Thanks for submitting your enquiry our team will contact you shortly."
  //       )
  //     )
  //     .catch((e) => toast.error("Something wrong!"));

  //     document.querySelector('#newsletter-email').value='';

  // };

  return (
    <div className='footer text-[var(--text-light)] '>
     {/* <Toaster
  position="top-right"
  reverseOrder={false}
/>
        <div className="newsletter bg-[var(--secondary-color)] p-[var(--default-padding-x)] text-[var(--text-light)] py-10 text-center">
           <h2 className=''>Subscribe To Our Newsletter</h2>
                <form id="newsletter" ref={form} onSubmit={sendEmail}  className='border-2 bg-transparent rounded-full px-5 flex py-2 items-center w-[90%] mx-auto lg:w-[30%]'>
                <input type="email" name="user_email" id="newsletter-email" placeholder='Email Address' className='bg-transparent border-none focus:outline-none w-[95%]' required/>
          <button><RiMailSendLine/></button>  
                </form>
            
          
            
        </div> */}
   <footer className='min-h-[120vh] w-full flex justify-evenly items-center flex-wrap flex-col bg-[var(--secondary-color)] p-[var(--default-padding-x)] text-[var(--text-light)] py-10 lg:flex-row lg:items-start lg:min-h-fit'>
   
   <div className='w-full lg:w-[20%] flex justify-center flex-col items-center lg:items-start'>
        <img src={Logo} alt="logo" className='w-[150px] object-contain' /> <br />
        <p className='text-center lg:text-left'>Grow your Business With Our Complete IT Services & Solutions</p>
   </div>
   <div>
        <h3 className='text-[var(--primary-color)] uppercase'>Quick Links</h3>
        <ul className="text-[var(--text-light)] text-center lg:text-left">
          <li className='text-[var(--text-light)] pb-2'>
            <Link to="/website-development">Home</Link>
          </li>

          <li className='pb-2'>
            <Link to="/website-development/about-us">About</Link>
          </li>

          <li className='pb-2' onClick={movePageHandler}>
            <Link to="/website-development/contact-us/#top-section">Contact Us</Link>
          </li>
        </ul>
   </div>


   <div className='text-center lg:text-left'>
        <h3 className='text-[var(--primary-color)] uppercase'>Contact Info</h3>
        <ul className="text-[var(--text-light)] flex justify-center items-center flex-col lg:block">
          

        <Link to='mailto:info@bigbrandbucket.com' className="flex items-center pb-2">  <MdEmail/> <li className="ml-2 list-none var(--secondary-color)">  info@bigbrandbucket.com</li></Link>
      <Link to='telto:9149039480' className="flex items-center pb-2">  <FaPhoneAlt/><li className="ml-2 list-none var(--secondary-color)">+91-9149-039-480</li></Link>
         
        <div className='sm-icon flex'>
            <div className='rounded-full p-3 bg-[var(--bg-dark-color)] cursor-pointer transition-all hover:bg-[var(--bg-light-color)] hover:text-[var(--secondary-color)] m-1 text-xl'>
           <Link to="mailto:info@bigbrandbucket.com;"><MdEmail/></Link> 
            </div>
            <div className='rounded-full p-3 bg-[var(--bg-dark-color)] cursor-pointer transition-all hover:bg-[var(--bg-light-color)] hover:text-[var(--secondary-color)] m-1 text-xl'>
           <Link to="https://wa.me/919149039480"><FaWhatsapp/></Link> 
            </div>
            
            

        </div>
          

         
        </ul>
   </div>

   <div className='text-center lg:text-left'>
        <h3 className='text-[var(--primary-color)] uppercase'>Our Branches </h3>
       <h4>Gurugram</h4>
       <p>Plot No. 76 D, Udyog Vihar Phase 4,<br/>
          Gurugram, Haryana 122001</p>
<br />
          <h4>New Delhi</h4>
       <p>22/22B, First Floor, Tilak Nagar,<br/>
New Delhi 110018</p>
   </div>
  
  
   </footer>

   <div className="bottom-bar w-full flex justify-evenly items-center bg-[var(--bg-light-color)] p-[var(--default-padding-x)] text-[var(--secondary-color)] py-2 text-center">
        <p className='font-semibold'>Big Brand Bucket Pvt. Ltd. Copyright © since 2023. All Rights Reserved</p>
   </div>
   </div>
  );
}

export default Footer;
