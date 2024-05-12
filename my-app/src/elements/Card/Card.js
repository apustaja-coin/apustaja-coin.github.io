import React from 'react';
import './Card.css';
import { motion } from "framer-motion"; 

const splitStringUsingRegex = (str) => {
  const characters = [];
  const regex = /[\s\S]/gu;
  let match;
  while ((match = regex.exec(str)) !== null) {
    characters.push(match[0]);
  }
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

const Card = ({ img, title, description, variant }) => {
  return (
    <motion.div className="stepItem"
      variants={variant}
      initial="hidden"
      whileInView="visible"
      whileHover="hover">
        <div className="stepImage">{img}</div>
        <div className="stepContent">
          <h3 className="stepTitle">
            {title}
          </h3>
          <p>
            {splitStringUsingRegex(description).map((char, index) => (
              <span  variants={charVariants} key={`${char}-${index}`} transition={{ duration:  1}}>
                {char}
              </span>
            ))}
          </p>
        </div>
    </motion.div>
  );
};

export default Card;