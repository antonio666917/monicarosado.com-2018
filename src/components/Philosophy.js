import React from "react";
import styled from "styled-components";
import CactusBG from "../assets/photos/background-cactus.jpg";

const StyledPhilosophy = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  grid-gap: 1rem;
  background: var(--pink) url(${CactusBG}) no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 366px;
  margin-bottom: 2rem;

  h3 {
    text-align: center;
    color: white;
    opacity: 0.6;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin: 0;
  }
  h4 {
    text-align: center;
    font-size: 0.65rem;
    line-height: 0.85rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: white;
    margin: 0;
    text-transform: uppercase;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 640px) {
    background-position: center center;
    padding: 7rem;

    h3 {
      font-size: 5rem;
      line-height: 5rem;
      letter-spacing: -0.06em;
      max-width: var(--container-width);
      margin: 0 auto;
    }
  }
`;

const Philosophy = () => {
  return (
    <StyledPhilosophy>
      <h3>productivity stems from passion.</h3>
      <h4>personal leadership philosophy</h4>
    </StyledPhilosophy>
  );
};

export default Philosophy;
