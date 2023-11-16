import React from "react";
import SpaceXLogo from "./images/SpaceXLogo.png";
import backgroundImage from "./images/HeaderBackground.png";
import "./Navbar.css";
import Countdown from "react-countdown-now";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
//For opening the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
//For closing the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const initialTime = {
    days: 32,
    hours: 22,
    minutes: 32,
    seconds: 0,
  };
//For calculating the time left in timer
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetDate =
      now +
      initialTime.days * 24 * 60 * 60 * 1000 +
      initialTime.hours * 60 * 60 * 1000 +
      initialTime.minutes * 60 * 1000;

    return targetDate - now;
  };
  //In case timer gets completed
  const Completionist = () => <span>Timer Completed!</span>;

  return (
    <div
      className="w-full h-60"
      id="section1"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav className="bg-transparent h-12">
        <div className="flex l-0 w-32 logo">
          <img src={SpaceXLogo} alt="SpaceX Logo" />
        </div>

        <div className="container mx-auto  flex items-center justify-between ">
          <div className="md:hidden  ">
            <button
              onClick={toggleMenu}
              className="text-white font-mazzard bg-purple-950 text-sm lg:text-lg focus:outline-none m-2 ml-0 w-32 h-8"
            >
              Menu
            </button>
            {/*On opening the menu */}
            {menuOpen && (
              <div className="absolute top-14 left-0 bg-black-900 mt-2  py-2 w-full z-10 backdrop-blur-md">
                <Link
                  to="section1"
                  smooth={true}
                  duration={500}
                  className="block  px-4 py-2 text-lg text-white font-mazzard lg:text-lg bg-menu-hover"
                  onClick={closeMenu}
                >
                  Home
                </Link>

                <Link
                  to="section2"
                  smooth={true}
                  duration={500}
                  className="block  px-4 py-2 text-lg text-white font-mazzard lg:text-lg bg-menu-hover"
                  onClick={closeMenu}
                >
                  Capsules
                </Link>

                <Link
                  to="section3"
                  smooth={true}
                  duration={500}
                  className="block  px-4 py-2 text-lg text-white font-mazzard lg:text-lg bg-menu-hover"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center justify-center space-x-4 md:space-x-8  lg:justify-center mt-6">
            <Link
              to="section1"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-white font-mazzard text-sm md:text-base lg:text-lg font-normal leading-normal uppercase bg-gradient-hover"
              onClick={closeMenu}
            >
              Rockets
            </Link>

            <Link
              to="section2"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-white font-mazzard text-sm md:text-base lg:text-lg font-normal leading-normal uppercase bg-gradient-hover"
              onClick={closeMenu}
            >
              Capsules
            </Link>
            <Link
              to="section3"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-white font-mazzard text-sm md:text-base lg:text-lg font-normal leading-normal uppercase bg-gradient-hover"
              onClick={closeMenu}
            >
              Rockets
            </Link>
          </div>
        </div>
      </nav>
      <div className="mt-4 md:mt-8 lg:mt-16 absolute left-1/2 transform -translate-x-1/2 w-full max-w-screen-md">
        {/* Timer div */}
        <Countdown
          date={Date.now() + calculateTimeLeft()}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <Completionist />;
            } else {
              return (
                <div className="flex justify-center space-x-4 md:space-x-8 lg:space-x-12 ">
                  <div className="rounded-lg bg-gradient-to-b from-purple-600 via-transparent to-purple-600 w-32 h-30 inline-block text-white p-0 m-2 md:m-4">
                    <p className="text-white text-center font-mazzard text-20 font-semibold leading-34 tracking-wider">
                      {days}
                      <br />
                      <span className="text-xs">DAYS</span>
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-b from-purple-600 via-transparent to-purple-600 w-28 h-30 inline-block text-white p-0 m-2 md:m-4">
                    <p className="text-white text-center font-mazzard text-20 font-semibold leading-34 tracking-wider">
                      {hours}
                      <br />
                      <span className="text-xs">HOURS</span>
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-b from-purple-600 via-transparent to-purple-600 w-28 h-30 inline-block text-white p-0 m-2 md:m-4">
                    <p className="text-white text-center font-mazzard text-20 font-semibold leading-34 tracking-wider">
                      {minutes}
                      <br />
                      <span className="text-xs">MINUTES</span>
                    </p>
                  </div>
                  <div className="rounded-lg bg-gradient-to-b from-purple-600 via-transparent to-purple-600 w-28 h-30 inline-block text-white p-0 m-2 md:m-4">
                    <p className="text-white text-center font-mazzard text-20 font-semibold leading-34 tracking-wider">
                      {seconds}
                      <br />
                      <span className="text-xs">SECONDS</span>
                    </p>
                  </div>
                </div>
              );
            }
          }}
        />
      </div>
    </div>
  );
};

export default  React.memo(Navbar);

