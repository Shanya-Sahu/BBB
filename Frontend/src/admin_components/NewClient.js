import React, { useState } from 'react';
import axios from 'axios';
import { toast} from "react-hot-toast";

function NewClient() {
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
      {/* <Toaster position="top-right" reverseOrder={false} /> */}

      <section>
        <h5 className='text-lg'>New Client</h5>
        <p>Add new client</p>
        </section>
        <div className="m-5 bg-white p-5 border-2 rounded-md">
          <form className='w-full flex justify-between items-center flex-wrap' onSubmit={handleSubmit}> 
          <div className='w-[49%] my-3'>
          <label htmlFor="" className='text-sm'>Name</label><br />
          <input  onChange={handleChange}
              value={formData.name}
                type="text"
                name="name"
                id="name" className='p-1 border-2 rounded-md w-full' required/>
          </div>
          <div className='w-[49%] my-3'>
          <label htmlFor="" className='text-sm'>Email</label><br />
          <input onChange={handleChange}
              value={formData.email}
                type="email"
                name="email"
                id="email" className='p-1 border-2 rounded-md w-full' required/>
          </div>

          <div className='w-[49%] my-3'>
          <label htmlFor="" className='text-sm'>Phone</label><br />
          <input onChange={handleChange}
              value={formData.phone}
                type="phone"
                name="phone"
                id="phone" className='p-1 border-2 rounded-md w-full' required/>
          </div>

          <div className='w-[49%] my-3'>
          <label htmlFor="" className='text-sm'>Service interested in</label><br />
          <select required onChange={handleChange} value={formData.service}  id="service_interested" name="service" className="p-2 border-2 rounded-md w-full">
                <option value="" disabled>Select</option>
                  <option value="Website-development" >Website Development</option>
                  <option value="software-development">Software Development</option>
                  <option value="mobile-app-development">Mobile Application Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
              </select>

          </div>
          <div className='w-full mt-5'>
          <button type='submit' className="mx-auto border-2 rounded-md py-3 px-8 border-[var(--text-light)] text-[var(--text-light)] font-semibold flex items-center transition-all bg-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]">
                Add
              </button>
          </div>
          </form>
        </div>

      
    </div>
  );
}

export default NewClient;
