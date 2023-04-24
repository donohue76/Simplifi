 import React from "react";

const Dashboard = ({ user, onLogout }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
