import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import BrandGrid from "./BrandGrid";
import Philosophy from "./Philosophy";
import Profile from "./Profile";
import Connect from "./Connect";

const StyledHome = styled.main`
  --pink: #fde9f2;
  --gray: rgba(112, 112, 112, 0.5);
  --black: rgb(82, 82, 82);
  --white: #ffffff;

  display: grid;
  grid-template-columns: 1.5fr;
  grid-gap: 1rem;
  padding: 1rem;

  .main__title {
    text-align: center;
    color: rgba(110, 108, 99, 0.87);
    font-size: 1.5rem;
    margin: 0;

    @media (min-width: 1000px) {
      margin-top: 3.8rem;
      margin-bottom: 3.8rem;
    }
  }

  .main__brands {
    margin-top: 1.8rem;
    margin-bottom: 2rem;
    padding: 20px;
  }
  .main__brands h3 {
    margin-bottom: 2.2rem;
    font-weight: bold;
  }

  .main__legal {
  }
  .main__legal small {
    display: block;
    text-align: center;
    opacity: 0.5;
    font-size: 0.8rem;
  }
`;

const Home = ({ id }) => {
  return (
    <StyledHome id={id}>
      <h1 className="main__title">moni rosado</h1>

      <Hero />

      <div className="main__brands">
        <h3>brand portfolio</h3>
        <BrandGrid />
      </div>

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
