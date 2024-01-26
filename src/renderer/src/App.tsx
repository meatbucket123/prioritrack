
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';

function App(): JSX.Element {
  {/* put this below to connect pages 

<Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        
        </Routes>
        </Router>

*/}

    return <Reports />
  
  
}


export default App;
