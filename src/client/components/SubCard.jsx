import '../styles/SubDash.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import Member from './Member';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHasPaid } from '../state/userSlice';

const SubCard = ({ onNavigate }) => {
  const dispatch = useDispatch();

  // const handleSwitch = () => {
  //   dispatch(swapHasPaid());
  // };

  const user = useSelector((state) => state.userSlice.user);
  console.log('fromsubuser', user);

  return (
    <div className="subcard-container">
      {user &&
        user.subscriptions.map((subscription) => (
          <div key={subscription._id} className="cards">
            <div className="company" onClick={onNavigate}>
              {subscription.planName}
            </div>
            {subscription.subscribers.map((subscriber) => {
              return (
                <Member
                  hasPaid={subscriber.hasPaid}
                  // handleSwitch={handleSwitch}
                  subscriber={subscriber.username}
                />
              );
            })}
          </div>
        ))}
    </div>
  );

  // <Member />
  // <Member />
  // <Member />
};

export default SubCard;
