//import
import React, { useState, useEffect } from 'react';
import './User.css';

const Users = () => {
  //state to store
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const BASE_URL = 'https://backend-capstone-6-moig.onrender.com';


  // useEffect hook to fetch users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users`);
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUsers(); //call back
  }, []);

  // Function to handle the edit button click
  const handleEditClick = (user) => {
    setEditingUserId(user._id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

   // Function to handle the save button click after editing a user
  const handleSaveClick = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editName, email: editEmail }),// Send the updated user data in the request body
      });

      if (response.ok) {
        setUsers(users.map((user) => (user._id === userId ? { ...user, name: editName, email: editEmail } : user)));
        setEditingUserId(null);  // Reset the editing user ID
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Function to handle the cancel button click during editing
  const handleCancelClick = () => {
    setEditingUserId(null);
  };


  // Function to handle the delete button click
  const handleDeleteClick = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter((user) => user._id !== userId));
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user._id} className="user-item">
          {editingUserId === user._id ? (
            <div>
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
              <input type="text" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
              <button onClick={() => handleSaveClick(user._id)} className="btn btn-primary">
                Save
              </button>
              <button onClick={handleCancelClick} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <button onClick={() => handleEditClick(user)} className="btn btn-primary">
                Edit
              </button>
              <button onClick={() => handleDeleteClick(user._id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
