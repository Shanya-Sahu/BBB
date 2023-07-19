import { Route, Routes, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import { BsSendFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from "./assets/logo.png";
import { useState } from "react";
import "animate.css";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };




  const navigate = useNavigate();
  function movePageHandler() {
    const targetElement = document.getElementById('inquiryForm');
    targetElement.scrollIntoView({ behavior: 'smooth' });
    //move to another component
    navigate("/website-development/contact-us/#inquiryForm");
  }

  // State hook to track the menu's open/closed state
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the menu's open/closed state
  const toggleHandler = () => {
    setIsActive(!isActive);
   
  };

 

  return (
    <main>
      <nav className="top-bar w-full justify-evenly items-center bg-[var(--bg-light-color)] p-[var(--default-padding-x)] py-2 hidden md:flex">
        <div className="w-full flex justify-between items-center lg:w-[70%] lg:justify-start">
          <Link
            to="mailto:info@bigbrandbucket.com"
            className="flex items-center"
          >
            <MdEmail />
            <li className="ml-2 list-none var(--secondary-color)">
              info@bigbrandbucket.com
            </li>
          </Link>
          <Link to="telto:9149039480" className="flex items-center ml-4">
            <FaPhoneAlt />
            <li className="ml-2 list-none var(--secondary-color)">
              +91-9149-039-480
            </li>
          </Link>
        </div>

        <div className="w-[70%] justify-end items-center hidden lg:flex">
          <button
            onClick={movePageHandler}
            className="border-2 rounded-full py-3 px-8 border-[var(--secondary-color)] font-semibold flex items-center transition-all hover:bg-[var(--primary-color)] hover:text-[var(--text-light)] hover:border-[var(--text-light)]"
          >
            Request a quote <BsSendFill className="ml-2" />
          </button>
        </div>
      </nav>
      <nav className="navbar z-10 sticky top-0 w-full flex justify-between items-center bg-[var(--secondary-color)] p-[var(--default-padding-x)] lg:justify-evenly">
        <Link
          to="/website-development"
          className="w-[40%] text-[var(--text-light)] xl:w-[60%]"
        >
          <img
            src={Logo}
            alt="logo"
            className="w-[100px] h-[100px] object-contain"
          />
        </Link>
        <ul
          id="navList"
          className={`navList ${
            isActive
              ? "isActive animate__animated animate__fadeInDown"
              : "unActive"
          } w-[100%] h-[300px] py-5 absolute top-24 left-0 text-center bg-[var(--secondary-color)] justify-evenly items-center flex-wrap flex-col text-[var(--text-light)] font-semibold text-xl lg:text-base lg:flex xl:w-[40%] lg:flex-col lg:justify-around lg:static lg:bg-transparent lg:h-0 lg:text-left lg:top-0 lg:py-0`}
        >
          <li className="hover:text-[var(--primary-color)]">
            <NavLink to="/website-development" onClick={toggleHandler}>Home</NavLink>
          </li>

          <li className="hover:text-[var(--primary-color)]">
            <NavLink to="/website-development/about-us" onClick={toggleHandler}>About Us</NavLink>
          </li>

          <li className="hover:text-[var(--primary-color)]">
            <NavLink to="/website-development/contact-us" onClick={toggleHandler}>Contact Us</NavLink>
          </li>
        </ul>

        <div
          className="hamburger-menu text-[var(--text-light)] block lg:hidden"
          id="toggleBtn"
          onClick={toggleHandler}
        >
          <HiOutlineMenu className="text-4xl" />
        </div>
      </nav>

      <Routes>
        {/* nested routing */}
        <Route path="/" element={<NavBar />}>
          {/*  home becomes default route */}
          <Route path="/website-development" element={<LandingPage />} />
          <Route index element={<LandingPage />} />
          <Route
            path="/website-development/about-us"
            element={<About />}
          ></Route>
          <Route
            path="/website-development/contact-us"
            element={<Contact />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
      <NavBar />

      <Footer />

      <ScrollToTop onClick={scrollToTop} />
    </main>
  );
}

export default App;
