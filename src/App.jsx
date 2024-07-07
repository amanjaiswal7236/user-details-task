import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import Loader from './components/Loader';
import './index.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <Router>
      <div className="flex h-screen">
        <UserList users={users} />
        <Routes>
          <Route path="/contacts/:userId" element={<UserDetails users={users} />} />
          <Route path="/" element={<div className="w-2/3 p-4">Select a user to see the details</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
