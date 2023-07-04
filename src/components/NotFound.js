import React from 'react';
import notFound from '../assets/404.jpg';

function NotFound() {
  return (
    <div className='h-[90vh] bg-[#F9F9F9] flex justify-center items-center'>
     <img src={notFound} alt="404 Page Not-Found" className='mx-auto w-full h-[50vh] object-contain'/>
    </div>
  );
}

export default NotFound;
