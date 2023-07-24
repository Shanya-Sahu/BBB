import React from "react";
import bg from "../assets/bg.png";
// import emailjs from "@emailjs/browser";
// import { toast, Toaster } from "react-hot-toast";
// import { BsSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "animate.css";
import Form from './Form';




function Contact() {
  

   //Quick Inquiry Form to send data on mail
  //  const form = useRef();

  //  const sendEmail = (e) => {
  //    e.preventDefault();
 
  //   //  emailjs
  //   //    .sendForm(
  //   //      "service_ascqj24",
  //   //      "template_ttahjho",
  //   //      form.current,
  //   //      "GNVaFKkDpRObcwGsq"
  //   //    )
  //   //    .then(
  //   //      (result) => {
  //   //        console.log(
  //   //          "Thanks for submitting your enquiry our team will contact you shortly."
  //   //        );
  //   //        toast.success(
  //   //          "Thanks for submitting your enquiry our team will contact you shortly."
  //   //        );
  //   //      },
  //   //      (error) => {
  //   //        console.log(error.text);
  //   //        toast.error(error.text);
  //   //      }
  //   //    );
 
  //    //connect with goolge sheets
  //    const formElem = document.querySelector("#inquiryForm");
  //    e.preventDefault();
  //    console.log("Submitted");
  //    const formData = new FormData(formElem);
  //     fetch(
  //      "https://script.google.com/macros/s/AKfycbwksJpkV40ojBM8vPSM5SHmSGG2Vm2LoCHLos7TdUCp_RR6i72Z8Zn6gUhWFmMIhsNbXg/exec",
  //      {
  //        method: "POST",
  //        body: formData,
  //      }
  //    )
  //      .then(
  //        toast.success(
  //          "Thanks for submitting your enquiry our team will contact you shortly."
  //        )
  //      )
  //      .catch((e) => toast.error("Something wrong!"));
 
  //    document.querySelector("#name").value = "";
  //    document.querySelector("#email").value = "";
  //    document.querySelector("#phone").value = "";
  //   document.querySelector("#service_interested").value = "";

  //  };

   
  return (
    <div id="top-section">
      {/* <Toaster position="top-right" reverseOrder={false} /> */}

    <section className="min-h-[30vh] w-full flex justify-evenly items-center p-[var(--default-padding-x)] bg-[var(--bg-light-color)] flex-col md:flex-row lg:justify-center "
     style={{ backgroundImage: `url(${bg})`, backgroundSize:'cover', backgroundPosition:"center" }}>
       <h1 className="animate__animated animate__slideInLeft ">
         Contact Us
       </h1>
     </section>

<section className="w-full flex justify-evenly items-center py-[50px] flex-col md:flex-row">
    <div className="animate__animated animate__zoomIn m-5 w-[300px] h-[350px] bg-[var(--secondary-color)] p-10 text-center text-[var(--text-light)] rounded-xl flex justify-center items-center flex-col md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[250px]">
    <MdEmail className="text-5xl mx-auto mb-3"/>
      <h4>Contact With Mail</h4>
      <Link
            to="mailto:info@bigbrandbucket.com"
            className="mx-auto"
          >
            <li className="list-none var(--secondary-color)">
              info@bigbrandbucket.com
            </li>
          </Link>
    </div>


    <div className="animate__animated animate__zoomIn m-5 w-[300px] h-[350px] bg-[var(--secondary-color)] p-10 text-center text-[var(--text-light)] rounded-xl flex justify-center items-center flex-col md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[250px]">
    <FaPhoneAlt className="text-5xl mx-auto mb-3"/>
      <h4>Phone Support</h4>
      <Link to="telto:9149039480" className="mx-auto">
            <li className="list-none var(--secondary-color)">
              +91-9149-039-480
            </li>
          </Link>
    </div>


    <div className="animate__animated animate__zoomIn m-5 w-[300px] h-[350px] bg-[var(--secondary-color)] p-10 text-center text-[var(--text-light)] rounded-xl flex justify-center items-center flex-col md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[250px]">
    <FaMapMarkerAlt className="text-5xl mx-auto mb-3"/>
      <h4>Address</h4>
      <p>Plot No. 76 D, Udyog Vihar Phase 4,
Gurugram, Haryana 122001</p>
    </div>
</section>

     <section className="py-10 w-full flex justify-evenly items-center p-[var(--default-padding-x)]">
       
     <div className="w-[100%] ">
          {/* <div className="w-full mx-auto flex justify-center items-center flex-col bg-[var(--secondary-color)] py-10 rounded-2xl xl:w-[80%] animate__animated animate__slideInRight"> */}
            {/* <h2 className="text-[var(--text-light)] mb-8">Get in touch with us</h2> */}
            {/* <form
              id="inquiryForm"
              ref={form}
              onSubmit={sendEmail}
              className="px-[40px] w-full flex justify-start items-start flex-col"
            >
              <input
                type="text"
                name="user_name"
                id="name"
                className="w-full focus:outline-none border-b-2 mb-10 bg-transparent text-[var(--text-light)] border-[var(--text-light)] transition-all focus:border-[var(--primary-color)] focus:pb-2 outline-[var(--secondary-color)]"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="user_email"
                id="email"
                className="w-full focus:outline-none border-b-2 mb-10 bg-transparent text-[var(--text-light)] border-[var(--text-light)] transition-all focus:border-[var(--primary-color)] focus:pb-2 outline-[var(--secondary-color)]"
                placeholder="Email"
                required
              />
              <input
                type="phone"
                name="mobile_no"
                id="phone"
                className="w-full focus:outline-none border-b-2 mb-10 bg-transparent text-[var(--text-light)] border-[var(--text-light)] transition-all focus:border-[var(--primary-color)] focus:pb-2 outline-[var(--secondary-color)]"
                placeholder="Phone Number"
                required
              />
               <select required id="service_interested" name="service_interested" className="w-full focus:outline-none border-b-2 mb-10 bg-[var(--secondary-color)] text-[var(--text-light)] border-[var(--text-light)] transition-all focus:border-[var(--primary-color)] focus:pb-2 outline-[var(--secondary-color)] ">
                <option value="" disabled selected>Service interested in</option>
                  <option value="website-dev" className="hover:bg-[var(--bg-light-color)] hover:text-[var(--secondary-color)]">Website Development</option>
                  <option value="software-dev">Software Development</option>
                  <option value="mobile-dev">Mobile Application Development</option>
                  <option value="digital-mar">Digital Marketing</option>
              </select>

              <button className="mx-auto border-2 rounded-full py-3 px-8 border-[var(--text-light)] text-[var(--text-light)] font-semibold flex items-center transition-all hover:bg-[var(--primary-color)] hover:text-[var(--text-light)] hover:border-[var(--primary-color)]">
                Submit
                <BsSendFill className="ml-2" type="submit" value="Send" />
              </button>
            </form> */}

            <Form/>
          </div>
          {/* </div> */}


     </section>
     
<div className='full -mt-[200px]'>
<iframe title="map" className='w-full h-[500px]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112260.54879994725!2d77.013056!3d28.445131000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1782c3cf1cb9%3A0x84ee46ff7143a836!2sSector%209%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1682926715169!5m2!1sen!2sin"></iframe>
</div>
 </div>
  );
}

export default Contact;
