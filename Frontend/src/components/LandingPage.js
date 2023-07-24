import React from "react";
import { BsSendFill } from "react-icons/bs";
import software from "../assets/software.png";
import digital from "../assets/digital.png";
import website from "../assets/website.png";
import app from "../assets/mobile-app.png";
import bg from "../assets/bg.png";
import team from "../assets/team.png";
import { MdVerified } from "react-icons/md";
import { HiStar } from "react-icons/hi";
import { BsRocketTakeoffFill } from "react-icons/bs";
// import emailjs from "@emailjs/browser";
// import { toast , Toaster } from "react-hot-toast";
import LogoCarousel from "./LogoCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import { useNavigate } from "react-router-dom";
import Form from "./Form";



function LandingPage() {
  const navigate = useNavigate();
  function movePageHandler() {
     const targetElement = document.getElementById('inquiryForm');
    targetElement.scrollIntoView({ behavior: 'smooth' });

    //move to another component
    navigate("/website-development/contact-us/#inquiryForm");
  }
  
  //Quick Inquiry Form to send data on mail
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   // emailjs
  //   //   .sendForm(
  //   //     "service_ascqj24",
  //   //     "template_ttahjho",
  //   //     form.current,
  //   //     "GNVaFKkDpRObcwGsq"
  //   //   )
  //   //   .then(
  //   //     (result) => {
  //   //       console.log(
  //   //         "Thanks for submitting your enquiry our team will contact you shortly."
  //   //       );
  //   //       toast.success(
  //   //         "Thanks for submitting your enquiry our team will contact you shortly."
  //   //       );
  //   //     },
  //   //     (error) => {
  //   //       console.log(error.text);
  //   //       toast.error(error.text);
  //   //     }
  //   //   );

  //   //connect with goolge sheets
  //   const formElem = document.querySelector("#inquiryForm");
  //   e.preventDefault();
  //   console.log("Submitted");
  //   const formData = new FormData(formElem);
  //    fetch(
  //     "https://script.google.com/macros/s/AKfycbwksJpkV40ojBM8vPSM5SHmSGG2Vm2LoCHLos7TdUCp_RR6i72Z8Zn6gUhWFmMIhsNbXg/exec",
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

  //   document.querySelector("#name").value = "";
  //   document.querySelector("#email").value = "";
  //   document.querySelector("#phone").value = "";
  //   document.querySelector("#service_interested").value = "";
  // };

  return (
    <main>
      {/* Landing Page */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <section
        className="hero-section min-h-[150vh] w-full flex justify-evenly items-center p-[var(--default-padding-x)] bg-[var(--bg-light-color)] flex-col pt-10 pb-20 md:flex-row xl:min-h-[90vh] md:min-h-[100vh] lg:justify-center lg:pt-10 lg:min-h-[140vh]"
        style={{ backgroundImage: `url(${bg})`, backgroundSize:'cover', backgroundPosition:"center" }}
      >
        <div className="w-full flex justify-center items-center md:justify-start md:items-start flex-col text-center md:text-left md:w-[60%]">
          <h1 className="animate__animated animate__slideInLeft ">
            Grow Your Business With <br />
            Our Complete IT Services & Solutions
          </h1>
          <p className="text-xl font-semibold animate__animated animate__slideInLeft">
            Delivering Successful results to our Client.
          </p>
          <br />
          <LogoCarousel />

          {/* mobile view section */}
          <section className="mt-5 w-[100%] border-2 border-[var(--secondary-color)] min-h-[100px] py-5 rounded-2xl flex justify-around items-center text-[var(--text-light)] lg:w-[70%]">
            <div className="text-center animate__animated animate__zoomIn">
              <div className="">
                <MdVerified className="text-2xl mx-auto mb-2 text-[var(--secondary-color)]" />
              </div>
              <h5 className="text-[var(--primary-color)]">Top Rated</h5>
              <p className=" text-[var(--secondary-color)] font-semibold text-xs">
                IT Company
              </p>
            </div>

            <div className="text-center animate__animated animate__zoomIn">
              <div className="">
                <HiStar className="text-2xl mx-auto mb-2  text-[var(--secondary-color)]" />
              </div>
              <h5 className="text-[var(--primary-color)]">7+ Years</h5>
              <p className=" text-[var(--secondary-color)] font-semibold text-xs">
                Experience
              </p>
            </div>

            <div className="text-center animate__animated animate__zoomIn">
              <div className="">
                <BsRocketTakeoffFill className="text-2xl mx-auto mb-2  text-[var(--secondary-color)]" />
              </div>
              <h5 className="text-[var(--primary-color)]">500+ Website</h5>
              <p className=" text-[var(--secondary-color)] font-semibold text-xs">
                Hosted
              </p>
            </div>
          </section>

          <br />
         

          <button
            onClick={movePageHandler}
            className="animate__animated animate__slideInUp border-2 rounded-full py-3 px-8 border-[var(--secondary-color)] font-semibold flex items-center transition-all hover:bg-[var(--primary-color)] hover:text-[var(--text-light)] hover:border-[var(--text-light)]"
          >
            Request a quote
            <BsSendFill className="ml-2" />
          </button>
         
          <br />
        </div>
        {/* <div className="w-[90%] md:w-[40%] mt-10 lg:mt-0">
          <div className="w-full mx-auto flex justify-center items-center flex-col bg-[var(--secondary-color)] py-10 rounded-2xl xl:w-[80%] animate__animated animate__slideInRight">
            <h2 className="text-[var(--text-light)] mb-8">Quick Inquiry</h2>
            <form
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
            </form>
          </div>
        </div> */}
<div className="w-[90%] md:w-[40%] mt-10 lg:mt-0">
<Form/>
</div>
        
      </section>

      <section className="services min-h-[50vh] w-full flex justify-center items-center flex-col text-center my-[50px] p-[var(--default-padding-x)] lg:my-[100px]">
        <h2 className="animate__animated animate__zoomIn">Services we offer</h2>
        <p className="text-xl animate__animated animate__fadeIn">
          More Than Solutions
        </p>

        <div className="w-[90%] flex justify-evenly items-center text-center pt-20 flex-wrap md:w-[80%] lg:w-full">
          <div className="relative animate__animated animate__zoomIn bg-[var(--secondary-color)] text-[var(--text-light)] w-[270px] h-[150px] rounded-md flex justify-center items-center flex-col mb-20 lg:mb-0">
            <div className="bg-[var(--primary-color)] p-4 w-[70px] h-[70px] object-contain rounded-full absolute -top-8">
              <img src={software} alt="icon" />
            </div>

            <p className="mt-4 text-xl font-semibold">
              Software
              <br /> Development
            </p>
          </div>
          <div className="relative animate__animated animate__zoomIn bg-[var(--secondary-color)] text-[var(--text-light)] w-[270px] h-[150px] rounded-md flex justify-center items-center flex-col mb-20 lg:mb-0">
            <div className="bg-[var(--primary-color)] p-4 w-[70px] h-[70px] object-contain rounded-full absolute -top-8">
              <img src={website} alt="icon" />
            </div>
            <p className="mt-4 text-xl font-semibold">
              Website <br />
              Development
            </p>
          </div>
          <div className="relative animate__animated animate__zoomIn bg-[var(--secondary-color)] text-[var(--text-light)] w-[270px] h-[150px] rounded-md flex justify-center items-center flex-col mb-20 lg:mb-0">
            <div className="bg-[var(--primary-color)] p-4 w-[70px] h-[70px] object-contain rounded-full absolute -top-8">
              <img src={digital} alt="icon" />
            </div>
            <p className="mt-4 text-xl font-semibold">
              Digital <br />
              Marketing
            </p>
          </div>
          <div className="relative animate__animated animate__zoomIn bg-[var(--secondary-color)] text-[var(--text-light)] w-[270px] h-[150px] rounded-md flex justify-center items-center flex-col mb-20 lg:mb-0">
            <div className="bg-[var(--primary-color)] p-4 w-[70px] h-[70px] object-contain rounded-full absolute -top-8">
              <img src={app} alt="icon" />
            </div>
            <p className="mt-4 text-xl font-semibold">
            Mobile <br></br>Application Development
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] w-full flex justify-start items-center flex-col p-[var(--default-padding-x)] text-center">
        <h2 className="animate__animated animate__zoomIn">
          Collaborate with India's leading website designers and developers.
        </h2>
        <p className="text-xl animate__animated animate__fadeIn">
          100% Happy Customers | 7+ Years of experience | 500+ Projects
          Completed
        </p>
        <br />
        <div className="w-full min-h-[300px] lg:min-h-[400px]">
          <img
            src={team}
            alt="team"
            className="mx-auto animate__animated animate__zoomIn"
          />
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
