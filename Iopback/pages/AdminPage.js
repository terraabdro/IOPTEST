import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function AdminPage() {
  const { user } = useContext(UserContext);

  if (!user?.isAdmin) {
    return <div>Access Denied. You must be an admin to view this page.</div>;
  }

  return (
    <div style={styles.container}>
      <h1>Admin Page</h1>
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

export default AdminPage;
