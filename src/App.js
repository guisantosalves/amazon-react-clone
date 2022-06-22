import React from 'react';
import './App.css';
import Homepage from './Homepage';
import CheckoutPage from './CheckoutPage';

//using react router
import { Routes, Route } from 'react-router-dom';


/*

  Three routes
  localhost.com/
  localhost.com/checkout/
  localhost.com/login/

*/

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/login' element={<h1>Login page</h1>} />
      </Routes>

    </div>
  );
}

export default App;
