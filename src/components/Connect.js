import React from "react";
import styled from "styled-components";
import FacebookIcon from "react-icons/lib/fa/facebook";
import LinkedInIcon from "react-icons/lib/fa/linkedin";
import InstagramIcon from "react-icons/lib/fa/instagram";
import SpotifyIcon from "react-icons/lib/fa/spotify";
import SkyBG from "../assets/photos/background-sky.jpg";

const StyledConnect = styled.div`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  align-items: center;
  justify-items: center;
  background: var(--pink) url(${SkyBG}) no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 366px;
  margin-bottom: 2rem;

  p {
    color: var(--white);
    font-size: 0.8rem;
    text-align: center;
    margin-top: 2rem;
  }
  h4 {
    text-align: center;
    color: white;
    opacity: 0.6;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin: 0;
  }
  .links {
    border-width: 2px;
    border-style: solid;
    border-radius: 3px;
    border-color: #fff;
    background-color: transparent;
    transition: 0.1s background-color linear, 0.6s color ease;
    color: var(--white);
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    padding: 13px 26px;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0.24em;
    color: #fff;
  }
  .links:hover {
    background: var(--white);
    color: var(--black);
  }

  ul {
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  ul:hover .social__icon {
    opacity: 0.4;
  }

  .social__icon {
    width: 48px;
    height: 48px;
    background: var(--black);
    color: var(--white);
    border-radius: 50px;
    text-align: center;
    font-size: 1.4rem;
    display: block;
    transition: all 0.6s ease;
  }
  .social__icon:hover {
    opacity: 1 !important;
  }
  .social__icon-facebook {
    background: #4267b2;
  }
  .social__icon-linkedin {
    background: #0077b5;
  }
  .social__icon-instagram {
    background: #ed4956;
  }
  .social__icon-spotify {
    background: #1db954;
  }
`;

const Connect = () => {
  return (
    <StyledConnect>
      <h4>let's connect.</h4>
      <a
        className="links"
        href="mailto:hi@monicarosado.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        email
      </a>
      <a
        className="links"
        href="tel:787-644-8557"
        rel="noopener noreferrer"
        target="_blank"
      >
        call
      </a>

      <h4>follow my journey.</h4>
      <ul>
        <li>
          <a
            className="social__icon  social__icon-facebook"
            href="#facebook"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a
            className="social__icon  social__icon-linkedin"
            href="#linkedin"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            className="social__icon  social__icon-instagram"
            href="#instagram"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a
            className="social__icon  social__icon-spotify"
            href="#spotify"
            rel="noopener noreferrer"
          >
            <SpotifyIcon />
          </a>
        </li>
      </ul>
    </StyledConnect>
  );
};

export default Connect;
