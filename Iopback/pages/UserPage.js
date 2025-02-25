import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserPage() {
  const { user } = useContext(UserContext);

  return (
    <div style={styles.container}>
      <h1>User Page</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default UserPage;
