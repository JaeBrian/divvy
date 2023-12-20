import React from 'react';
import SubCard from './SubCard';
import '../styles/SubDash.scss';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen } from '../state/userSlice';

const SubDash = () => {
  // const [openProfile, setOpenProfile] = useState(false);
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.userSlice.modalOpen);

  const profileClick = () => {
    dispatch(setIsModalOpen());
  };

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="title-container">
        <div className="title">SUBSCRIPTIONS</div>
      </div>

      <div className="card-containers">
        <SubCard onNavigate={() => handleNavigate('/subcardinfo')} />
        <SubCard onNavigate={() => handleNavigate('/subcardinfo')} />
        <SubCard onNavigate={() => handleNavigate('/subcardinfo')} />
        <SubCard onNavigate={() => handleNavigate('/subcardinfo')} />
      </div>
      <button id="profile" onClick={profileClick}>
        Profile
      </button>
      {modal && <Profile className="popup" />}
    </>
  );
};

export default SubDash;
