import React from "react";
import styled from "styled-components";
import altImage from "./../assets/papers.jpg";

const StyledNews = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: lightgoldenrodyellow;
  margin-bottom: 10px;
  height: 500px;
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

const NewsCard = ({ title, content, url, author, image, published }) => {
  if (!image) {
    image = altImage;
  }

  return (
    <StyledNews>
      <h3>{title}</h3>
      <StyledInfo>
        <div>
          <p>{published}</p>
          <p>{author}</p>
          <a>{url}</a>
        </div>
        <StyledImg src={image} alt=""></StyledImg>
      </StyledInfo>
      <button>Read More</button>
      <p>{content}</p>
    </StyledNews>
  );
};

export default NewsCard;
