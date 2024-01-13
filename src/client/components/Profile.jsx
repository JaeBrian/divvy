import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalOpen } from '../state/userSlice';
import Button from '../common/Button';
import '../styles.css';
import { useNavigate } from 'react-router-dom';

// mock user for testing. delete in mvp
const user = {
  username: 'brian',
  email: 'b@brian.com',
};

// Profile "Modal" showing username, email, save, and logout
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUsername, setEditedUsername] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const dispatch = useDispatch();

  const handleProfileBackButton = () => {
    dispatch(setIsModalOpen());
  };

  // 'save' button handler to allow users to update their info
  const handleSaveButtonClick = async (e) => {
    e.preventDefault();

    try {
      // handle bad input
      if (editedUsername === '' || editedEmail === '') {
        throw new Error('Invalid username or email');
      }

      // need to update endpoint to update user's existing username and/or email
      // need actual id from redux
      const id = '65826dace5ece766d3f703ca';
      const response = await fetch(`http://localhost:8000/editprofile/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: editedUsername, email: editedEmail }),
      });

      // updatedUserInfo - returns updated user object in DB
      // need to store the updated user info in Redux
      // const updatedUserInfo = await response.json();

      if (!response.ok) throw new Error('Failed to update user information');

      const res = await response.json();
      console.log(res);

      setIsEditing(false);
      setEditedUsername('');
      setEditedEmail('');
    } catch (error) {
      // need to handle eror
      console.log(error);
    }
  };

  const handleBackButton = () => {
    isEditing ? setIsEditing(false) : handleProfileBackButton();
  };

  const navigate = useNavigate();
  // 'logout' button handler
  const handleLogout = async () => {
    navigate('/');
  };

  return (
    // need to update with redux states
    <div className="profile-wrapper">
      <div className="profile-container">
        {/* may need to add default/fallback picture to the src */}
        {/* <img
        src={user.picture}
        alt="profile picture"
        className="profile-picture"
      /> */}

        {isEditing ? (
          <div className="profile-edit-container">
            <div className="profile-input-container">
              <input
                type="text"
                value={editedUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
                placeholder="New Username"
              />
              <input
                type="email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                placeholder="New Email"
              />
            </div>
            <Button
              text="Save"
              onClick={handleSaveButtonClick}
              className="profile-save-button"
            />
          </div>
        ) : (
          <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <Button text="Edit" onClick={() => setIsEditing(true)} />
          </div>
        )}
        <Button
          text="Back"
          onClick={handleBackButton}
          className="profile-back-button"
        />
        <Button
          text="Log Out"
          onClick={handleLogout}
          className="profile-logout-button"
        />
      </div>
    </div>
  );
};

export default Profile;
