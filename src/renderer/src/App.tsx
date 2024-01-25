import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
