import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from './components/Login'
import Header from './components/header';
import LoginPage from './pages/LoginPage'

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact index path='/' element={<Login />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
