import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SubDash from './components/SubDash';
import CustomPlan from './components/CustomPlan';
import AddSub from './components/AddSub';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/subdash" element={<SubDash />} />
        <Route path="/customplan" element={<CustomPlan />} />
        <Route path="/addsub" element={<AddSub />} />
      </Routes>
    </Router>
  );
};

export default App;
