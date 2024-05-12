import React from 'react';
import './HowToBuy.css';

import data from './data.json';
import Solana from './svgs/Solana.js'
import Jupiter from './svgs/Jupiter.js';
import Wallet from './svgs/Wallet.js';
import Swap from './svgs/Swap.js';
import Card from '../../elements/Card';
import Copy from '../../elements/Copy';
import { motion, useAnimation } from "framer-motion";

const iconComponents = {
    'wallet': <Wallet />,
    'solana': <Solana />,
    'jupiter': <Jupiter />,
    'swap': <Swap />
};
const evenButtonVariant = {
    hidden: {  x: -200 },
    visible: {


        opacity: 1, 
        x: 0,       
        transition: {
            type: 'spring', stiffness: 200, duration: 10
        },


    },

 
    hover: {
        
                x: [0,-50],
                scale: 1.03,
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                transition: {
                    type: 'spring', stiffness: 200, duration: 1
                    
    }
    }
};

const oddButtonVariant =  {
    hidden: {  x: 200 },
    visible: {
        opacity: 1,
        x: 0,        
        transition: {
            type: 'spring', stiffness: 200, duration: 1
        }
    },
    hover: {
        scale: 1.03,
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        x: [0,-50],
        transition: {
            type: 'spring', stiffness: 200  
        }

}
};

export const textVariants = (delay) => {
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


const HowToBuy = () => {
return (
<div className="howToBuyContainer" name="howtobuy">
                <motion.h2 

                
initial={{ opacity: 0, y: -200}}
whileInView={{ opacity: 1,  scaleY: [1,1.2,1],
    y: [0,-50,0], }}   
transition={{ duration: 1, delay: 0.2 }}   
                className="howToBuyTitle">how to buy $APU</motion.h2>
                {data.map((item, index) => {
                    return (
                      <Card
                        variant={index % 2 === 0 ? evenButtonVariant : oddButtonVariant}
                        title={item.title}
                        description={item.description}
                        img={ iconComponents[item.svg]}
                        hidden={item.hidden }/>)
                        
                })}
                <div className='contractData'>
                <motion.h2 
                variants={textVariants(0.3)}
                initial="initial"
                whileInView="animate"
                
                viewport={ { once: true }}
                >Contract address</motion.h2>
                <motion.h3 
                 variants={textVariants(0.7)}
                 initial="initial"
                 whileInView="animate"
                 ort={ { once: true }}
                 styles={{wordWrap: 'break-word' }}>Congratulations, you are now a future MULLIONAIRE.</motion.h3>
                <Copy animation={textVariants(1)}/>
                <motion.div
                    viewport={ { once: true }}
      initial={{ x: -600 }} 
      animate={{ x: 0 }}    
      transition={{ type: 'spring', stiffness: 120, delay: 1.2 }} 
    >
      <motion.a
        whileInView={{ 
          scaleY: [1, 1.2, 1],
          y: [0, -10, 0]      
        }}
        transition={{
          duration: 1,        
          ease: "backIn",     
          repeat: Infinity,   
          repeatDelay: 0,    
          delay: 1.2         
        }}
                href="https://jup.ag/swap/SOL-ECutGg12PNhqhkvnH1s1FcuXgCDzKDNhSf5aLtANioR7"   className="btn  btn-default">buy $APU</motion.a>
                </motion.div>
                </div>
                </div>
);
}

export default HowToBuy;