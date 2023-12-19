import React from 'react';
import '../styles/SubCardInfo.scss';

const SubCardInfo = ({ subscriptionName, planPrice, dueDate, members }) => {
  return (
    <div className="subcardinfo-container">
      <div className="subscription-name">{subscriptionName}</div>

      <div className="info-containers">
        <div className="plan-price">Price: {planPrice}</div>
        <div className="due-date">Due: {dueDate}</div>
      </div>

      <div className="members-list">
        {members.map((member, index) => (
          <div key={index} className="member-row">
            {member.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCardInfo;
