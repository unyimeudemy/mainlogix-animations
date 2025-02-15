import styled from "styled-components";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import TopLeftCurveLine from "./TopLeftCurveLine";
import TopRightCurveLine from "./TopRightCurveLine";
import motion_detected from "./images/motion-detected.svg"
import temperatureDropDetected from "./images/temperature-drop-detected.svg"
import StraightLine from "./StraightLine";
import grandeurHub from "./images/grandeur-hub.png"
import BottomLeftCurve from "./BottomLeftCurve";
import BottomRightCurve from "./BottomRightCurve";
import airbnb from "./images/for-airbnb.svg"
import turnOn_1 from "./images/turn-on-1.svg"
import powerHeater from "./images/power-heater.svg"
import smartElderlyCare from "./images/smart-elderly-care.svg"
import temperatureChange from "./images/temperature-change.svg"
import turnOn_2 from "./images/turn-on-2.svg"
import processingInput from "./images/processing-input.svg"
import processingSpinner from "./images/spinner.svg"
import bellIcon from "./images/bell.png"


const Container = styled.div`
    width: 1222px;
    height: 715px;
    background: #F5F5F5;
    display: flex;
    gap: 60px;
`

const MovementDetected = styled.img`
    width: 200px;
    height: 55px;
    position: absolute;
    top: 70px;
    left: 370px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
`

const TemperatureDrop = styled.img`
    width: 250px;
    height: 55px;
    position: absolute;
    top: 70px;
    right: 400px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
`

const GrandeurHub = styled.img`
    width: 150px;
    height: 100px;
    position: absolute;
    top: 240px;
    right: 665px;
    z-index: 1;
`

const Left = styled.div``

const Airbnb = styled(motion.img)`
    width: 199px;
    height: 47px;
    position: absolute;
    top: 399px;
    left: 370px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    border-radius: 10px;


`

const TurnOn_1 = styled(motion.img)`
    width: 197px;
    height: 58px;
    position: absolute;
    top: 470px;
    left: 370px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);

`

const PowerHeater = styled(motion.img)`
    width: 197px;
    height: 60px;
    position: absolute;
    top: 550px;
    left: 370px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
`

const Right = styled.div``

const SmartCare = styled(motion.img)`
    width: 270px;
    height: 47px;
    position: absolute;
    top: 400px;
    right: 370px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
`

const TemperatureChange = styled(motion.img)`
    width: 270px;
    height: 60px;
    position: absolute;
    top: 470px;
    right: 370px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
`

const TurnOn_2 = styled(motion.img)`
    width: 270px;
    height: 61.5px;
    position: absolute;
    top: 550px;
    right: 370px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
`

const Info = styled(motion.div)`
    width: 240px;
    height: 45px;
    position: absolute;
    top: 630px;
    right: 370px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    padding: 15px;
    color: #4d4d4d;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const ProcessingInput = styled(motion.img)`
    width: 150px;
    height: 100px;
    position: absolute;
    top: 180px;
    right: 550px;
    border-radius: 100%;

`
const ProcessingSpiner = styled(motion.img)`
    width: 27px;
    height: 27px;
    position: absolute;
    top: 216px;
    right: 668.5px;
    border-radius: 100%;
`
const ProcessingSpinnerWrapper = styled.div``

const AllText = styled.div``

const If = styled.div`
    color: #737373;
    font-size: 12px;
    font-family: 'Arial', sans-serif;
    position: absolute;
    top: 50px;
    left: 380px;
`

const And = styled.div`
    color: #737373;
    font-size: 12px;
    font-family: 'Arial', sans-serif;
    position: absolute;
    top: 50px;
    left: 790px;
`

const Then_1 = styled.div`
    color: #737373;
    font-size: 12px;
    font-family: 'Arial', sans-serif;
    position: absolute;
    top: 450px;
    left: 380px;
`

const Then_2 = styled.div`
    color: #737373;
    font-size: 12px;
    font-family: 'Arial', sans-serif;
    position: absolute;
    top: 450px;
    left: 800px;
`

const And_1 = styled.div`
    color: #737373;
    font-size: 12px;
    font-family: 'Arial', sans-serif;
    position: absolute;
    top: 535px;
    left: 380px;
`

const And_2 = styled.div`
    position: absolute;
    top: 535px;
    left: 800px;
    color: #737373;
    font-size: 12px;
    font-family: 'Arial', sans-serif;
`

const And_3 = styled.div`
    position: absolute;
    top: 615px;
    left: 800px;
    color: #737373;
    font-size: 12px;
    font-family: 'Arial', sans-serif;
`

const BellIcon = styled.img`
    height: 40px;
    width: 40px;
`

const PopupMessage = styled(motion.div)`
    position: absolute;
    top: 255px;
    left: 350px;
    color: white;
    font-size: 14px;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    height: 40px;
    width: 180px;
    background: #5C755E;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 50px 50px 0px 50px;
`

const Advance_flow = () => {

    const [showSpinner, setShowSpinner] = useState(false)
    const [showAnd_1, setShowAnd_1] = useState(false)
    const [showAnd_2, setShowAnd_2] = useState(false)
    const [showAnd_3, setShowAnd_3] = useState(false)


    const [showThen_1, setShowThen_1] = useState(false)
    const [showThen_2, setShowThen_2] = useState(false)



    const animateCurveLineTop = useAnimationControls();
    const bottomSevenR = useAnimationControls();
    const animateCurveLine_1 = useAnimationControls();
    const animateCurveLine_2 = useAnimationControls();
    const animateAirbnb = useAnimationControls()
    const animateTurnOn1 = useAnimationControls()
    const animatePowerHeater = useAnimationControls()
    const animateSmartCare = useAnimationControls()
    const animateTemperatureChange = useAnimationControls()
    const animateTurnOn2 = useAnimationControls()
    const animateSpinner = useAnimationControls()
    const animateInfo = useAnimationControls()
    const animatePopUpMessage = useAnimationControls()


    const handleAnimate = () => {
        animateCurveLineTop.set("initial")
        bottomSevenR.set("initial")
        animateCurveLine_1.set("initial")
        animateCurveLine_2.set("initial")
        animateAirbnb.set("initial")
        animateTurnOn1.set("initial")
        animatePowerHeater.set("initial")
        animateSmartCare.set("initial")
        animateTemperatureChange.set("initial")
        animateTurnOn2.set("initial")
        animateSpinner.set("initial")
        animateInfo.set("initial")
        animatePopUpMessage.set("initial")



        animateCurveLineTop.start("animate")
        bottomSevenR.start("animate")

        setTimeout(() => {
            setShowSpinner(true)

            setTimeout(() => {
                animateSpinner.start("rotateSpinner")
                
            }, 10)
        }, 2500)



        setTimeout(() => {
            animateCurveLine_1.start("animate")

            setTimeout(() => {
                animateAirbnb.start("scaleUp")
                animatePopUpMessage.start("popUp")
                setTimeout(() => {
                    setShowThen_1(true)
                }, 500)
                animateTurnOn1.start("scaleUp")
                setTimeout(() => {
                    setShowAnd_1(true)
                }, 1000)
                animatePowerHeater.start("scaleUp")
            }, 2000)

            setTimeout(() => {
                animateCurveLine_2.start("animate")
                animateSmartCare.start("scaleUp")
                setTimeout(() => {
                    setShowThen_2(true)
                }, 2500)
                animateTemperatureChange.start("scaleUp")
                setTimeout(() => {
                    setShowAnd_2(true)
                }, 3000)
                animateTurnOn2.start("scaleUp")
                setTimeout(() => {
                    setShowAnd_3(true)
                }, 3500)
                animateInfo.start("scaleUp")
            }, 3500)
        }, 3000)


    }

    useEffect(() => {
        handleAnimate()
    }, [])

    return (
        <Container>

            <MovementDetected src={motion_detected} alt="motion detected" />
            <TemperatureDrop src={temperatureDropDetected} alt="temperature drop detected" />

            <TopLeftCurveLine animateLine={animateCurveLineTop}/>
            <TopRightCurveLine animateLine={animateCurveLineTop}/>

            <StraightLine animateLine={bottomSevenR}/>
            <GrandeurHub src={grandeurHub}/>
            <BottomLeftCurve animateLine={animateCurveLine_1}/>
            <BottomRightCurve animateLine={animateCurveLine_2}/>

            {showSpinner && <ProcessingSpinnerWrapper>
                <ProcessingInput src={processingInput}/>
                <ProcessingSpiner
                    src={processingSpinner}
                    variants={{ 
                        initial: {rotate: 0 },
                        rotateSpinner: {rotate: -360 }
                    }}
                    initial="initial"
                    animate={animateSpinner}
                    transition={{ repeat: Infinity, duration: 0.5, ease: "linear"}} 
                />
            </ProcessingSpinnerWrapper>}

            <Left>
                <Airbnb 
                    src={airbnb}
                    variants={{
                        initial:{scale:0},
                        scaleUp: {scale: 1}
                    }}
                    initial="initial"
                    animate={animateAirbnb}
                    transition={{duration: 0.5, ease: "easeOut"}}
                />
                <TurnOn_1
                   src={turnOn_1}
                   variants={{
                    initial:{scale:0},
                    scaleUp: {scale: 1}
                }}
                initial="initial"
                animate={animateTurnOn1}
                transition={{duration: 0.5, ease: "easeOut", delay: 0.5}}
                />
                <PowerHeater
                    src={powerHeater}
                    variants={{
                     initial:{scale:0},
                     scaleUp: {scale: 1}
                 }}
                 initial="initial"
                 animate={animatePowerHeater}
                 transition={{duration: 0.5, ease: "easeOut", delay: 1}}
                />
            </Left>

            <Right>
                <SmartCare 
                    src={smartElderlyCare}
                    variants={{
                        initial:{scale:0},
                        scaleUp: {scale: 1}
                    }}
                    initial="initial"
                    animate={animateSmartCare}
                    transition={{duration: 0.5, ease: "easeOut", delay: 2}}
                />
                <TemperatureChange
                    src={temperatureChange}
                    variants={{
                        initial:{scale:0},
                        scaleUp: {scale: 1}
                    }}
                    initial="initial"
                    animate={animateTemperatureChange}
                    transition={{duration: 0.5, ease: "easeOut", delay: 2.5}}
                />
                <TurnOn_2
                    src={turnOn_2}
                    variants={{
                        initial:{scale:0},
                        scaleUp: {scale: 1}
                    }}
                    initial="initial"
                    animate={animateTurnOn2}
                    transition={{duration: 0.5, ease: "easeOut", delay: 3}}
                />
                <Info
                    variants={{
                        initial:{scale:0},
                        scaleUp: {scale: 1}
                    }}
                    initial="initial"
                    animate={animateInfo}
                    transition={{duration: 0.5, ease: "easeOut", delay: 3.5}}
                >
                    <BellIcon src={bellIcon}/>
                    <div> Sending notification to care giver...</div>
                </Info>
            </Right>
            <AllText>
                <If>If...</If>
                <And>And...</And>
                <PopupMessage
                    variants={{
                        initial: { scale: 0, x: 0, y: 150, marginTop:0, marginBottom:0},
                        popUp: { scale: 1, x: -200, y: 0, marginLeft:50, marginTop:70},
                    }}
                    initial="initial"
                    animate={animatePopUpMessage}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.5,
                    }}
                >If movement dectected and temperature change</PopupMessage>
                {showThen_1 && <Then_1>Then...</Then_1>}
                {showThen_2 && <Then_2>Then...</Then_2>}
                {showAnd_1 && <And_1>And...</And_1>}
                {showAnd_2 && <And_2>And...</And_2>}
                {/* {showAnd_3 && <And_3>And...</And_3>} */}
            </AllText>
        </Container>
    )

}

export default Advance_flow;