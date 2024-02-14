import React from 'react';
import Header from './headers/header'

const App = () => {
  const [cartItemCounter,setCartItemCounter] = React.useState({
    counter:0,
  })
  return (

    <Header cartItemCounter={cartItemCounter} />

  );
}

export default App;
