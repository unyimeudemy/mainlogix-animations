import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ArrowContainer = styled.div`
  position: absolute;
  top: 310px;
  right: 678px;
  width: 350px; /* Covers both curves */
  height: 120px; /* Adjusted for better proportions */
`;

const CurvePath = styled(motion.path)`
  stroke: #78A67C;
  stroke-width: 2;
  fill: transparent;
`;

const TopRightToLeftCurve = ({ animateLine }) => {
  const curveVariants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <ArrowContainer>
      <svg width="100%" height="100%" viewBox="0 0 350 120">
        <rect width="100%" height="100%" fill="transparent" />
        <CurvePath
          variants={curveVariants}
          initial="initial"
          animate={animateLine}
          d="
            M290 0 
            V20 
            Q290 50 260 50 
            H90 
            Q50 50 50 80 
            V100
          "
        />
      </svg>
    </ArrowContainer>
  );
};

export default TopRightToLeftCurve;
