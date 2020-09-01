import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비지니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  },
]

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 130px;
  background-color: white;
  position: fixed;
  top: 0;
  padding: 20px 50px;
  border-bottom: 3px solid black;
`

const CategoryWrapper = styled.nav`
  margin-top: 10px;
`
const Category = styled.article`
  display: inline-block;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`

const Title = styled(Link)`
  text-decoration: unset;
  color: black;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Title to="/">
        <h1>NEWSSS</h1>
      </Title>
      <CategoryWrapper>
        {
          categories.map((category, idx) => 
            <NavLink 
              activeStyle={{ color: 'blue', fontWeight: 'bold' }} 
              style={{ color: 'black' }}
              key={idx} 
              exact
              to={category.name === 'all' ? '/' : `/${category.name}`}
            >
              <Category>{category.text}</Category>
            </NavLink>
          )
        }
      </CategoryWrapper>
    </HeaderWrapper>
  )
}

export default Header;