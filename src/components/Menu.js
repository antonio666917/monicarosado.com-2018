import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .menu__item {
    color: ${colors.black};
    text-decoration: none;
    font-weight: normal;
    font-weight: 300;
    transition: all 0.666s;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }
  .menu__item:hover {
    background: rgba(0, 0, 0, 0.2);
    color: ${colors.white};
  }

  @media (min-width: 500px) {
    width: 50%;
    margin: 0 auto !important;
  }
`;

const Menu = ({ id }) => {
  return (
    <StyledMenu className="menu">
      <a className="menu__item" href="mailto:hi@monicarosado.com">
        email
      </a>

      <a className="menu__item" href="tel:787-644-8557">
        phone
      </a>
      <a className="menu__item" href="https://linkedin.com">
        linkedin
      </a>
    </StyledMenu>
  );
};

export default Menu;
