import React from 'react';
import './About.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const boxVariant = {
    visible: { opacity: 1, scale: 0.8, transition: { type: 'spring', stiffness: 200, duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };
const About = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  return (
    <div className='aboutWrapper'>
<div className="aboutSection">
        <motion.div 
      whileInView={{ opacity: 1, x: 0}}
      initial={{opacity: 0, x: -200}}
      transition={{ type: 'spring',  duration: 3, delay: 1 }} 
        className='apuDefaultImg'
        name="about">
                <img src="/images/apu-solana-flight.svg" />
            </motion.div>
            <motion.div
            
               whileInView={{ opacity: 1, x: 0}}
               initial={{opacity: 0, x: 200}}
               transition={{ type: 'spring', stiffness: 100, duration: 1, delay: 0.2 }} 
               className="about">
                <h2>about</h2>
                <p>Low on Funds, High on Vibes. Apu is here to unite all frens on the blockchain</p>
                <p>Tired of doge puns and endless moon talk?  Apu Apustaja says "same, bro".  This ain't your grandma's memecoin drama. This is a full-on YOLO mission to the top of the meme charts.</p>
                <p>Why Apu?  Because "it ain't much, but it's honest work" and that's exactly what this coin is all about.  Grinding  our way to the top with the power of  our number go up technology (don't ask us how it works, it just does).</p>
                <p>Don't be a FOMO  noob.  Ape now and think later. Get in on the ground floor before Apu says  "it's morbin' time!”</p>
                <p>P.S. We're using Solana because, well, it's fast and cheap to use.. (yeah, looking at you Ethereum)</p>
                <p>P.P.S. DYOR (do your own research) but seriously, this is now a 100% community project that is about to become so viral your mom will share it on Facebook and you can do nothing about it.</p>
            </motion.div>
           
            </div>
            <motion.div className="apuClimb box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}>
                <img src="/images/apu-climb.jpg" className="apuChart"/>
            </motion.div>
        
        </div>

  )
}

export default About;