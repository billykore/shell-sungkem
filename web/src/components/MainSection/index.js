import React, { useState } from 'react';
import { MainContainer, MainBg, ImageBg, MainContent, MainH1, MainP, MainBtnWrapper, ArrowForward, ArrowRight } from './MainElements';
import { Button2 } from "../../globalStyle";
import backgroundImage from '../../assets/images/jpg1.jpg';

export default function MainSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <MainContainer id="home">
      <MainBg>
        <ImageBg src={backgroundImage} />
      </MainBg>
      <MainContent>
        <MainH1>Smart Energy Management for UMKM</MainH1>
        <MainP>
          One Stop UMKM Solution
        </MainP>
        <MainBtnWrapper>
          <Button2
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="false"
            dark="false"
            smooth="true"
            duration={500}
            spy="true"
            exact="true"
            offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button2>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  )
}
