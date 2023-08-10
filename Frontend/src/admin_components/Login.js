import React, { useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdEyeOff, IoIosEye } from "react-icons/io";
import Dashboard from "./Dashboard";
import { toast, Toaster } from "react-hot-toast";

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
      setTimeout(() => {
        toast.success("Successfully LoggedIn!");
      }, 1000);

      setIsLoggedIn(true);
    } else {
      toast.error("Please enter correct email & password!");
      setIsLoggedIn(false);
    }
  };

  const [swichPassType, setSwichPassType] = useState("password");
  function switchPassVisibility() {
    if (swichPassType === "password") {
      setSwichPassType("text");
    } else {
      setSwichPassType("password");
    }
  }

  return (
    <div>
      <Toaster />
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <div>
          <section className="flex justify-between items-start h-[100vh] w-full bg-[var(--bg-light-color)]">
            <div className="w-[40%] h-full flex justify-center items-start flex-col px-10">
              <br />
              <h3>Log In</h3>
              <p>Please login to your account</p>
              <br />
              <form id="newsletter" className="w-full" onSubmit={loginHandler}>
                <div className="bg-white p-3 w-full flex justify-between items-center rounded-md">
                  <input
                    id="email"
                    ref={email}
                    type="email"
                    name="admin_email"
                    placeholder="enter an email"
                    className="bg-white border-none focus:outline-none w-[95%]"
                    required
                  />
                  <HiOutlineMail />
                </div>
                <br />
                <div className="bg-white p-3 w-full flex justify-between items-center rounded-md">
                  <input
                    id="password"
                    ref={password}
                    type={swichPassType}
                    name="admin_password"
                    placeholder="enter a password"
                    className="bg-white border-none focus:outline-none w-[95%]"
                    required
                  />
                  <span>
                    {swichPassType === "password" ? (
                      <IoMdEyeOff onClick={switchPassVisibility} />
                    ) : (
                      <IoIosEye onClick={switchPassVisibility} />
                    )}
                  </span>
                </div>
                <br />
                <button
                  type="submit"
                  className="w-full bg-[var(--primary-color)] text-white p-3 rounded-md ext-[16px]"
                >
                  Log In
                </button>
              </form>
            </div>
            <div className="login-bg w-[60%] h-[100vh]">
              <Toaster />
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Login;
