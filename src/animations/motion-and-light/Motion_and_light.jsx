import { delay, motion, useAnimationControls } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import smartWatch from "./images/smart-watch-1.png"
import blackPatch from "./images/black-patch.png"
import notification from "./images/notification.png"
import catWakeup from "./videos/cat-wakeup-cut.mp4"
import imgeWithoutText from "./images/withoutText.svg"
import imgeWithText from  "./images/withText.svg"
import turnOnLightVideo from "./videos/mobile-wireless.mp4"
import catEating from "./videos/adorable-cat-cut.mp4"

const Container = styled.div`
    width: 950px;
    height: 495px;
    background: #F5F5F5;
    display: flex;
    gap: 60px;
    display: flex;
    justify-content: center;
    align-item: center;
`

const SmartWatch = styled.img`
  width: 250px;
  height: 400px;

  position: absolute;
  top: 200px;
  left: 550px;


`

const BlackPatch = styled.img`
  position: absolute;
  top: 350px;
  left: 590px;
  height: 120px;
  width: 170px;

`

const WatchWrapper = styled.div``

const Notification = styled(motion.img)`
  position: absolute;
  top: 350px;
  left: 590px;
    height: 50px;
  width: 170px;
  z-index: 1;
`

const CatWakeupVideo = styled.video`
    width: 588px;
    height: 333px;
    margin-top: 97px;
    margin-bottom: 65px;
`
const VoiceCommand = styled.div``

const ImageWithoutText = styled.img`
    width: 500px;
    height: 500px;
`

const ImageWithText = styled.img`
    width: 500px;
    height: 500px;
`

const LightTurnOnVideo = styled.video`
    width: 588px;
    height: 333px;
    margin-top: 97px;
    margin-bottom: 65px;
`

const CatEatingVideo = styled.video`
    width: 588px;
    height: 333px;
    margin-top: 97px;
    margin-bottom: 65px;
`

const Motion_and_light = () => {

    const [showCatWakeUpVideo, setShowCatWakeUpVideo] = useState(true)
    const [showWatch, setShowWatch] = useState(false)
    const [showVoiceCommand, setShowVoiceCommand] = useState(true)
    const [imageWithoutText, setImageWithoutText] = useState(false)
    const [showLightTurnOn, setShowLightTurnOn] = useState(false)
    const [imageWithText, setImageWithText] = useState(false)
    const [showCatEating, setShowCatEating] = useState(false)
    const animateNotification = useAnimationControls()
    const catWakeupVideoRef = useRef()
    const turnOnLightVideoRef = useRef()
    const catEatingVideoRef = useRef()



  
  
  
    const handleAnimate = () => {
        animateNotification.set("initial")


        setTimeout(() => {
            setShowCatWakeUpVideo(false)

                setShowWatch(true)
        
                setTimeout(() => {
                  animateNotification.start("scaleUp")
                  setTimeout(() => {
                    setShowWatch(false)
                    setImageWithoutText(true)
                    
                    setTimeout(() => {
                        setImageWithoutText(false)
                        setImageWithText(true)

                        setTimeout(() => {
                            setShowVoiceCommand(false)
                            setShowLightTurnOn(true)

                            setTimeout(() => {
                                setShowLightTurnOn(false)
                                setShowCatEating(true)
                            }, 3000)
                        }, 500)
                    }, 500)

                  }, 1200)
                }, 10) 

        }, 1000) 
    }
  
    useEffect(() => {
      handleAnimate()
    }, [])



  return (
    <Container>
        {showCatWakeUpVideo && <CatWakeupVideo 
            autoPlay={true} muted loop ref={catWakeupVideoRef}
        >
            <source src={catWakeup} />
        </CatWakeupVideo>}

        {showWatch && <WatchWrapper>
            <Notification
                src={notification}
                variants={{
                    initial: {scale:0},
                    scaleUp: {scale: 1}
                }}
                initial="initial"
                animate={animateNotification}
                transition={{
                scale: {duration: 0.3, ease: "easeOut", delay: 0.5}
                }}
            />
            <SmartWatch src={smartWatch}/>
            <BlackPatch src={blackPatch}/>
        </WatchWrapper>}

        {showVoiceCommand && <VoiceCommand>
            {imageWithoutText && <ImageWithoutText src={imgeWithoutText}/>}
            {imageWithText && <ImageWithText src={imgeWithText}/>}
        </VoiceCommand>}

        {showLightTurnOn && <LightTurnOnVideo
            autoPlay={true} muted loop ref={turnOnLightVideoRef}
        >
            <source src={turnOnLightVideo} />
        </LightTurnOnVideo>}

        {showCatEating && <CatEatingVideo
            autoPlay={true} muted loop ref={catEatingVideoRef}
        >
            <source src={catEating} />
        </CatEatingVideo>}
    </Container>
  )
}

export default Motion_and_light
