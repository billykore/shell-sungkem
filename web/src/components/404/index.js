import React from 'react';
import { Button1 } from '../../globalStyle';
import { PageContainer, PageRow, PageWrapper, Column2, Column1, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img, BtnWrap } from './404Elements';

export default function NotFound({ lightBg, id, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, img, alt, primary, dark, dark2 }) {
  return (
    <>
      <PageContainer lightBg={lightBg} id={id}>
        <PageWrapper>
          <PageRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button1
                    to="/"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button1>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </PageRow>
        </PageWrapper>
      </PageContainer>
    </>
  )
}
