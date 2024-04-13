import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LoginPage from './LoginPage';
import Home from './HomePage';
import Connect from './Connect';
import EventCalendar from './EventCalender';
import PrivateRoute from './PrivateRoute'; 


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/calender" element={<EventCalendar />} />  
          </Route>     
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
