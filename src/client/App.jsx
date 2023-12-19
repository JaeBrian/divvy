import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubDash from './components/SubDash';
import CustomPlan from './components/CustomPlan';
import AddSub from './components/AddSub';
import SubCardInfo from './components/SubCardInfo';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/subdash" element={<SubDash />} />
        <Route path="/customplan" element={<CustomPlan />} />
        <Route path="/addsub" element={<AddSub />} />
        <Route path="/subcardinfo" element={<SubCardInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
