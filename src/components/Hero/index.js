import React, { useState } from "react";
import video from "../../videos/video.mp4";
import {
  HeroContainer,
  Herobg,
  Videobg,
  HeroContent,
  Heroh1,
  Herop,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const hoverStateOn = () => {
    setHover(true);
  };
  const hoverStateOff = () => {
    setHover(false);
  };
  return (
      <HeroContainer id="home">
        <Herobg>
          <Videobg
            playsInline
            autoPlay
            loop
            muted
            src={video}
            type="video/mp4"
          />
        </Herobg>
        <HeroContent>
          <Heroh1>Virtual Banking Made Easy</Heroh1>
          <Herop>
            Sign Up for a new account today and recieve $250 in credit towards
            your next payment.{" "}
          </Herop>
          <HeroBtnWrapper>
            <Button
              to="signup"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onMouseEnter={hoverStateOn}
              onMouseLeave={hoverStateOff}
              fontbig
              primary
              dark
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
  );
};

export default Hero;
