import React from 'react';
import bg from "../assets/bg.png";
import about from "../assets/about.png";
import "animate.css";



function About() {
  return (
    <div id='redirect'>
       <section className="hero-section min-h-[30vh] w-full flex justify-evenly items-center p-[var(--default-padding-x)] bg-[var(--bg-light-color)] flex-col md:flex-row lg:justify-center "
        style={{ backgroundImage: `url(${bg})`, backgroundSize:'cover', backgroundPosition:"center" }}>
          <h1 className="animate__animated animate__slideInLeft ">
            About Us
          </h1>
        </section>

        <section className="pt-[50px] hero-section py-10 w-full flex justify-evenly items-center p-[var(--default-padding-x)] flex-col lg:justify-center ">
          <h1 className="animate__animated animate__slideInLeft text-center">
          We Are Professional In IT Solutions And Services
          </h1>
          <p className='text-center'>BIG BRAND BUCKET PVT LTD is working from the time of 2016 by company Founder and CEO- Mr. Raghav Bhasin with a dream to wind up a main player in the field of Web arrangements, Business Consulting, IT Services and Outsourcing. We have cheerful and fulfilled customers spread everywhere throughout the world including the United Kingdom , Malaysia , UAE , Canada , Saudi Arabia , Singapore , kuwait , Australia , Nigeria , South Africa and Norway. Regardless of whether you need an appealing minimal spending site or a dynamic, e-comm. entries - we have an answer for it!
We build products as per our client requirements and scale them with our best level digital marketing solutions.
</p>

<div className="w-full">
          <img
            src={about}
            alt="team"
            className="mx-auto animate__animated animate__zoomIn"
          />
        </div>
        </section>
    </div>
   

        

  );
}

export default About;
