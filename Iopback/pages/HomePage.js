import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function HomePage() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1>Welcome to IOPtest App</h1>
      <p>{user?.isAdmin ? 'You are an Admin' : 'You are a Regular User'}</p>
      {user?.isAdmin && (
        <Link to="/admin">
          <button style={styles.button}>Go to Admin Page</button>
        </Link>
      )}
      <Link to="/user">
        <button style={styles.button}>Go to User Page</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default HomePage;
