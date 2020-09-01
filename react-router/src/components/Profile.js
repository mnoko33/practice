import React, { useEffect } from 'react';


const Profile = ({ match, history }) => {
  const { username } = match.params;
  console.log('history : ', history)
  useEffect(() => {
    const unblock = history.block('떠날거에요?')
    return () => {
      if (unblock) {
        unblock();
      }
    }
  }, [])
  return (
    <React.Fragment>
      이름: {username}
    </React.Fragment>
  )
}

export default Profile;