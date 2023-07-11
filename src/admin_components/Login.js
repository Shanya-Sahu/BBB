import React, { useRef, useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillEye } from 'react-icons/ai';
import Dashboard from './Dashboard';
import { toast, Toaster } from 'react-hot-toast';
import {RiDeleteBack2Line} from 'react-icons/ri';


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const email = useRef(null);
  const password = useRef(null);

  const admin_email = process.env.REACT_APP_ADMIN_EMAIL;
  const admin_password = process.env.REACT_APP_ADMIN_PASSWORD;

  const loginHandler = (e) => {
    e.preventDefault(); 

    const email_val = email.current.value;
    const pass_val = password.current.value;

    if (email_val === admin_email && pass_val === admin_password) {
      // alert('Logged in Successfully!');

      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <h5 className="text-sm text-gray-900 font-semibold">
                  Successfully Logged In!
                </h5>
                <p className="mt-1 text-sm text-gray-500">
                  Admin
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#FF7E28] hover:text-[#FF7E28] focus:outline-none focus:ring-2 focus:ring-[#FF7E28]"
            >
             <RiDeleteBack2Line className='text-[#FF7E28] text-4xl'/>
            </button>
          </div>
        </div>
      ));


      setIsLoggedIn(true);
    } else {
      toast.error("Please enter correct email & password!");
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      <Toaster/>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <div>
          <section className='flex justify-between items-start h-[100vh] w-full bg-[var(--bg-light-color)]'>
            <div className='w-[40%] h-full flex justify-center items-start flex-col px-10'>
              <br />
              <h3>Log In</h3>
              <p>Please login to your account</p>
              <br />
              <form id='newsletter' className='w-full' onSubmit={loginHandler}>
                <div className='bg-white p-3 w-full flex justify-between items-center rounded-md'>
                  <input
                    id='email'
                    ref={email}
                    type='email'
                    name='admin_email'
                    placeholder='enter an email'
                    className='bg-white border-none focus:outline-none w-[95%]'
                    required
                  />
                  <HiOutlineMail />
                </div>
                <br />
                <div className='bg-white p-3 w-full flex justify-between items-center rounded-md'>
                  <input
                    id='password'
                    ref={password}
                    type='password'
                    name='admin_password'
                    placeholder='enter a password'
                    className='bg-white border-none focus:outline-none w-[95%]'
                    required
                  />
                  <AiFillEye />
                </div>
                <br />
                <button
                  type='submit'
                  className='w-full bg-[var(--primary-color)] text-white p-3 rounded-md ext-[16px]'
                >
                  Log In
                </button>
              </form>
            </div>
            <div className='login-bg w-[60%] h-[100vh]'>
           <Toaster/>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Login;
