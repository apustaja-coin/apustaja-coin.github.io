import React from 'react';
import './Roadmap.css';
import { motion, useMotionValue, useTransform } from "framer-motion";
import data from './data.json';

const Roadmap = () => {
    const splitStringUsingRegex = (str) => {
        const characters = [];
        const regex = /[\s\S]/gu;
        let match;
        while ((match = regex.exec(str)) !== null) {
          characters.push(match[0]);
        }
        console.log(characters);
        return characters;
      };
      
      const charVariants = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1
        }
      };
 const textVariants = (delay) => {
        return {
        initial: {
            opacity: 0,
            scale: 0.5
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.1,
                delay: delay
            }
        }
    }
}
  return (
    <div className="roadmap" name="roadmap">
     <div className="roadmapImg">
                    <img src="images/apu-roadmap.svg"/>
                </div>
                <motion.div className="roadmapInfo">
  {data.map((item, index) => (
    <motion.div key={index} className="roadmapPhase">
      <motion.h3 
        variants={textVariants(item.name.delay)}
        initial="initial"
        whileInView="animate"
        viewport={ { once: true }}
      >{item.name.name}</motion.h3>
      <ul>
        {item.description.map((x, idx) => (
          item.complete ? 
            <motion.ol 
              key={idx} 
              variants={charVariants}
              initial="hidden"
              whileInView="visible"
              viewport={ { once: true }}
              transition={{ staggerChildren: 0.01 }}
            >
              <motion.img  viewport={ { once: true }} src="/images/check-mark.svg" className="checkmark" variants={charVariants} key={x.name} transition={{ duration:  1, delay: x.delay}} />
              {splitStringUsingRegex(x.name).map((char, index) => (
              <motion.span   viewport={ { once: true }} variants={charVariants} key={`${char}-${index}`} transition={{ duration:  1, delay: x.delay}}>
                {char}
              </motion.span>
            ))}
            </motion.ol> : 
            <motion.ol key={idx}
            variants={charVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.01 }}
            viewport={ { once: true }}
            >
              <motion.img src="/images/spinning-dots.svg"   viewport={ { once: true }} className="loader" variants={charVariants} key={x.name} transition={{ duration:  3, delay: x.delay}} />
              {splitStringUsingRegex(x.name).map((char, index) => (
              <motion.span  viewport={ { once: true }} variants={charVariants} key={`${char}-${index}`} transition={{ duration:  3, delay: x.delay}}>
                {char}
              </motion.span>
            ))}
            </motion.ol>
            
        ))}
      </ul>
    </motion.div>
    
  ))}
</motion.div>
    </div>
  )
}

export default Roadmap;