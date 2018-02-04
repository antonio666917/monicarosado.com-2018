import React from "react";
import styled from "styled-components";
import LogoSprint from "../assets/logos/sprint.png";
import LogoBoehringerIngelheim from "../assets/logos/boehringer_ingelheim.png";
import LogoBoysAndGirlsClub from "../assets/logos/boysandgirlsclub.png";
import LogoHonda from "../assets/logos/honda.png";
import LogoLexus from "../assets/logos/lexus.png";
import LogoJoseCuervo from "../assets/logos/josecuervo.png";
import LogoToyota from "../assets/logos/toyota.png";

const StyledBrandGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
  list-style: none;

  li {
  }

  .brand__logo {
    object-fit: contain;
    object-position: center center;
    width: 100%;
    height: 30px;
    filter: grayscale(100%);
    opacity: 0.5;
  }

  @media (min-width: 500px) {
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));

    .brand__logo {
      width: 100%;
      height: 40px;
    }
  }
`;

const Logo = ({ logo, name, url, link }) => {
  const img = (
    <img
      src={`${logo}`}
      alt={`${name}'s Logo`}
      className={`brand__logo  brand__logo-${name}`}
    />
  );
  return <li>{img}</li>;
};

const BrandGrid = () => {
  return (
    <StyledBrandGrid className="brands">
      <Logo name="Sprint" logo={LogoSprint} url="https://www.sprint.com/" />
      <Logo
        name="BoehringerIngelheim"
        logo={LogoBoehringerIngelheim}
        url="https://www.boehringer-ingelheim.us/"
      />
      <Logo
        name="BoysAndGirlsClub"
        logo={LogoBoysAndGirlsClub}
        url="https://www.bgca.org/"
      />
      <Logo name="Honda" logo={LogoHonda} url="https://www.honda.com/" />
      <Logo name="Lexus" logo={LogoLexus} url="http://www.lexus.com/" />
      <Logo name="Toyota" logo={LogoToyota} url="https://www.toyota.com/" />
      <Logo name="JoseCuervo" logo={LogoJoseCuervo} url="http://cuervo.com/" />
    </StyledBrandGrid>
  );
};

export default BrandGrid;
