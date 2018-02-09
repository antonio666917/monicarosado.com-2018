import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Brands from "./Brands";
import Philosophy from "./Philosophy";
import Profile from "./Profile";
import Connect from "./Connect";

const StyledHome = styled.main`
  --pink: #fde9f2;
  --gray: rgba(112, 112, 112, 0.5);
  --black: rgb(82, 82, 82);
  --white: #ffffff;
  --container-width: 600px;

  display: grid;
  grid-template-columns: 1.5fr;
  grid-gap: 1rem;
  padding: 1rem;

  .main__title {
    text-align: center;
    color: rgba(110, 108, 99, 0.87);
    font-size: 1.5rem;
    margin: 0;
  }

  .main__legal small {
    display: block;
    text-align: center;
    opacity: 0.5;
    font-size: 0.8rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 640px) {
    .main__title {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }
`;

const Home = ({ id }) => {
  return (
    <StyledHome id={id}>
      <h1 className="main__title">moni rosado</h1>

      <Hero />

      <Brands />

      <Philosophy />

      <Profile />

      <Connect />

      <div className="main__legal">
        <small>moni rosado © {new Date().getFullYear()}</small>
      </div>
    </StyledHome>
  );
};

export default Home;
