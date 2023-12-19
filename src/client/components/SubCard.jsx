import '../styles/SubDash.scss';
import React from 'react';
import { useState } from 'react';
import Member from './Member';

const SubCard = ({ onNavigate }) => {
  const [subData, setSubData] = useState(null);
  //NETFLIX TEXT NEEDS TO BE REPLACED FROM DATA IN DATABASE
  /*
  useEffect(() => {
    onMount fetch the logged in users various subscriptions from database...
    //retreive array, look inside nested objects, for a subname property = then destructure and map...
  }. [])
*/
  return (
    <div className="subcard-container">
      <div className="cards">
        <div className="company" onClick={onNavigate}>
          NETFLIX
        </div>
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    </div>
  );
};

export default SubCard;
