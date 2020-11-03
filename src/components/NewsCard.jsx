import React from "react";
import styled from "styled-components";

const StyledNews = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: lightgoldenrodyellow;
  margin-bottom: 10px;
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

const NewsCard = ({
  title,
  description,
  url,
  author,
  image,
  category,
  published,
}) => {
  return (
    <StyledNews>
      <h3>{title}</h3>
      <StyledInfo>
        <div>
          <p>{published}</p>
          <p>{category}</p>
          <p>{author}</p>
        </div>
        <StyledImg src={image} alt="image here"></StyledImg>
      </StyledInfo>
      <button>Read More</button>
      <p>{description}</p>
      <a>{url}</a>
    </StyledNews>
  );
};

export default NewsCard;
