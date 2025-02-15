import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import firstScreen from "./images/firstScreen.png"
import secondScreen from "./images/secondScreen.png"
import blurScreen from "./images/blurScreen.png"
import dropDownIcon from "./images/drop-down-icon.png"
import hand from "./images/hand.png"
import { easeInOut, motion, useAnimationControls } from 'framer-motion'
import Drop_down_list_1 from './Drop_down_list_1'
import dropDownBackground from "./images/dropDownBackground.png"
import Drop_down_list_2 from './Drop_down_list_2'
import hallLight from "./videos/hallway-light-cut.mp4"


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

const Iphone_1 = styled.img`
    width: 290px;
    height: 498px;
`
const Iphone_2 = styled.img`
    width: 290px;
    height: 498px;
    z-index: 3;
`

const DropdownIcon_1 = styled.img`
    position: absolute;
     width: 10px;
    height: 7px;
    top: 395px;
    right: 650px;
`

const DropdownIcon_2 = styled.img`
    position: absolute;
     width: 10px;
    height: 7px;
    top: 455px;
    right: 650px;
`

const DropUpIcon_1 = styled.img`
    position: absolute;
    width: 10px;
    height: 7px;
    top: 395px;
    right: 650px;
    transform: rotate(180deg);
`

const DropUpIcon_2 = styled.img`
    position: absolute;
    width: 10px;
    height: 7px;
    top: 453px;
    right: 650px;
    transform: rotate(180deg);
`


const Hand = styled(motion.img)`
    width: 200px;
    height: 150px;
    position: absolute;
    top: 310px;
    left: 200px;
    z-index: 5;
`

const DropDownBackground_1 = styled.img`
    position: absolute;
    width: 120px;
    height: 25px;
    z-index: 1;
    top: 390px;
    right: 668px;
`

const DropDownBackground_2 = styled.img`
    position: absolute;
    width: 120px;
    height: 25px;
    z-index: 1;
    top: 450px;
    right: 668px;
`

const ChooseCondition_1 = styled.div`
    position: absolute;
    width: 120px;
    height: 25px;
    z-index: 1;
    top: 390px;
    right: 662px;
    font-weight: 500; 
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
`

const ChooseCondition_2 = styled.div`
    position: absolute;
    width: 120px;
    height: 25px;
    z-index: 1;
    top: 450px;
    right: 662px;
    font-weight: 500; 
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
`

const StairCaseVideo = styled.video`
    width: 588px;
    height: 333px;
    margin-top: 97px;
    margin-bottom: 65px;
    z-index: 3;
`


const Customizable_atomation = () => {
    const [showHand, setShowHand] = useState(true)
    const [option1, setOption1] = useState("choose condition")
    const [option2, setOption2] = useState("choose condition")
    const [iconPosition_1, setIconPosition_1] = useState("up")
    const [iconPosition_2, setIconPosition_2] = useState("up")
    const [screen, setScreen] = useState("first")
    const [showVideo, setShowVideo] = useState(false)

    const animateHand = useAnimationControls();
    const animateList_1 = useRef(null)
    const animateList_2 = useRef(null)
    const videoRef = useRef()

    

    const handleAnimation = () => {
        animateHand.set("initial")
        animateHand.start("handFirstMove")

        setTimeout(() => {
            setIconPosition_1("down")
            animateList_1.current("dropList")
            
            setTimeout(() => {
                animateHand.start("handSecondMove")
                setTimeout(() => {
                    setOption1("motion detected")
                    animateList_1.current("withDrawList")
                    setIconPosition_1("up")
                    animateHand.start("handThirdMove")

                    setTimeout(() => {
                        setIconPosition_2("down")
                        animateList_2.current("dropList")

                        setTimeout(() => {
                            animateHand.start("handFourthMove")

                            setTimeout(() => {
                                setOption2("It is dark")
                                animateList_2.current("withDrawList")
                                setIconPosition_2("up")
                                setTimeout(() => {
                                    animateHand.start("handFifthMove")
                                    setTimeout(() => {
                                        setScreen("second")
                                        animateHand.start("handSixMove")
                                        setTimeout(() => {
                                            setShowHand(false)
                                            setScreen("none")
                                            setShowVideo(true)
                                        }, 1500)
                                    }, 1500)
                                }, 500)

                            }, 1500)
                        }, 500)
                    }, 1500)
                }, 1500)

            }, 500)

        }, 1400)

    }

    useEffect(() => {
        handleAnimation()
    }, [])





  return (
    <Container>
        {screen == "first" && <Iphone_1 src={firstScreen}/>}
        {screen == "second" && <Iphone_2 src={secondScreen}/>}

        {iconPosition_1 == "down" && <DropdownIcon_1 src={dropDownIcon}/>}
        {iconPosition_1 == "up" && <DropUpIcon_1 src={dropDownIcon}/>}

        {iconPosition_2 == "down" && <DropdownIcon_2 src={dropDownIcon}/>}
        {iconPosition_2 == "up" && <DropUpIcon_2 src={dropDownIcon}/>}

        <DropDownBackground_1 src={dropDownBackground}/>
        <DropDownBackground_2 src={dropDownBackground}/>

        <ChooseCondition_1>
            {option1 == "choose condition" && <div>Choose condition</div>}
            {option1 == "motion detected" && <div>Motion dectected</div>}
        </ChooseCondition_1>

        <ChooseCondition_2>
            {option2 == "choose condition" && <div>Choose condition</div>}
            {option2 == "It is dark" && <div>It is dark</div>}
        </ChooseCondition_2>

        <Drop_down_list_1 animateList={animateList_1}/>
        <Drop_down_list_2 animateList={animateList_2}/>

        {showHand && <Hand
            src={hand}
            variants = {{
            initial: {x:250, y:60},
            handFirstMove: {x:469, y:60, scale:[1, 1, 0.8, 1]},
            handSecondMove: {x:429, y:100, scale:[1, 1, 0.8, 1]},
            handThirdMove: {x:400, y:120, scale:[1, 1, 0.8, 1]},
            handFourthMove: {x:400, y:150, scale:[1, 1, 0.8, 1]},
            handFifthMove:  {x:400, y:220, scale:[1, 1, 0.8, 1]},
            handSixMove:  {x:400, y:100, scale:[1, 1, 0.8, 1]},

            }}
            initial="initial"
            animate={animateHand}
            transition={{
                x: {duration: 0.5, ease: "easeInOut"},
                scale: {duration: 0.2, delay: 1,  ease: "easeInOut"}
            }}
        />}

        {showVideo && <StairCaseVideo
            autoPlay={true} muted loop ref={videoRef}
        >
            <source src={hallLight} />
        </StairCaseVideo>}
      
    </Container>
  )
}

export default Customizable_atomation
