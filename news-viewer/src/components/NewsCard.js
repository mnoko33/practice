import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  width: calc(100% - 32px);
  padding: 20px;
  border: 1px solid black;
  margin: 15px;
`
const Title = styled.h2`
  margin: 10px 0;
`

const Img = styled.img`
  width: 100%;
  height: 300px;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`

const Content = styled.div`
  border-top: 1px solid black;
  width: 100%;
`

const NewsCard = (props) => {
  const { article } = props;
  const handleClickImg = () => {
    window.open(article.url);
  }
  return (
    <Article>
      <Img onClick={handleClickImg} src={article.urlToImage ? article.urlToImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png'} />
      <Content>
        <Title>{article.title}</Title>
        <div>{article.title}</div>
        <div>{article.description}</div>
      </Content>
    </Article>
  )
}

export default NewsCard;