import React, { useState } from 'react';
import axios from 'axios';
import '../../src/App.css'; // Import the CSS file

function GenerateInvoice() {
  const [customerMail, setCustomerMail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9099/generateInvoice', { customerMail });
      alert(`Invoice generated: ${response.data.message}`);
    } catch (error) {
      alert('Error generating invoice');
    }
  };

  return (
    <div className="container"> {/* Apply the container class */}
      <h2>Generate Invoice</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Customer Email"
          value={customerMail}
          onChange={(e) => setCustomerMail(e.target.value)}
          required
        />
        <button type="submit">Generate Invoice</button>
      </form>
    </div>
  );
}

export default GenerateInvoice;
