import React, { useState } from "react";
import styled from "styled-components";
import altImage from "./../assets/papers.jpg";

const StyledNews = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: lightgoldenrodyellow;
  margin-bottom: 10px;
  height: auto;
  width: 770px;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const StyledImg = styled.img`
  height: 200px;
  width: 270px;
`;

const StyleContent = styled.div`
  padding: 5px;
  ${({ hidden }) => hidden && "visibility: hidden"}
`;

const NewsCard = ({ title, content, url, author, image, published }) => {
  if (!image) {
    image = altImage;
  }

  const [detail, setDetail] = useState("Read More");

  function toggle() {
    if (detail === "Read More") {
      setDetail("Read Less");
    } else {
      setDetail("Read More");
    }
  }

  return (
    <StyledNews>
      <h3>{title}</h3>
      <StyledInfo>
        <div>
          <p>Date of article: {published}</p>
          <p>Reported by: {author}</p>
          <a href={url}>Link to Site</a>
        </div>
        <StyledImg src={image} alt=""></StyledImg>
      </StyledInfo>
      <button onClick={toggle}>{detail}</button>
      <StyleContent hidden={detail === "Read More"}>
        <p>{content}</p>
      </StyleContent>
    </StyledNews>
  );
};

export default NewsCard;
