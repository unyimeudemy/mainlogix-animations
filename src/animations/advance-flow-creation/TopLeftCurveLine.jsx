import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ArrowContainer = styled.div`
  position: absolute;
  top: 103px;
  left: 430px;
  width: 260px; /* Adjusted for the curve */
  height: 180px; /* Adjusted for the curve */
`;

const CurvePath = styled(motion.path)`
  stroke: #78A67C;
  stroke-width: 3;
  fill: transparent;
`;

const TopLeftCurveLine = ({ animateLine }) => {
  const curveVariants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <ArrowContainer>
      <svg width="100%" height="100%" viewBox="0 0 350 180">
        <rect width="100%" height="100%" fill="transparent" />
        <CurvePath
          variants={curveVariants}
          initial="initial"
          animate={animateLine}
          d="M60 0 V40 Q60 80 100 80 H400"
          />
      </svg>
    </ArrowContainer>
  );
};

export default TopLeftCurveLine;

