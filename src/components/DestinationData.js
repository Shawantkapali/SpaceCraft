import React from 'react';
import { LeftFirst, RightFirst } from '../utils/motion';
import { motion } from 'framer-motion';

import "./DestinationStyles.css";

const DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="des-test">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <motion.div variants={LeftFirst} initial="hidden" whileInView="show">
          <img alt="img" src={props.img1} />
        </motion.div>
        <motion.div variants={RightFirst} initial="hidden" whileInView="show">
          <img alt="img" src={props.img2} />
        </motion.div>
      </div>
    </div>
  );
}

export default DestinationData;
