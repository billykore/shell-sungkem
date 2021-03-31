import React from 'react';
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesH2, ServicesCard, ServicesIcon, ServicesP } from './ServicesElements';
import Icon1 from '../../assets/images/svg1.svg';
import Icon2 from '../../assets/images/svg7.svg';
import Icon3 from '../../assets/images/svg6.svg';

export default function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>24/7 Services</ServicesH2>
          <ServicesP>
            Kami memberikan layanan 24 jam untuk pertanyaan Anda.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Satisfication Guaranted</ServicesH2>
          <ServicesP>
            Kepuasan Anda adalah kesuksesan kami.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Safe and Sound</ServicesH2>
          <ServicesP>
            Dilindungi dengan algoritma cybersecurity.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
