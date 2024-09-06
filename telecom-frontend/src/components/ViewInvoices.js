import React, { useState } from 'react';
import axios from 'axios';
import '../../src/App.css'; // Import the CSS file

function ViewInvoices() {
  const [customerMail, setCustomerMail] = useState('');
  const [invoices, setInvoices] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:9099/invoices', {
        params: { customerMail } // Send customerMail as a query parameter
      });
      setInvoices(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching invoices');
    }
  };

  return (
    <div className="container"> {/* Apply the container class */}
      <h2>View Invoices</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Customer Email"
          value={customerMail}
          onChange={(e) => setCustomerMail(e.target.value)}
          required
        />
        <button type="submit">Fetch Invoices</button>
      </form>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.invoiceId}>
            Invoice ID: {invoice.invoiceId} - Amount: {invoice.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewInvoices;
