import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  margin-top: 87px;
  position: absolute;
  top: 160px;
  left: 562px; /* Adjusted position for visibility */
  // background: #5C755E;
`;

const ArrowLine = styled.div`
  position: relative;
  width: 2px;
  height: 120px;
  background-color:  #5C755E;
  overflow: hidden;
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: 15px; /* Keep the line at the top of the vertical line */
  right: 2px; /* Position the horizontal line to extend leftward */
  width: 200px; /* Length of the horizontal line */
  height: 2px;
  background-color: #5C755E;
`;



const _SevenLTop = () => {

  return (
    <ArrowContainer>
        <ArrowLine />
        <HorizontalLine />
    </ArrowContainer>
  );
};

export default _SevenLTop;
