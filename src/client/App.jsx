import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubDash from './components/SubDash';
import CustomPlan from './components/CustomPlan';
import AddSub from './components/AddSub';
import Profile from './components/Profile';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/subdash" element={<SubDash />} />
        <Route path="/customplan" element={<CustomPlan />} />
        <Route path="/addsub" element={<AddSub />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
