import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SubDash from './components/SubDash';
import CustomPlan from './components/CustomPlan';
import AddSub from './components/AddSub';
import SubCardInfo from './components/SubCardInfo';
const App = () => {
  const mockSubCardInfo = {
    subscriptionName: 'Netflix',
    planPrice: '$15.99/month',
    dueDate: '2023-12-30',
    members: [
      { name: 'Brian' },
      { name: 'Nancy' },
      { name: 'Sung' },
      { name: 'Yvonne' },
    ],
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/subdash" element={<SubDash />} />
        <Route path="/customplan" element={<CustomPlan />} />
        <Route path="/addsub" element={<AddSub />} />
        <Route
          path="/subcardinfo"
          element={<SubCardInfo {...mockSubCardInfo} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
