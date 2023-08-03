import React from 'react';
import { useNavigate } from "react-router-dom";


function Logout() {
  const navigate = useNavigate();
  function movePageHandler() {
    //move to another component
    navigate("/website-development");
  }
  
  return (
    <div className='flex justify-center items-center w-full h-[70vh]'>
      <div className='p-10 w-fit shadow-lg rounded-md bg-white'>
        <h3>Do you want to Logout?</h3>
        <button onClick={movePageHandler} className="mx-auto border-2 rounded-md py-2 px-6 border-[var(--text-light)] text-[var(--text-light)] font-semibold flex items-center transition-all bg-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]">
               Yes
              </button>
      </div>
    </div>
  );
}

export default Logout;
