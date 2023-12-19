import React, { useState } from 'react';
import Button from '../common/Button';
import '../styles/CustomPlan.scss';

// Users redirected to this page when they choose "CUSTOM" option in SelectPlan.jsx
const CustomPlan = () => {
  const [subscriptionName, setSubscriptionName] = useState('');
  const [monthlyCost, setMonthlyCost] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('clicked', subscriptionName, monthlyCost);
    console.log('types', typeof subscriptionName, typeof monthlyCost);
  };

  return (
    <div className="custom-plan">
      <h1>Add a Subscription</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="subscriptionName">Subscription Name: </label>
        <input
          type="text"
          id="subscriptionName"
          name="subscriptionName"
          value={subscriptionName}
          onChange={(e) => setSubscriptionName(e.target.value)}
          placeholder="Enter Subscription Name"
          className="input-custom-plan"
        />
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
        <Button
          text="Add Subscription"
          onClick={handleFormSubmit}
          type="submit"
          className="submit-custom-plan"
        />
      </form>
    </div>
  );
};

export default CustomPlan;
