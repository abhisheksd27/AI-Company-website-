import React from 'react';
import features from './Data'; 
import NavBar from './Navbar';
import Main from './Main';
import MainTwo from './MainTwo';

const App = () => {
  return (
    <div className='bg-gray-900'>
      <NavBar />
      <Main features={features} />
      <MainTwo/>
    </div>
  );
}

export default App;
