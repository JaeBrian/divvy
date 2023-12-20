import '../styles/SubDash.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import Member from './Member';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHasPaid } from '../state/userSlice';
import { fetchUser } from '../state/userSlice';

const SubCard = ({ onNavigate }) => {
  const [subData, setSubData] = useState(null);
  const dispatch = useDispatch();
  //have to grab the data from database which contains the array of members
  //once we grab that array
  //loop through the array of objects
  //access each members name and haspaid
  //all set to false initially
  //map each indices with a toggle function to highlight them green and update data in db to true;
  //each member needs a name property and a haspaid boolean in it

  // members = [{name: true}, {name: false}]

  //   for (const [name, paid] of members) {
  // name
  // color = paid ? "green" : "red"
  //   }
  //NETFLIX TEXT NEEDS TO BE REPLACED FROM DATA IN DATABASE
  /*
  useEffect(() => {
    onMount fetch the logged in users various subscriptions from database...
    //retreive array, look inside nested objects, for a subname property = then destructure and map...
  }. [])
*/
  const mockdata = '65826df4ab2cedce32150a15';
  const user = useSelector((state) => state.userSlice.user);
  console.log('fromsubuser', user);

  return (
    <div className="subcard-container">
      {/* {user &&
        user.subscriptions.map((subscription) => (
          <div key={subscription._id} className="cards">
            <div className="company" onClick={onNavigate}>
              {subscription.planNAme}
            </div> */}
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
