import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../common/Button';
import '../styles/Profile.scss';

// mock user for testing. delete in mvp
const user = {
  username: 'kay',
  email: 'kay@kay.com',
};

// Profile "Modal" showing username, email, save, and logout
const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUsername, setEditedUsername] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  // need to update with redux states
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  // 'save' button handler to allow users to update their info
  const handleSaveButtonClick = async (e) => {
    e.preventDefault();

    try {
      // handle bad input
      if (editedUsername === '' || editedEmail === '') {
        throw new Error('Invalid username or email');
      }

      // need to update endpoint to update user's existing username and/or email
      //   const response = await fetch('http://localhost:8000/', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(userData),
      //     // credentials: 'include',
      //   });

      //   if (!response.ok) throw new Error('Failed to update user information');

      setIsEditing(false);
      setEditedUsername('');
      setEditedEmail('');

      // update user data
      // dispatch(updateUser(userData));
    } catch (error) {
      // need to handle eror
      console.log(error);
    }
  };

  const handleBackButton = () => {
    isEditing ? setIsEditing(false) : setIsModalOpen(false);
  };

  // 'logout' button handler
  const handleLogout = async () => {
    // do we need logout route in backend?
    // if yes, update route
    const response = await fetch('http://localhost:8000/', {
      method: 'POST',
      // credentials: 'include',
    });

    if (!response.ok) throw new Error('Failed to logout');

    // clear Redux state
    // dispatch(logoutUser());
  };

  return (
    isModalOpen && (
      // need to update with redux states
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
    )
  );
};

export default Profile;
