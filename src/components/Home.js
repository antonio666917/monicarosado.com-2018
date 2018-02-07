import React from "react";
import styled from "styled-components";
import BrandGrid from "./BrandGrid";
import Menu from "./Menu";
import ProfilePicture from "../assets/photos/profilepicture.jpg";

const StyledHome = styled.main`
  --mobileProfilePictureSize: 200px;
  --desktopProfilePictureSize: 300px;

  display: grid;
  grid-template-columns: 1.5fr;
  grid-gap: 1rem;
  padding: 1.5rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li,
  button,
  img,
  hr {
    margin: 0;
    padding: 0;
  }

  .main__profilepicture {
    width: var(--mobileProfilePictureSize);
    height: var(--mobileProfilePictureSize);
    border-radius: var(--mobileProfilePictureSize);
    object-fit: cover;
    margin: 0 auto;
  }

  .main__title {
    text-align: center;
  }

  .main__subtitle {
    font-weight: 300;
    font-size: 0.92rem;
    text-align: center;
  }

  .main__brands-wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .main__brands {
    opacity: 0.3;
    font-weight: bold;
    text-align: center;
    font-size: 1rem;
  }

  hr {
    margin: 1rem auto;
    opacity: 0.5;
  }

  @media (min-width: 500px) {
    .main__profilepicture {
      width: var(--desktopProfilePictureSize);
      height: var(--desktopProfilePictureSize);
      border-radius: var(--desktopProfilePictureSize);
    }
    .main__title {
      font-size: 3rem;
    }
    .main__brands-wrapper {
      width: 62%;
    }
  }
`;

const Home = ({ id }) => {
  return (
    <StyledHome id={id}>
      <img className="main__profilepicture" src={ProfilePicture} alt="" />
      <h1 className="main__title">monica rosado</h1>
      <h2 className="main__subtitle">
        digital account and client services lead{" "}
        <span role="img" aria-label="wavy dash emoji">
          〰️
        </span>{" "}
        web, marketing and social media
      </h2>

      <hr />

      <h3 className="main__brands">brand portfolio</h3>
      <div className="main__brands-wrapper">
        <BrandGrid />
      </div>

      <hr />

      <h3 className="main__brands">contact</h3>
      <Menu />
    </StyledHome>
  );
};

export default Home;
