// src/components/BuyPlan.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../src/App.css'; // Import the CSS file

function BuyPlan() {
  const [customerMail, setCustomerMail] = useState('');
  const [planName, setPlanName] = useState('');
  const [planType, setPlanType] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9099/buyPlan', { customerMail, planName, planType }, { headers: { 'x-access-token': localStorage.getItem('token') } });
      alert('Plan bought successfully');
      navigate('/payment'); // Redirect to the payment page
    } catch (error) {
      alert('Error buying plan');
    }
  };

  return (
    <div className="container"> {/* Apply the container class */}
      <h2>Buy Plan</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Customer Email" value={customerMail} onChange={(e) => setCustomerMail(e.target.value)} required />
        <input type="text" placeholder="Plan Name" value={planName} onChange={(e) => setPlanName(e.target.value)} required />
        <select value={planType} onChange={(e) => setPlanType(e.target.value)} required>
          <option value="">Select Plan Type</option>
          <option value="PREPAID">Prepaid</option>
          <option value="POSTPAID">Postpaid</option>
        </select>
        <button type="submit">Buy Plan</button>
      </form>
    </div>
  );
}

export default BuyPlan;
