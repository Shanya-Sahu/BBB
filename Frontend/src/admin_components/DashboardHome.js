import React from 'react';
import {FiUserX, FiUserMinus, FiUserCheck, FiUsers} from "react-icons/fi";
// import GraphComponent from './GraphComponent';



function DashboardHome() {
  return (
    <div>
      <div className='flex justify-evenly items-center flex-wrap'>
        <div className='flex justify-between items-center w-[20%] h-[150px] bg-[var(--bg-dark-color)] p-5 rounded-md text-white m-2'>
          <div>
            <h3>All</h3>
            <p>100 Clients</p>
          </div>
          <div>
          <FiUsers className='text-5xl'/>
          </div>
        </div>


        <div className='flex justify-between items-center w-[20%] h-[150px] bg-[#28C76F] p-5 rounded-md text-white m-2'>
          <div>
            <h3>Confirmed</h3>
            <p>70 Clients</p>
          </div>
          <div>
          <FiUserCheck className='text-5xl'/>
          </div>
        </div>

        <div className='flex justify-between items-center w-[20%] h-[150px] bg-[#00CFE8] p-5 rounded-md text-white m-2'>
          <div>
            <h3>Pending</h3>
            <p>20 Clients</p>
          </div>
          <div>
          <FiUserMinus className='text-5xl'/>
          </div>
        </div>

        <div className='flex justify-between items-center w-[20%] h-[150px] bg-red-500 p-5 rounded-md text-white m-2'>
          <div>
            <h3>Canceled</h3>
            <p>10 Clients</p>
          </div>
          <div>
          <FiUserX className='text-5xl'/>
          </div>
        </div>
      </div>

      {/* <GraphComponent/> */}
    </div>
  );
}

export default DashboardHome;
