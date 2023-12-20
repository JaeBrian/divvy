import React, { useState, useEffect } from 'react';
import SubCard from './SubCard';
import '../styles/SubDash.scss';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen } from '../state/userSlice';
import { fetchUser } from '../state/userSlice';

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

  const user = useSelector((state) => state.userSlice.user);

  console.log('user', user);
  useEffect(() => {
    dispatch(fetchUser(mockdata));
  }, [dispatch]);

  return (
    <>
      <div className="title-container">
        <div className="title">SUBSCRIPTIONS</div>
      </div>

      <div className="card-containers">
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

// user {
//   subscriptions: [
//     disney {subscribers: []}, netflix {subscribers: []}
//   ]

//   }
// }

// const subscriptions = user.subscriptions

// // [
// //     disney {subscribers: []},                            netflix {subscribers: []}
//   // ]
// //    V

// subscriptions.map(subscription => {
//   <SubCard subscription={subscriptions}/>
//   <SubCard subscription={subscriptions}/>
//   <SubCard subscription={subscriptions}/>
// })
