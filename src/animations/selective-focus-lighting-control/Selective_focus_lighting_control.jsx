import styled from "styled-components";
import first_screen from "./images/first_screen.png"
import second_screen from "./images/second_screen.png"
import third_screen from "./images/third_screen.png"
import loading_screen from "./images/loading_screen.png"

import video from "./videos/selective-video.mp4"
import hand from "./images/hand.png"
import { animate, easeInOut, easeOut, motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { use } from "react";



const Container = styled.div`
    width: 950px;
    height: 495px;
    background: #F5F5F5;
    display: flex;
    gap: 60px;
`

const Iphone = styled.img`
    width: 290px;
    height: 495px;
`

const Video = styled(motion.video)`
    width: 588px;
    height: 333px;
    margin-top: 97px;
    margin-bottom: 65px;
`
const Hand = styled(motion.img)`
    width: 200px;
    height: 150px;
    position: absolute;
    top: 310px;
    left: 200px;
`

const DarkScreen = styled(motion.img)`
    width: 200px;
    height: 355px;
    position: absolute;
    left: 260px;
`
const screenVariants = {
    first: { opacity: 1, x: 0 },
    second: { opacity: 1, x: -50 },
    third: { opacity: 1, x: 50 }
  };

const Selective_focus_lighting_control = ({animateLight}) => {
    const [changeScreen, setChangeScreen ] = useState("first")
    const [displayDarkScreen, setDisplayDarkScreen] = useState(true)
    const videoRef = useRef(null)
    const [showVideo, setShowVideo] = useState(false)
    const [showHand, setShowHand] = useState(true)
    const [showPhone, setShowPhone] = useState(true)

    const animateHand = useAnimationControls()
    const animateDarkScreen = useAnimationControls()
    const shiftPhoneLeft = useAnimationControls()
    const animateVideo = useAnimationControls()

    animateLight.current = async () => {
        
        animateHand.set("initial")
        animateDarkScreen.set("initial")
        shiftPhoneLeft.set("initial")
        animateVideo.set("initial")

        await animateHand.start("handFirstMove")
        await animateDarkScreen.start("animateDarkScreen")

        setTimeout(async () => {
            setChangeScreen("second");
            setDisplayDarkScreen(false);
            await animateHand.start("handSecondMove")
            setShowHand(false)
            setChangeScreen("third");


            setTimeout(async() => {
                setShowPhone(false)
                setShowVideo(true)
                // await shiftPhoneLeft.start("shiftPhoneLeft")
                await animateVideo.start("videoFirstMove")
                setTimeout(async() => {
                    videoRef.current.play()
                }, 1)
            }, 500)
          }, 1000);
    }

    // useEffect(() => {
    //     handleAnimate()
    // },[])

    return (
        <Container>
                {showPhone && <motion.div
                    variants={{
                        initial: {x:430, y:0, opacity: 1 },
                        shiftPhoneLeft: {x:-10, y:0},
                    }}
                    initial="initial"
                    animate={shiftPhoneLeft}
                    exit={{ opacity: 0 }}
                    transition={{ 
                        x: {duration: 1, easeOut},
                        delay: 2
                     }}
                >
                    {
                    <Iphone
                     src={changeScreen === "first" ? first_screen : changeScreen === "second" ? second_screen : third_screen}

                    />
                } 
                </motion.div>} 
                {displayDarkScreen && <DarkScreen
                    src={loading_screen}
                    variants={{
                        initial: { scale: 0, x: 410, y: -10, marginTop:0, marginBottom:0},
                        animateDarkScreen: { scale: 1, x: 410, y: 0, marginLeft:50, marginTop:70},
                    }}
                    initial="initial"
                    animate="animateDarkScreen"
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 1.5,
                    }}
                />}
                {showHand && <Hand
                 src={hand}
                 variants = {{
                    initial: {x:430, y:0},
                    handFirstMove: {x:460, y:0, scale:[1, 1, 0.8, 1]},
                    handSecondMove: {x:560, y:-30, scale:[1, 1, 0.8, 1]}
                 }}
                 initial="initial"
                 animate={animateHand}
                 transition={{
                    x: {duration: 0.5, easeOut},
                    scale: {duration: 0.2, delay: 1, easeInOut}
                }}
                 />}
                {showVideo && <Video
                    autoPlay={false} muted loop ref={videoRef}
                    variants={{
                        initial: {x:250, y:0},
                        videoFirstMove: {x:0, y:0}
                    }}
                    initial="initial"
                    animate={animateVideo}
                    transition={{
                        x: {duration: 0.5, easeOut}
                    }}
                >
                    <source src={video} />
                </Video>}
        </Container>
    )

}

export default Selective_focus_lighting_control;