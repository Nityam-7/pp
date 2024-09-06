// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import GenerateInvoice from './components/GenerateInvoice';
import AdminAddCustomer from './components/AdminAddCustomer';
import AdminAddPlan from './components/AdminAddPlan';
import BuyPlan from './components/BuyPlan'
import ViewInvoices from './components/ViewInvoices'
import Payment from './components/Payment'
import './App.css'; 

function AppRoutes() {
  return (
    <div>
      <Router>
      <Routes> {/* Replaced Switch with Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  
        <Route path="/admin/AddCustomer" element={<AdminAddCustomer />} />
        <Route path="/admin/AddPlan" element={<AdminAddPlan />} />
        <Route path="/buyPlan" element={<BuyPlan />} />
        <Route path="/ViewInvoices" element={<ViewInvoices />} />
        <Route path="/generate-invoice" element={<GenerateInvoice />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
    </div>
  );
}

export default AppRoutes;

