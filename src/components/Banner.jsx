import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color:white;
  margin-bottom: 10px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <h1>Best News</h1>
    </StyledBanner>
  );
};

export default Banner;
