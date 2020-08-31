import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';

const ProfileCard = styled.article`
  border: 1px solid black;
  width: 500px;
  heigh: 300px;
  padding: 15px;
  margin: 20px;
  text-decoration: none;
`

const Profiles = () => {
  const userList = [
    {
      id: 1,
      name: 'mnoko',
      age: '25',
      job: 'FE DEV'
    },
    {
      id: 2,
      name: 'zaqwes',
      age: '25',
      job: 'FE DEV'
    },
    {
      id: 3,
      name: 'xswerd',
      age: '25',
      job: 'FE DEV'
    },
    {
      id: 4,
      name: 'cdertdf',
      age: '25',
      job: 'FE DEV'
    },
  ]

  return (
    <React.Fragment>
      <Route 
        path="/profiles"
        exact
        render={() => 
          userList.map(user => 
            <Link key={user.id} to={`profiles/${user.name}`} style={{ textDecoration: 'none' }}>
              <ProfileCard>유저: {user.name}</ProfileCard>
            </Link>
          )
        }
      />
      <Route 
        path="/profiles/:username"
        component={Profile}
      />
    </React.Fragment>
  )
}

export default Profiles;