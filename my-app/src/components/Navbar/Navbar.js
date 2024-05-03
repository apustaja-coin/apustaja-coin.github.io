import React from 'react';
import './Navbar.css';
import {FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  return (
   <nav className='container'>
     <a href="#page-top" className="logoWrapper"><img src="/images/logo.png" alt="" className="logo"/> <span className="logoText">APU APUSTAJA</span></a>
   <ul>
    <li className="strong-hover-shake"><a className="page-scroll navLinks" href="#home">home</a></li>
    <li className="strong-hover-shake"><a className="page-scroll navLinks" href="#about">about</a></li>
    <li className="strong-hover-shake"><a className="page-scroll navLinks" href="#howtobuy">how to buy</a></li>
    <li className="strong-hover-shake"><a className="page-scroll navLinks" href="#tokenomics">tokenomics</a></li>
    <li className="strong-hover-shake"><a className="page-scroll navLinks" href="#roadmap">roadmap</a></li>

    <a href="https://jup.ag/swap/SOL-ECutGg12PNhqhkvnH1s1FcuXgCDzKDNhSf5aLtANioR7" class="btn btn-primary btn-animate">buy $APU</a>  
    
    <button>
        <FaTimes />
    </button>
    <FaBars />
   </ul>
   </nav>

  )
}

export default Navbar