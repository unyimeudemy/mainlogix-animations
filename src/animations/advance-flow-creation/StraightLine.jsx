import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin-top: 22px;
  position: absolute;
  top: 164px;
  left: 695px; /* Adjusted position for visibility */
`;

const ArrowLine = styled.div`
  position: relative;
  width: 2px;
  height: 200px;
  background-color: transparent;
  overflow: hidden;
`;

const FillLineVertical = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #78A67C;
  transform-origin: top;
`;

const StraightLine = ({ animateLine }) => {

  const fillLineVerticalVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { delay: 2, ease: "easeInOut" },
    },
  };



  return (
    <ArrowContainer>
      <ArrowLine>
        <FillLineVertical
          variants={fillLineVerticalVariants}
          initial="initial"
          animate={animateLine}
        />
      </ArrowLine>
    </ArrowContainer>
  );
};

export default StraightLine;
