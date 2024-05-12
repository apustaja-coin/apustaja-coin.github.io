
import React from 'react'
import './ApuFrens.css'
import { motion } from "framer-motion";
import Socials from '../../elements/Socials';

const ApuFrens = () => {
  return (
    <div className="apuFrens" name="apufrens">
        <div className="wrapper">
         <motion.h1 initial={{ opacity: 0}}
            animate={{ opacity: 1, scale: [1, 1.1, 1] }}   
            transition={{ duration: 1 }} className="apu">$apu</motion.h1>
            <motion.p 
            initial={{ opacity: 0}}
            animate={{ opacity: 1, scale: [1, 1.1, 1] }}   
            transition={{ duration: 1 }}>Uniting all frens on the blockchain since 2024</motion.p>
            <motion.a 
             href="https://jup.ag/swap/SOL-ECutGg12PNhqhkvnH1s1FcuXgCDzKDNhSf5aLtANioR7"   className="btn btn-primary btn-animate">buy $APU</motion.a>
        <Socials />

          
            </div>
    </div>
  )
}

export default ApuFrens;