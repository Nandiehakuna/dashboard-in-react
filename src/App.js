import React from 'react';

import './App.css';
import Header from './components/Header';
import LoginPage from './pages/login/LoginPage';
import GuestRoutes from './routes/GuestRoutes';

function App() {
  return (
   <GuestRoutes/>
  );
}

export default App;
