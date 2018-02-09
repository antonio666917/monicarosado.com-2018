import React from "react";
import styled from "styled-components";
import LogoSprint from "../assets/logos/sprint.png";
import LogoBoehringerIngelheim from "../assets/logos/boehringer_ingelheim.png";
import LogoBoysAndGirlsClub from "../assets/logos/boysandgirlsclub.png";
import LogoHonda from "../assets/logos/honda.png";
import LogoLexus from "../assets/logos/lexus.png";
import LogoJoseCuervo from "../assets/logos/josecuervo.png";
import LogoToyota from "../assets/logos/toyota.png";
import LogoMercedesBenz from "../assets/logos/mercedesbenz.png";
import LogoWalgreens from "../assets/logos/walgreens.png";
import LogoScion from "../assets/logos/scion.png";

const StyledBrandGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem;
  list-style: none;
  margin: 0;
  li {
  }

  .brand__logo {
    object-fit: contain;
    object-position: center center;
    max-width: 110px;
  }

  @media (min-width: 640px) {
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    .brand__logo {
      height: 35px;
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
      <Logo
        name="BoysAndGirlsClub"
        logo={LogoBoysAndGirlsClub}
        url="https://www.bgca.org/"
      />
      <Logo
        name="BoehringerIngelheim"
        logo={LogoBoehringerIngelheim}
        url="https://www.boehringer-ingelheim.us/"
      />

      <Logo name="Honda" logo={LogoHonda} url="https://www.honda.com/" />

      <Logo name="Toyota" logo={LogoToyota} url="https://www.toyota.com/" />
      <Logo name="Lexus" logo={LogoLexus} url="http://www.lexus.com/" />
      <Logo
        name="Mercedes-Benz"
        logo={LogoMercedesBenz}
        url="https://www.mbusa.com/"
      />
      <Logo name="Sprint" logo={LogoSprint} url="https://www.sprint.com/" />
      <Logo name="JoseCuervo" logo={LogoJoseCuervo} url="http://cuervo.com/" />
      <Logo
        name="Walgreens"
        logo={LogoWalgreens}
        url="https://www.walgreens.com/"
      />
      <Logo name="Scion" logo={LogoScion} url="https://www.toyota.com/scion" />
    </StyledBrandGrid>
  );
};

export default BrandGrid;
