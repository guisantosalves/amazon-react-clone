import React from 'react';
import './App.css';
import Homepage from './Homepage';

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
        <Route path='/checkout/' element={<h1>Checkout page</h1>} />
        <Route path='/login' element={<h1>Login page</h1>} />
      </Routes>

    </div>
  );
}

export default App;
