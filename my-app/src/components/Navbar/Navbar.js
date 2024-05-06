import React from 'react';
import {useRef } from 'react';
import './Navbar.css';
import {FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const navRef = useRef();
    const headerRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");

            headerRef.current.classList.toggle("responsive-style");

     

    }
  return (
    <div className="container">
   <header className="header" ref={headerRef}>
     <a href="#page-top" className="logoWrapper"><img src="/images/logo.png" alt="" className="logo"/> <span className="logoText">APU APUSTAJA</span></a>
   <nav className='navbar' ref={navRef}>
   <ul>
    <li className="strong-hover-shake"><a className="page-scroll navLinks" style={{'--i':0}} href="#home">home</a></li>
    <li className="strong-hover-shake"><a className="page-scroll navLinks" style={{'--i':1}} href="#about">about</a></li>
    <li className="strong-hover-shake"><a className="page-scroll navLinks" style={{'--i':2}} href="#howtobuy">how to buy</a></li>
    <li className="strong-hover-shake"><a className="page-scroll navLinks" style={{'--i':3}} href="#tokenomics">tokenomics</a></li>
    <li className="strong-hover-shake"><a className="page-scroll navLinks" style={{'--i':4}} href="#roadmap">roadmap</a></li>
    <li><a href="https://jup.ag/swap/SOL-ECutGg12PNhqhkvnH1s1FcuXgCDzKDNhSf5aLtANioR7"   className="btn btn-primary btn-animate navBtn">buy $APU</a></li> 

   </ul>
   </nav>
   <button className='nav-btn' onClick={showNavbar}>
   <FaBars />
   </button>
   </header>
   </div> 
  )
}

export default Navbar