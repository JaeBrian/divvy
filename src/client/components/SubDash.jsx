import React, { useState, useEffect } from 'react';
import SubCard from './SubCard';
import '../styles/SubDash.scss';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen } from '../state/userSlice';

const SubDash = () => {
  const [subData, setSubData] = useState([]);
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
  const mockdata = '65826df4ab2cedce32150a15';
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/getuser/${mockdata}`,
          {
            method: 'GET',
          }
        );
        const res = await response.json();

        setSubData(res.subscriptions);
        console.log('resres', res);
        console.log('resresres', res.subscriptions);
        console.log('resresresres', subData);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, []);

  console.log('subdata', subData[0]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response2 = await fetch(
          `http://localhost:8000/getsubname/6582732a46ea6342cce6d0da`,
          {
            method: 'GET',
          }
        );
        const res2 = await response2.json();

        console.log('DATA', res2);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, [subData]);
  return (
    <>
      <div className='title-container'>
        <div className='title'>SUBSCRIPTIONS</div>
      </div>

      <div className='card-containers'>
        <SubCard onNavigate={() => handleNavigate('/subcardinfo')} />
        <SubCard onNavigate={() => handleNavigate('/subcardinfo')} />
        <SubCard onNavigate={() => handleNavigate('/subcardinfo')} />
        <SubCard onNavigate={() => handleNavigate('/subcardinfo')} />
      </div>
      <button id='profile' onClick={profileClick}>
        Profile
      </button>
      {modal && <Profile className='popup' />}
    </>
  );
};

export default SubDash;
