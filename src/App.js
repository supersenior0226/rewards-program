// Import React and React Router
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Import the components for each page
import TransactionHistory from "./components/TransactionHistory";
import RewardsAll from "./components/RewardsAll";
import RewardsCustomer from "./components/RewardsCustomer";
import Dashboard from "./components/Dashboard";

// Define a function component for the topbar
function Topbar() {
  return (
    <div className="topbar">
      <h1>Retailer Rewards Program</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/transactions">Transaction History</Link>
          </li>
          <li>
            <Link to="/rewards">Rewards</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// Define a function component for the main app
function App() {
  return (
    // Use React Router to handle routing
    <Router>
      {/* Render the topbar component */}
      <Topbar />
      {/* Use the Routes component to render different components based on the path */}
      <Routes>
        {/* Use the Route component to specify the path and element for each route */}
        {/* Render the transaction history component for /transactions path */}
        <Route path="/transactions" element={<TransactionHistory />} />
        {/* Render the rewards all component for /rewards path */}
        <Route path="/rewards" element={<RewardsAll />} />
        {/* Render the rewards customer component for /rewards/:customerId path */}
        <Route path="/rewards/:customerId" element={<RewardsCustomer />} />
        {/* Render the dashboard component for / path */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

// Export the app component
export default App;