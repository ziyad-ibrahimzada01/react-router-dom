import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();

  if (!username) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Username: {username}</p>
    </div>
  );
};

export default Profile;
