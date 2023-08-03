import React, { useState } from 'react';
import logo from '../assets/logo-light.jpeg';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiGridAlt } from 'react-icons/bi';
import { TbUsers } from 'react-icons/tb';
import { FiUser, FiUserPlus } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import DashboardHome from './DashboardHome';
import ClientList from './ClientList';
import NewClient from './NewClient';
import AdminProfile from './AdminProfile';
import Logout from './Logout';
import ManageClients from './ManageClients';

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <DashboardHome />;
      case 'manageClients':
        return <ManageClients />;
      case 'newClient':
        return <NewClient />;
        case 'clientList':
          return <ClientList />;
      case 'adminProfile':
        return <AdminProfile />;
        case 'logout':
        return <Logout />;
      // Add more cases for other components
      default:
        return null;
    }
  };

  return (
    <div>
      <nav className='w-full py-2 px-5 flex justify-between items-center border-b-2 sticky top-0 bg-white z-50'>
        <div className='w-[20%]'>
            <img src={logo} alt="logo" className='h-[70px]'/>
        </div>
        <div className='w-[80%] flex items-start justify-end'>
            <div className="profile flex justify-center items-center">
                <div className='mr-2'>
                <AiOutlineUserAdd className='text-5xl'/>
                </div>
                <div>
                <h5>BBB</h5>
                <p className='text-xs'>Admin</p>
                </div>
            </div>
        </div>
      </nav>
      <section className="w-full flex justify-between items-start">
        <div className="sidebar w-[15%] h-[87.5vh] border-r-2 sticky top-[90px] p-4">
          <ul>
            <li
              className={`flex justify-start py-2 cursor-pointer hover:text-[var(--primary-color)] ${
                activeComponent === 'dashboard' ? 'text-[var(--primary-color)] bg-[#FFF7F0] px-5 rounded-md' : ''
              }`}
              onClick={() => handleMenuItemClick('dashboard')}
            >
              <BiGridAlt className="mr-2 text-xl" /> Dashboard
            </li>
            <li
              className={`flex justify-start py-2 cursor-pointer hover:text-[var(--primary-color)] ${
                activeComponent === 'manageClients' ? 'text-[var(--primary-color)] bg-[#FFF7F0] px-5 rounded-md' : ''
              }`}
              onClick={() => handleMenuItemClick('manageClients')}
            >
              <TbUsers className="mr-2 text-xl" /> Manage Clients
            </li>
            <li
              className={`ml-5 flex justify-start py-2 cursor-pointer hover:text-[var(--primary-color)] ${
                activeComponent === 'newClient' ? 'text-[var(--primary-color)] bg-[#FFF7F0] px-5 rounded-md' : ''
              }`}
              onClick={() => handleMenuItemClick('newClient')}
            >
              <FiUserPlus className="mr-2 text-xl" /> New Client
            </li>
            <li
              className={`ml-5 flex justify-start py-2 cursor-pointer hover:text-[var(--primary-color)] ${
                activeComponent === 'clientList' ? 'text-[var(--primary-color)] bg-[#FFF7F0] px-5 rounded-md' : ''
              }`}
              onClick={() => handleMenuItemClick('clientList')}
            >
              <AiOutlineUsergroupAdd className="mr-2 text-xl" /> Client List
            </li>
            <li
              className={`flex justify-start py-2 cursor-pointer hover:text-[var(--primary-color)] ${
                activeComponent === 'adminProfile' ? 'text-[var(--primary-color)] bg-[#FFF7F0] px-5 rounded-md' : ''
              }`}
              onClick={() => handleMenuItemClick('adminProfile')}
            >
              <FiUser className="mr-2 text-xl" /> Admin Profile
            </li>
            <li
          className={`flex justify-start py-2 cursor-pointer hover:text-[var(--primary-color)] ${
            activeComponent === 'logout' ? 'text-[var(--primary-color)] bg-[#FFF7F0] px-5 rounded-md' : ''
          }`}
          onClick={() => handleMenuItemClick('logout')}
        >
          <MdLogout className="mr-2 text-xl" /> Logout
        </li>
      </ul>
    </div>
    <div className="main w-[85%] p-4 bg-[var(--bg-light)]">{renderComponent()}</div>
  </section>
</div>

  
  );
}

export default Dashboard;
