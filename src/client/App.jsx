import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import SubDash from './components/SubDash';
import CustomPlan from './components/CustomPlan';
import AddSub from './components/AddSub';
import Profile from './components/Profile';
import SubCardInfo from './components/SubCardInfo';
import SelectPlan from './components/SelectPlan';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<Signup />} />
        <Route path="/subdash" element={<SubDash />} />
        <Route path="/customplan" element={<CustomPlan />} />
        <Route path="/addsub" element={<AddSub />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subcardinfo" element={<SubCardInfo />} />
        <Route path="/selectplan" element={<SelectPlan />} />
      </Routes>
    </Router>
  );
};

export default App;
