import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

import Login from './components/Login'
import Header from './components/header';

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Header />
        
        <Routes>
          <Route exact path='/' element={<Login />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
