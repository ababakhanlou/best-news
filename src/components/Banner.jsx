import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;
  margin-bottom: 10px;
`;

const StyledSlogan = styled.p``;

const Banner = () => {
  return (
    <StyledBanner>
      <h1>Best News</h1>
      <StyledSlogan>The best news you can't get</StyledSlogan>
    </StyledBanner>
  );
};

export default Banner;
