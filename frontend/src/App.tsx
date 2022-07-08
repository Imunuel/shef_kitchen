import React from 'react';
import './App.css';
import "./components/Favorite/Favorite.css"
import Header from './components/header/Header';
import Favorite from './components/Favorite/Favorite'
import Detail from './components/Detail/Detail';
import Top from './components/Top/Top';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className="content">

      <Routes>
              <Route path='/shef/favorite' element={<Favorite/>} />
              <Route path='/shef/detail' element={<Detail/>} />
              <Route path='/shef/top' element={<Top/>} />
      </Routes>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
