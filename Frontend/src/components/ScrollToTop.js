import React from 'react';
import {BsFileArrowUpFill} from 'react-icons/bs';

const ScrollToTop = ({ onClick }) => {
    return (
      <button
        className="fixed bottom-4 right-4 text-[var(--primary-color)]"
        onClick={onClick}
      >
        <BsFileArrowUpFill className='text-4xl'/>
      </button>
    );
  };

export default ScrollToTop;
