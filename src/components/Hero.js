import React from "react";
import styled from "styled-components";
import LogoBG from "../assets/images/monirosado__background-1080p.jpg";

const StyledHero = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  background: var(--pink) url(${LogoBG}) no-repeat;
  background-size: cover;
  background-position: center -110px;
  background-attachment: fixed;
  min-height: 366px;

  h2 {
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    line-height: 1.6rem;
    font-weight: 900;
    text-align: center;
    color: rgba(111, 108, 117, 0.5);
    margin: 0;
    text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 640px) {
    background-position: center center;
    padding: 7rem 2rem;

    h2 {
      font-size: 5rem;
      line-height: 5rem;
      letter-spacing: -0.06em;
      max-width: var(--container-width);
      margin: 0 auto;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <h2>digital account lead • web, digital, social marketing</h2>
    </StyledHero>
  );
};

export default Hero;
