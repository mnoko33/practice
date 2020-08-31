import React from 'react';
import styled from "styled-components"
import { Link, NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
  font-size: 40px;
`

const Nav = styled.nav`
  border-bottom: 3px solid black;
`

const P = styled.p`
  display: inline-block;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`

const Header = () => {
  return (
    <React.Fragment>
        <StyledHeader className="header">
          <Link to="/" style={{ textDecoration: 'none' }}>
            리액트 라우터
          </Link>
        </StyledHeader>
        <Nav>
          <NavLink activeStyle={{ background: 'blue' }} to="/first">
            <P>first Page</P>
          </NavLink>
          <NavLink activeStyle={{ background: 'blue' }} to="/second">
            <P>second Page</P>
          </NavLink>
          <NavLink activeStyle={{ background: 'blue' }} to="/third">
            <P>third Page</P>
          </NavLink>
          <NavLink activeStyle={{ background: 'blue' }} to="/profiles">
            <P>Profile</P>
          </NavLink>
        </Nav>
    </React.Fragment>
  )
}

export default Header;