import styled from "styled-components";
import { motion, useAnimation, useAnimationControls } from 'framer-motion';
import Selective_focus_lighting_control from "../animations/selective-focus-lighting-control/Selective_focus_lighting_control";
import first_animation from "../animations/selective-focus-lighting-control/first-animation.mp4.lottie.json"
import Lottie from 'lottie-react';
import video from "../animations/selective-focus-lighting-control/videos/first-animation.mp4"
import Modern_thermostat_display from "../animations/modern-thermostate-display/Modern_thermostat_display";
import Camera_view from "../animations/camera-view/Camera_view";
import Flow_creation from "../animations/flow-creation/Flow_creation";
import Grandeur_app from "../animations/grandeur-app/Grandeur-app";
import Thermostat from "../animations/grandeur-app/Thermostat";
import { useEffect, useRef, useState } from "react";
import CameraView from "../animations/grandeur-app/CameraView";
import Advance_flow from "../animations/advance-flow-creation/Advance_flow";
import Motion_and_light from "../animations/motion-and-light/Motion_and_light";
import Customizable_atomation from "../animations/user-cutomizable-automation/Customizable_atomation";



const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #cccccc;
`

const Video = styled.video`
    width: 600px;
    height: auto;
`


const HomePage = () => {

//     const [showLight, setShowLight] = useState(true);
//     const [showThermostat, setShowThermostat] = useState(false);
//     const [showCamera, setShowCamera] = useState(false);
//     const [showAnimation, setShowAnimation] = useState("none")

//     const animateLight = useRef(null);
//     const animateThermostat = useRef(null);
//     const animateCamera = useRef(null);
//     const handleAnimate_1 = useRef(null);
//     const handleAnimate_2 = useRef(null);
//     const handleAnimate_3 = useRef(null);




//  const triggerAllAnimations = async () => {
//     await animateLight.current();

//     setTimeout( async () => {
//         setShowLight(false)
//         setShowThermostat(true)

//         setTimeout( async () => {
//             await animateThermostat.current()
            
//             setTimeout(async () => {
//                 setShowThermostat(false)
//                 setShowCamera(true)

//                 setTimeout(async() => {
//                     await animateCamera.current()

//                     setTimeout(async () => {
//                         setShowCamera(false)
//                         setShowAnimation("one")

//                         setTimeout(async() => {
//                             await handleAnimate_1.current();
//                             setTimeout(() => {
//                                 setShowAnimation("two")
                        
//                                 setTimeout(async () => {
//                                     await handleAnimate_2.current();
                        
//                                     setTimeout(async () => {
//                                         setShowAnimation("three")
                        
//                                         setTimeout(async () => {
//                                             await handleAnimate_3.current();
//                                         }, 10)
//                                     }, 3000)
                        
//                                 }, 10)
                        
//                             }, 4000);
//                         }, 10)


//                     }, 4200)


//                 }, 10)


//             }, 4200)

//         }, 10)

//     }, 4200)







//   };

//   useEffect(() => {
//     triggerAllAnimations();
//   }, []);


// const func = () => {

//     handleAnimate_1.current();
//     // handleAnimate_2.current();
//     // handleAnimate_3.current();


// }

//   useEffect(() => {
//     func();
//   }, []);


    return (
        <Container>
            {/* <Selective_focus_lighting_control />  */}
            {/* <Modern_thermostat_display/> */}
            {/* <Camera_view/> */}
            {/* <Flow_creation/> */}

            {/* <Advance_flow/> */}
            {/* <Motion_and_light/> */}
            <Customizable_atomation/>

            {/* https://www.storyblocks.com/video/stock/british-scottish-fold-cat-close-up-portrait-smf5xc-psk0rchjh4 */}

            {/* <Grandeur_app handleAnimate_1={handleAnimate_1}/> */}
            {/* <Thermostat handleAnimate_2={handleAnimate_2}/> */}
            {/* <CameraView handleAnimate_3={handleAnimate_3}/> */}


        {/* ====================================================================== */}


        {/* {showLight && <Selective_focus_lighting_control animateLight={animateLight}/> }
        {showThermostat && <Modern_thermostat_display animateThermostat={animateThermostat}/>}
        {showCamera && <Camera_view animateCamera={animateCamera}/>}

        {   
            showAnimation == "one" ? 
            <Grandeur_app  handleAnimate_1={handleAnimate_1}/> : 
            showAnimation == "two" ?
            <Thermostat handleAnimate_2={handleAnimate_2}/> :
            showAnimation == "three" &&
            <CameraView handleAnimate_3={handleAnimate_3}/>
        } */}

        {/* ====================================================================== */}


            {/* <Video autoPlay muted loop >
                <source src={video} />
            </Video> */}
        </Container>
    )
}

export default HomePage;