import '../styles/SubDash.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import Member from './Member';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHasPaid, swapHasPaid } from '../state/userSlice';

const SubCard = ({ onNavigate }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userSlice.user);
  // console.log('fromsubuser', user);

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
                  key={subscriber._id}
                  subscriptionId={subscription._id}
                  subscriberIds={subscriber._id}
                  hasPaid={subscriber.hasPaid}
                  handleSwitch={() =>
                    dispatch(
                      swapHasPaid({
                        subscriptionId: subscription._id,
                        subscriberId: subscriber._id,
                      })
                    )
                  }
                  subscriber={subscriber.username}
                />
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default SubCard;
