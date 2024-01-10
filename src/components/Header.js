import React from 'react';
//imaages
import logo from "../assets/logo.svg"

const Header = () => {
  return <header className=' py-8'>
    <div className='container mx-auto'>
  <div className='flex justify-between items-center'>
    {/* logo */}
    <a href="">
      {/* <img src={logo} alt="" /> */}
      <h2 className=' text-gradient text-3xl'>Fazleh Rakib</h2>
    </a>
    <button className='btn btn-sm'> Work With Me</button>
  </div>
    </div>
  </header>;
};

export default Header;
