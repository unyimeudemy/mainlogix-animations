import { motion, useAnimationControls } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const Container = styled(motion.div)`
    height: 80px;
    width: 160px;
    background: #FFFFFF;
    position: absolute;
    top: 477px;
    right: 639px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #232E31;
    overflow: hidden;
    z-index: 2;
`

const ListItem = styled.div`
    height: 25px;
    width: 160px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-weight: 500; 
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #232E31;
    
`

const Hr = styled.div`
    width: 100%;
    background: #232E31;
    height: 1px;
    margin-top: 1px;
    margin-bottom: 1px;

`

const Drop_down_list_2 = ({animateList}) => {
    const dropList = useAnimationControls()

    animateList.current = async (action) => {
        dropList.set("initial")
        dropList.start(action)
    }


  return (
    <Container
        variants={{
            initial:{ height: 0, opacity: 0 },
            dropList:{ height: 80, opacity: 1 },
            withDrawList:{ height: 0, opacity: 0 }
        }}
        initial="initial"
        animate={dropList}
        transition={{ duration: 0.5, ease: "easeInOut" }}
    >
        <ListItem>It is dark</ListItem>
        <Hr/>
        <ListItem>It is not dark</ListItem>
        <Hr/>
        <ListItem>More...</ListItem>

      
    </Container>
  )
}

export default Drop_down_list_2
