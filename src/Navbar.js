import React from 'react';
import './Navbar.css'
import SpaceXLogo from './images/SpaceXLogo.png'
import backgroundImage from'./images/HeaderBackground.png'
const Navbar = () => {
  return (
    <div className=' w-full h-60' style={{ backgroundImage: `url(${backgroundImage})`}} >
        
    <nav className=" bg-transparent h-12">
                <div className="flex l-0  w-32  logo">
                    <img src={SpaceXLogo}></img>
                    </div>

      <div className="container mx-auto bg-black-400 flex items-center justify-center">
        <div className="space-x-14 flex items-center justify-center ">
          <a href="#" className="pl-6 w-36  text-white font-mazzard text-18 font-normal leading-normal  uppercase bg-gradient-hover">Home</a>
          <a href="#" className="pl-6 w-36 text-white font-mazzard text-18 font-normal leading-normal  uppercase bg-gradient-hover">About</a>
          <a href="#" className="pl-6 w-36 text-white font-mazzard text-18 font-normal leading-normal  uppercase bg-gradient-hover">Services</a>
        </div>
     
      </div>
    </nav>
    </div>
  );
};

export default Navbar;