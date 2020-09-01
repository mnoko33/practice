import React, { useState ,useEffect } from 'react';
import NewsCard from './NewsCard';

import styled from 'styled-components';
import api from '../api';

const ArticlesWrapper = styled.section`
  margin: 130px 30px 0;
  display: grid;
  width: calc(100vw - 80px);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`

const Loading = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  font-weight: bold;
  line-height: 400px;
  text-align: center;
`

const NewsList = ({ match }) => {
  const { name } = match.params;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    // 기사를 받아오는 api
    const fetchData = async () => {
      const articles = await api.getNewsHeadline(name ? name : 'all');
      setArticles(articles)
      setLoading(false);
    }
    fetchData();
    return () => {
      setArticles([])
    }
  }, [name])
  return (
    <ArticlesWrapper>
      {loading 
        ? <Loading>로딩중...</Loading> 
        : articles.map((article, idx) => <NewsCard key={idx} article={article} />)
      }
    </ArticlesWrapper>
    
    
  )
}

export default NewsList;