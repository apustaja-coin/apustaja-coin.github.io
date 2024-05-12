import React from 'react';
import {useRef, useState } from 'react';
import './Navbar.css';
import { motion } from "framer-motion";
import {FaBars, FaTimes } from 'react-icons/fa';
import  {Link} from "react-scroll";
const Navbar = () => {
    const navRef = useRef();
    const headerRef = useRef();
    const [click, setClick] = useState(false);
    const handClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");

            headerRef.current.classList.toggle("responsive-style");

     

    }
  return (
    <div className="container">
   <header className="header" ref={headerRef}>
   <Link className="logoWrapper"  spy={true} smooth={true} offset={0} duration={500} to="apufrens"> <img src="/images/logo.png" className="logo"  /> <span className="logoText">APU APUSTAJA</span></Link>

   <nav className='navbar' ref={navRef}>
   <motion.ul
      initial={{ x: 250 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness:200, duration: 0.5 }} >
    <li className="strong-hover-shake"><Link activeClass="active" className="page-scroll navLinks" offset={0} spy={true} smooth={true} style={{'--i':0}} duration={500} to="apufrens">home</Link></li>
    <li className="strong-hover-shake"><Link activeClass="active" className="page-scroll navLinks" offset={-120} spy={true} smooth={true} style={{'--i':0}} duration={500} to="about">about</Link></li>
    <li className="strong-hover-shake"><Link activeClass="active" className="page-scroll navLinks" offset={-80} spy={true} smooth={true} style={{'--i':0}} duration={500} to="howtobuy">how to buy</Link></li>
    <li className="strong-hover-shake"><Link activeClass="active" className="page-scroll navLinks" offset={0  } spy={true} smooth={true} style={{'--i':0}} duration={500} to="tokenomics">tokenomics</Link></li>
    <li className="strong-hover-shake"><Link activeClass="active" className="page-scroll navLinks" offset={50} spy={true} smooth={true} style={{'--i':0}} duration={500} to="roadmap">roadmap</Link></li>
    <li><a href="https://jup.ag/swap/SOL-ECutGg12PNhqhkvnH1s1FcuXgCDzKDNhSf5aLtANioR7"   className="btn btn-primary btn-animate navBtn">buy $APU</a></li> 

   </motion.ul>
   </nav>
   <button className='nav-btn' onClick={showNavbar}>
   <FaBars />
   </button>
   </header>
   </div> 
  )
}

export default Navbar