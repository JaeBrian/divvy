import React, { useState } from 'react';
import Button from '../common/Button';
import '../styles/CustomPlan.scss';

// Users redirected to this page when they choose "CUSTOM" option in SelectPlan.jsx
const CustomPlan = () => {
  const [subscriptionName, setSubscriptionName] = useState('');
  const [monthlyCost, setMonthlyCost] = useState('');

  // need logic to store in the database
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // need to update endpoint to store user's custom plan to the database
      const response = await fetch('http://localhost:8000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
        // credentials: 'include',
      });
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
          <label htmlFor="subscriptionName">Subscription Name: </label>
          <input
            type="text"
            id="subscriptionName"
            name="subscriptionName"
            value={subscriptionName}
            onChange={(e) => setSubscriptionName(e.target.value)}
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
