import React from 'react';
import SubCard from './SubCard';
import '../styles/SubDash.scss';
import { useNavigate } from 'react-router-dom';

const SubDash = () => {
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
    </>
  );
};

export default SubDash;
