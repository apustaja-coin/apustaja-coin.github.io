import React from 'react'
import './Tokenomics.css';
import { motion, useAnimation } from "framer-motion";

const Tokenomics = () => {
  return (
    <div className="tokenomicsWrapper" name="tokenomics">
       
        <motion.div
         whileInView={{
rotate: [0, 5, -5, 5, 0],
         rotateY: 360,
         y: [0,-5,0],
         transition: {
             duration: 1,
             ease: "easeInOut",
             delay: 0
         }}
        }
          className="tokenomicsInfo">
        <h2 class="tokenomicsTitle">tokenomics</h2>
                <hr className="light"/>
                <h3>token supply:</h3>
                <h1 className="supply">1,000,000,000</h1>
                <h3>LP burnt</h3>
                <h3>ownership renounced</h3>
                <h3>0% tax</h3>
        </motion.div>
        <motion.div
        initial={{ scale: 0.1}}
           whileInView={{
           scale: 1,
            rotate: 360,
            transition: {
                duration: 1,
                ease: "easeOut",
                repeat: 0,
                repeatDelay: 0,
                delay: 0
            }
        }}
        className="tokenomicsImg">
        <img src="/images/apunomics.png"/>
        </motion.div>
    </div>
  )
}

export default Tokenomics