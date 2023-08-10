import React, { useState } from 'react';
import axios from 'axios';
import { BsSendFill } from "react-icons/bs";
import { toast , Toaster } from "react-hot-toast";


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    try {
      // Send the form data to the backend API endpoint
      await axios.post(`${process.env.REACT_APP_BASE_URL}/addNewClient`, formData);


      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service:'',
      });

          console.log(
            "Thanks for submitting your enquiry our team will contact you shortly."
          );
          toast.success(
            "Thanks for submitting your enquiry our team will contact you shortly."
          );
  
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
    
          <div className="w-full mx-auto flex justify-center items-center flex-col bg-[var(--secondary-color)] py-10 rounded-2xl xl:w-[80%] animate__animated animate__slideInRight">
            <h2 className="text-[var(--text-light)] mb-8">Quick Inquiry</h2>
            <form
              id="inquiryForm"
              onSubmit={handleSubmit}
              className="px-[40px] w-full flex justify-start items-start flex-col"
            >
              <input
              onChange={handleChange}
              value={formData.name}
                type="text"
                name="name"
                id="name"
                className="w-full focus:outline-none border-b-2 mb-10 bg-transparent text-[var(--text-light)] border-[var(--text-light)] transition-all focus:border-[var(--primary-color)] focus:pb-2 outline-[var(--secondary-color)]"
                placeholder="Full Name"
                required
              />
              <input
              onChange={handleChange}
              value={formData.email}
                type="email"
                name="email"
                id="email"
                className="w-full focus:outline-none border-b-2 mb-10 bg-transparent text-[var(--text-light)] border-[var(--text-light)] transition-all focus:border-[var(--primary-color)] focus:pb-2 outline-[var(--secondary-color)]"
                placeholder="Email"
                required
              />
              <input
              onChange={handleChange}
              value={formData.phone}
                type="phone"
                name="phone"
                id="phone"
                className="w-full focus:outline-none border-b-2 mb-10 bg-transparent text-[var(--text-light)] border-[var(--text-light)] transition-all focus:border-[var(--primary-color)] focus:pb-2 outline-[var(--secondary-color)]"
                placeholder="Phone Number"
                required
              />
              <select onChange={handleChange} value={formData.service}  required id="service_interested" name="service" className="w-full focus:outline-none border-b-2 mb-10 bg-[var(--secondary-color)] text-[var(--text-light)] border-[var(--text-light)] transition-all focus:border-[var(--primary-color)] focus:pb-2 outline-[var(--secondary-color)] ">
                <option value="" disabled>Service interested in</option>
                  <option value="Website-development" className="hover:bg-[var(--bg-light-color)] hover:text-[var(--secondary-color)]">Website Development</option>
                  <option value="software-development">Software Development</option>
                  <option value="mobile-app-development">Mobile Application Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
              </select>

              <button type='submit' className="mx-auto border-2 rounded-full py-3 px-8 border-[var(--text-light)] text-[var(--text-light)] font-semibold flex items-center transition-all hover:bg-[var(--primary-color)] hover:text-[var(--text-light)] hover:border-[var(--primary-color)]">
                Submit
                <BsSendFill className="ml-2" type="submit" value="Send" />
              </button>
            </form>
          </div>
       
     

</div>
  );
};

export default Form;
