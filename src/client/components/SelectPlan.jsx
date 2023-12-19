import React from 'react';
import '../styles/SelectPlan.scss';
import netflixImage from '../assets/Netflix.png';
import disney from '../assets/disney+.png';
import crunchy from '../assets/crunchy.png';
import { useNavigate } from 'react-router-dom';

const SelectPlan = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/customplan');
  };
  return (
    <>
      <div className="selectplan">
        <h1 id="htitle">SELECT A PLAN</h1>
      </div>

      <div className="plan-container">
        <img id="netflix" src={netflixImage} />
        <img id="disney" src={disney} />
        <img id="crunchy" src={crunchy} />
        <div id="custom" onClick={handleNavigate}>
          CUSTOM
        </div>
      </div>
    </>
  );
  // Page for selecting plan. Users redirected to this page after signing up.
};

export default SelectPlan;
