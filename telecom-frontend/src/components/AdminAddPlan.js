// src/components/AdminAddPlan.js
import React, { useState } from 'react';
import axios from 'axios';
import '../../src/App.css'; // Import the CSS file

function AdminAddPlan() {
  const [planName, setPlanName] = useState('');
  const [ratePerUnit, setRatePerUnit] = useState('');
  const [planType, setPlanType] = useState('');
  const [prepaidBalance, setPrepaidBalance] = useState('');
  const [billingCycle, setBillingCycle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9099/admin/addPlan', { planName, ratePerUnit, planType, prepaidBalance, billingCycle });
      alert('Plan added successfully');
    } catch (error) {
      alert('Error adding plan');
    }
  };

  return (
    <div className="container"> {/* Apply the container class */}
      <h2>Add Plan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Plan Name"
          value={planName}
          onChange={(e) => setPlanName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rate per Unit"
          value={ratePerUnit}
          onChange={(e) => setRatePerUnit(e.target.value)}
          required
        />
        <select
          value={planType}
          onChange={(e) => setPlanType(e.target.value)}
          required
        >
          <option value="">Select Plan Type</option>
          <option value="PREPAID">Prepaid</option>
          <option value="POSTPAID">Postpaid</option>
        </select>
        <input
          type="number"
          placeholder="Prepaid Balance"
          value={prepaidBalance}
          onChange={(e) => setPrepaidBalance(e.target.value)}
        />
        <input
          type="text"
          placeholder="Billing Cycle"
          value={billingCycle}
          onChange={(e) => setBillingCycle(e.target.value)}
        />
        <button type="submit">Add Plan</button>
      </form>
    </div>
  );
}

export default AdminAddPlan;
