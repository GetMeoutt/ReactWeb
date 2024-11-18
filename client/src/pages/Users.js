import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Users;
