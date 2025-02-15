
import { motion, useAnimationControls } from 'framer-motion'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import smallDoor from "./images/door-small.svg"
import bigDoor from "./images/door-big.svg"

const Left = styled.div`
    width: 170px;
    height: 500px;
`

const SmallItem = styled(motion.div)`
    width: 35px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: -22px;
    margin-left: -30px;
    z-index: 2;
`
const BigItem = styled.div`
    width: 70px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;

`
const LeftWrapper = styled.div`
 
    display: flex;
    margin-top: 35px;
    margin-left: 100px;
`
const BigDoor = styled.img`
    width: 100px;
    height: 140px;
`
const SmallDoor = styled.img`
    width: 60px;
    height: 100px;
`

const DoorSection = () => {
    const smallDoorSide = useAnimationControls();

    const handleAnimate = async () => {
        smallDoorSide.set("initial");
        await smallDoorSide.start("smallDoorSide");

    }

    useEffect(() => {
        handleAnimate();
    }, []);




  return (
        <Left>
            <LeftWrapper>
                <SmallItem
                    src={smallDoor}
                    variants={{
                        initial:{ x:0, y:0},
                        smallDoorSide:{ x:-67, y:-14} 
                    }}
                    initial="initial"
                    animate={smallDoorSide}
                    transition={{duration: 1.5}}
                    ><SmallDoor src={smallDoor}/></SmallItem>
                <BigItem >
                    <BigDoor src={bigDoor}/>
                </BigItem>
            </LeftWrapper>
        </Left>
  )
}

export default DoorSection
