import React, { useState } from "react";
import styled from "styled-components";
import altImage from "./../assets/papers.jpg";

const StyledNews = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 10px;
  height: auto;
  width: 770px;
  border: 1px solid grey;
  border-radius: 10px;
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

const StyledContent = styled.div`
  padding: 5px;
  ${({ hidden }) => hidden && "visibility: hidden"}
`;

const StyledButton = styled.button`
  padding: 5px;
  border: none;
  background-color: transparent;
  &:focus{
    outline:0;
  }
  font-weight: 900;
`;

const StyledLink = styled.a`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    
  }
  color: blue;
`;

const NewsCard = ({ title, content, url, author, image, published }) => {
  if (!image) {
    image = altImage;
  }

  const [detail, setDetail] = useState(false);

  return (
    <StyledNews>
      <h3>{title}</h3>
      <StyledInfo>
        <div>
          <p>Date of article: {published}</p>
          <p>Reported by: {author}</p>
          <StyledLink href={url} target="_blank" rel="noreferrer noopener">Link to Site</StyledLink>
        </div>
        <StyledImg src={image} alt=""></StyledImg>
      </StyledInfo>
      {!detail && <StyledButton onClick={()=> setDetail(true)}>ˇ Read More ˇ</StyledButton>}
      <StyledContent hidden={!detail}>
        <p>{content}</p>
      </StyledContent>
      {detail && <StyledButton onClick={()=> setDetail(false)}>ˆ Read Less ˆ</StyledButton>}
    </StyledNews>
  );
};

export default NewsCard;
