import React from "react";
import styled from "styled-components";
import BrandGrid from "./BrandGrid";

const StyledBrands = styled.div`
  margin-top: 1.8rem;
  margin-bottom: 2rem;
  padding: 20px;

  h3 {
    margin-bottom: 2.2rem;
    font-weight: bold;
  }

  @media (min-width: 640px) {
    width: var(--container-width);
    margin: 3rem auto;
  }
`;

const Brands = () => {
  return (
    <StyledBrands>
      <h3>brand portfolio</h3>
      <BrandGrid />
    </StyledBrands>
  );
};

export default Brands;
