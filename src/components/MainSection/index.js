import React, { useState } from 'react';
import { MainContainer, MainBg, ImageBg, MainContent, MainH1, MainP, MainBtnWrapper, ArrowForward, ArrowRight } from './MainElements';
import { Button } from "../../globalStyle";
// import backgroundImage from '../../assets/images/Meeting.png';

export default function MainSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <MainContainer id="home">
      <MainBg>
        {/* <ImageBg src={backgroundImage} /> */}
      </MainBg>
      <MainContent>
        <MainH1>Smart Energy Management for UMKM</MainH1>
        <MainP>
          One Stop UMKM Solution
        </MainP>
        <MainBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  )
}
