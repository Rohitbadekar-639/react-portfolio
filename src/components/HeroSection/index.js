import React, { Suspense, lazy } from 'react';
import styled from "styled-components";
import HeroBgAnimation from '../HeroBgAnimation';
import { Bio } from '../../data/constants';

const Typewriter = lazy(() => import('typewriter-effect'));

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 30px;
    line-height: 50px;
    margin-bottom: 10px;
  }
`;

const TextLoop = styled.div`
  font-weight: 500px;
  font-size: 20px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 20px;
    line-height: 48px;
    margin-bottom: 10px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-size: 20px;
`;

const SubTitle = styled.div`
  font-size: 17px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 960px) {
    text-align: center;
    max-width: 400px;
  }
  @media screen and (max-width: 640px) {
    font-size: 15px;
    line-height: 30px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  z-index: 1;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 16px 30px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
  position: relative; 
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit; 
    opacity: 0;
    transition: all 0.4s ease-in-out;
    border-radius: inherit; 
  }
  &:hover {
    &::after {
      opacity: 0.3; 
    }
  }
  @media (max-width: 640px) {
    padding: 12px 30px;
    font-size: 18px;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    padding-top: 50px;
  }
  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
    padding-top: 50px;
  }
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  @media screen and (max-width: 640px) {
    max-width: 240px;
    max-height: 240px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 60%;
  right: 0;
  bottom: 0;
  left: 45%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 100px;
  transform: translateX(-50%) translateY(-50%);
  @media screen and (max-width: 960px) {
    justify-content: center;
    padding: 10;
  }
`;

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hello, Myself <br /> {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Suspense fallback={<div>Loading...</div>}>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                      delay: 40,
                    }}
                  />
                </Suspense>
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton 
              href="https://drive.google.com/file/d/1Nl-eHGS0Rr0qfkBUiP8zPknPeWJ7NEIl/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer">
                Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src="/assets/HeroImage.webp" alt="Hero image of Rohit Badekar" loading="lazy" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}

export default HeroSection;
