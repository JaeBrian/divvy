import React, { useState } from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

// Users redirected to this page when they choose "CUSTOM" option in SelectPlan.jsx
const CustomPlan = () => {
  const [planName, setPlanName] = useState('');
  const [monthlyCost, setMonthlyCost] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // need to update endpoint to store user's custom plan to the database
      // need actual id from redux
      const id = '65826dace5ece766d3f703ca';
      const response = await fetch(
        `http://localhost:8000/addsubscription/${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ planName, monthlyCost }),
        }
      );
      navigate('/subdash');
    } catch (error) {
      // need to handle eror
      console.log(error);
    }
  };

  return (
    <div className="custom-plan">
      <h1>Add a Subscription</h1>
      <form onSubmit={handleFormSubmit} className="custom-plan-form">
        <div className="form-group">
          <label htmlFor="planName">Subscription Name: </label>
          <input
            type="text"
            id="planName"
            name="planName"
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
            placeholder="Subscription Name"
            className="input-custom-plan"
          />
        </div>
        <div className="form-group">
          <label htmlFor="monthlyCost">Monthly Cost: </label>
          <input
            type="number"
            id="monthlyCost"
            name="monthlyCost"
            value={monthlyCost}
            onChange={(e) => setMonthlyCost(e.target.value)}
            placeholder="$19.99"
            className="input-custom-plan"
            min="0"
            step="1"
            inputMode="decimal"
            pattern="^\d*(\.\d{0,2})?$"
          />
        </div>
        <Button
          text="Add Subscription"
          onClick={handleFormSubmit}
          type="submit"
          className="submit-custom-plan-button"
        />
      </form>
    </div>
  );
};

export default CustomPlan;
