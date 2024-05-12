import React from "react";
import './Copy.css';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { motion, useAnimation } from "framer-motion";

const Copy = ({animation}) => {
    const value = 'ECutGg12PNhqhkvnH1s1FcuXgCDzKDNhSf5aLtANioR7';

  return (
    <CopyToClipboard text={value} className="tooltip">
       
    <motion.button 
    variants={animation}
    initial="initial"
    whileInView="animate" 
    viewport={ { once: true }}
    data-tooltip-id="my-tooltip" className="btnContract" >{value}
   
   <ReactTooltip id="my-tooltip"   globalEventOff="hover" events={['click']} content="Contract address copied!"/>
       </motion.button> 
  </CopyToClipboard>
  )
}

export default Copy;