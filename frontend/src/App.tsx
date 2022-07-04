import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Favorite from './components/Favorite/Favorite'
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">

      {/* <Favorite/> */}
      <Detail/>

      </div>
    </div>
  );
}

export default App;
