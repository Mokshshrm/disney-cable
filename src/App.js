import React from 'react';
import {Routes, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
const App = () => {

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
