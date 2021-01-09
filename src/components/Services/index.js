import React from 'react';
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesH2, ServicesCard, ServicesIcon, ServicesP } from './ServicesElements';
import Icon1 from '../../assets/images/svg1.svg';
import Icon2 from '../../assets/images/svg2.svg';
import Icon3 from '../../assets/images/svg3.svg';

export default function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Blablaablaaa</ServicesH2>
          <ServicesP>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Blablaablaaa</ServicesH2>
          <ServicesP>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Blablaablaaa</ServicesH2>
          <ServicesP>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
