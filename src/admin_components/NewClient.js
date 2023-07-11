import React from 'react';

function NewClient() {
  const addNewClientHandler = (e) =>{
    e.preventDefault(); 
  }
  return (
    <div>
      <section>
        <h5 className='text-lg'>New Client</h5>
        <p>Add new client</p>
        </section>
        <div className="m-5 bg-white p-5 border-2 rounded-md">
          <form className='w-full flex justify-between items-center flex-wrap' onSubmit={addNewClientHandler}> 
          <div className='w-[49%] my-3'>
          <label htmlFor="" className='text-sm'>Name</label><br />
          <input type="text" className='p-1 border-2 rounded-md w-full' required/>
          </div>
          <div className='w-[49%] my-3'>
          <label htmlFor="" className='text-sm'>Email</label><br />
          <input type="email" className='p-1 border-2 rounded-md w-full' required/>
          </div>

          <div className='w-[49%] my-3'>
          <label htmlFor="" className='text-sm'>Phone</label><br />
          <input type="number" className='p-1 border-2 rounded-md w-full' required/>
          </div>

          <div className='w-[49%] my-3'>
          <label htmlFor="" className='text-sm'>Service interested in</label><br />
          <select required id="service_interested" name="service_interested" className="p-2 border-2 rounded-md w-full">
                <option value="" disabled selected>Select</option>
                  <option value="website-dev" >Website Development</option>
                  <option value="software-dev">Software Development</option>
                  <option value="mobile-dev">Mobile Application Development</option>
                  <option value="digital-mar">Digital Marketing</option>
              </select>

          </div>
          <div className='w-full mt-5'>
          <button className="mx-auto border-2 rounded-md py-3 px-8 border-[var(--text-light)] text-[var(--text-light)] font-semibold flex items-center transition-all bg-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]">
                Add
              </button>
          </div>
          </form>
        </div>
    </div>
  );
}

export default NewClient;
