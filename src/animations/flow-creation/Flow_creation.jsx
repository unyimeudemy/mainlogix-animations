import React from 'react'
import styled from 'styled-components';
import video from "./videos/child-opening-door-cut.mp4"
import { useEffect, useRef, useState } from "react";
import indicator from "./images/indicator.png"
import indicator_with_flash from "./images/indicator-with-flash.svg"
import indicator_light from "./images/indicator-light.svg"
import grandeurHub from "./images/grandeur-hub.png"
import _SevenLTop from './_SevenLTop';
import _SevenLBottom from './_SevenLBottom';
import Horizontal_line from './Horizontal_line';
import dataDot from "./images/dot.svg"
import { motion, useAnimationControls } from 'framer-motion';
import smallDoor from "./images/door-small.svg"
import bigDoor from "./images/door-big.svg"
import phone_screen from "./images/phoneScreeen.svg"
import whitePatch from "./images/whitePatch.svg"
import message from "./images/message.svg"
import motionDetected from "./images/motion-detected.svg"



const DoorSection = styled.div`
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

const Container = styled.div`
    width: 1124px;
    height: 570px;
    background: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Video = styled.video`
    width: 1300px;
    height: 450px;
`

const Flow = styled.div`
    width: 1000px;
    height: 470px;
`

const IndicatorWrapper = styled.div`
`

const Indicator = styled.img`
   width: 200px;
    height: 200px;
    position: absolute;
    top: 450px;
    left: 205px;
    z-index: 20;

`

const Indicator_with_Light = styled.img`
   width: 300px;
    height: 300px;
    position: absolute;
    top: 370px;
    left: 155px;
    z-index: 20;

`

const Patch = styled.img`
    width: 10px;
    height: 10px;
    position: absolute;
    z-index: 30;
    top: 575px;
    left: 293px;
`

const GrandeurSmartHub = styled.img`
    width: 300px;
    height: 180px;
    position: absolute;
    top: 306px;
    right: 251px;
    z-index: 20;
`

const Door_dot = styled(motion.img)`
    position: absolute;
    top: 250px;
    left: 355px;
    z-index: 10;

`

const Indicator_dot = styled(motion.img)`
    position: absolute;
    top: 542px;
    left: 325px;
     z-index: 10;
`

const PhoneWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-item: center;
    justify-content: center;

`

const PhoneScreen = styled.img`
    border-radius: 35px;

`

const PhoneScreenPatch = styled.img`
    position: absolute;
    top: 208px;
    right: 500px;
    width: 435px;
    height: 150px;
`

const MessagePop = styled(motion.img)`
   position: absolute;
    top: 212px;
    right: 600px;
    width: 240px;
    height: 71px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

`

const Motion_detected = styled.img`
   position: absolute;
    top: 455px;
    left: 350px;
    width: 140px;
    height: 50px;

`



const Flow_creation = () => {
    // const videoRef = useRef(null)
    const [showVideo, setShowVideo] = useState(true)
    const [showPatch, setshowPatch] = useState(false)
    const [showFlow, setShowFlow]  = useState(false)
    const [hideDot, setHideDot] = useState(true)
    const [showPhone, setShowPhone] = useState(false)
    const [showMotionDetected, setShowMotionDetected] = useState()
    const [flashRedOnIndicator, setFlashRedOnIndicator] = useState(false)


    const smallDoorSide = useAnimationControls();
    const animateIndicatorDot = useAnimationControls();
    const animateDoorDot = useAnimationControls();
    const animateMessagePopUp = useAnimationControls();



    const handleAnimation = async () => {
        smallDoorSide.set("initial");
        animateIndicatorDot.set("initial")
        animateDoorDot.set("initial")
        animateMessagePopUp.set("initial")


        setTimeout(async () => {
            setShowVideo(false)
            setShowFlow(true)

            setTimeout(async () => {
                setFlashRedOnIndicator(true)
                setShowMotionDetected(true)

                setTimeout(() => {
                    setFlashRedOnIndicator(false)
                }, 100)
                await smallDoorSide.start("smallDoorSide");

                        setTimeout( async() => {
    
                            await Promise.all([
                                animateDoorDot.start("firstMove"),
                                animateIndicatorDot.start("firstMove"),
                            ])
                    
                            await Promise.all([
                                animateDoorDot.start("secondMove"),
                                animateIndicatorDot.start("secondMove")
                            ])
                    
                            setHideDot(false)
                            await animateDoorDot.start("thirdMove")
                
                            setShowFlow(false)
                            setShowPhone(true)
            
                            setTimeout(async () => {
                                animateMessagePopUp.start("scaleUp")
                            }, 500)
    
                        }, 1)
            }, 500)

        }, 4000)


    }

    useEffect(() => {
        handleAnimation()
    },[])

      

    
  return (
    <Container>
        {showVideo && <Video
            autoPlay muted loop
            //  ref={videoRef}
        >
            <source src={video}/>
        </Video>}   

        {showFlow && <Flow>
            <DoorSection>
                <LeftWrapper>
                    <SmallItem
                        src={smallDoor}
                        variants={{
                            initial:{ x:0, y:0},
                            smallDoorSide:{ x:-67, y:-14} 
                        }}
                        initial="initial"
                        animate={smallDoorSide}
                        transition={{
                            duration: 1,
                        }}
                        ><SmallDoor src={smallDoor}/></SmallItem>
                    <BigItem >
                        <BigDoor src={bigDoor}/>
                    </BigItem>
                </LeftWrapper>
            </DoorSection>
            <IndicatorWrapper>
                {/* {showPatch && <Patch src={indicator_light}/>} */}
                { flashRedOnIndicator ? <Indicator_with_Light src={indicator_with_flash} alt='indicator'/> :
                <Indicator src={indicator} alt='indicator'/>}
               {showMotionDetected && <Motion_detected src={motionDetected}/>}
            </IndicatorWrapper>
            <GrandeurSmartHub src={grandeurHub} alt='grandeur smart hub'/>
            <_SevenLTop/>
            <_SevenLBottom/>
            <Horizontal_line/>
            <Door_dot
                src={dataDot}
                alt="data dot"
                variants={{
                    initial: {x:0, y:0},
                    firstMove: {x:190, y:0},
                    secondMove: {x:190, y:140},
                    thirdMove: {x:590, y:140}
                }}
                initial="initial"
                animate={animateDoorDot}
                transition={{duration:0.8}}
            />
            {hideDot && <Indicator_dot
                src={dataDot}
                alt="data dot"
                variants={{
                    initial: {x:0, y:0},
                    firstMove: {x:220, y:0},
                    secondMove: {x:220, y:-155}
                }}
                initial="initial"
                animate={animateIndicatorDot}
                transition={{duration: 0.8}}
            />}

        </Flow>}

        {showPhone && <PhoneWrapper>
            <PhoneScreen
                src={phone_screen}
                alt="phone screen"
            />
            <PhoneScreenPatch
                src={whitePatch}
                alt="white patch"
            />
            <MessagePop
                src={message}
                alt="message popup"

                variants={{
                    initial: {scale:0},
                    scaleUp: {scale: 1}
                }}
                initial="initial"
                animate={animateMessagePopUp}
                transition={{duration: 0.5, ease: "easeOut"}}
            />
            
        </PhoneWrapper>}   
    </Container>
  )
}

export default Flow_creation
