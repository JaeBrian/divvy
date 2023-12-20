import '../styles/SubDash.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import Member from './Member';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleHasPaid,
  swapHasPaid,
  setSubscriptionData,
} from '../state/userSlice';

const SubCard = ({ onNavigate }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userSlice.user);
  // console.log('fromsubuser', user);

  const subCardInfo = (extensionId) => {
    fetch(`http://localhost:8000/getsubname/${extensionId}`, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          const data = response.json();
          console.log('WEEHEE', data);
          return data;
        } else {
          throw new Error('network repsone was not ok');
        }
      })
      .then((subdata) => {
        dispatch(setSubscriptionData(subdata));
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  const subData = useSelector((state) => state.userSlice.subscription);
  console.log('WEHWOEHFOAIJWEF', subData);

  return (
    <div className="subcard-container">
      {user &&
        user.subscriptions.map((subscription) => (
          <div
            key={subscription._id}
            className="cards"
            onClick={() => subCardInfo(subscription._id)}
          >
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

// // sub card
// const handleNavigate = (subscriptionId) => {
//   navigate(`/subcardinfo/${subscriptionId}`);
// };

// // return (
// //   <div className="subcard-container">
// //     {user && user.subscriptions.map((subscription) => (
// //       <div key={subscription._id} className="cards" onClick={() => handleNavigate(subscription._id)}>
// //         <div className="company">
// //     )

// // sub card info

// const { subscriptionId } = useParams();
