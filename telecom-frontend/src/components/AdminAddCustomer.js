import React, { useState } from 'react';
import axios from 'axios';
import '../../src/App.css'; // Import the CSS file

function AdminAddCustomer() {
  const [customerName, setCustomerName] = useState('');
  const [customerMail, setCustomerMail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9099/admin/addCustomer', { customerName, customerMail, customerPhone });
      alert('Customer added successfully');
    } catch (error) {
      alert('Error adding customer');
    }
  };

  return (
    <div className="container"> {/* Apply the container class */}
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
        <input type="email" placeholder="Email" value={customerMail} onChange={(e) => setCustomerMail(e.target.value)} required />
        <input type="text" placeholder="Phone" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} required />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
}

export default AdminAddCustomer;
