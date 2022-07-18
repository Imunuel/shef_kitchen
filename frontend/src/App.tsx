import React from 'react';
import './App.css';
import "./pages/Favorite/Favorite.css"
import { Header } from './pages/header/Header';
import { Favorite } from './pages/Favorite/Favorite'
import { Menu } from './pages/Menu/Menu';
import { Shef } from './pages/Shef/Shef';
import { Detail } from './pages/Detail/Detail';
import Top from './pages/Top/Top';

import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer/Footer';


function App(){
  return (
    <div className="App">
      <Header/>
      <div className="content">
      <Routes>
      <Route path='/shef' element={<Shef/>} />
      <Route path='/shef/favorite' element={<Favorite/>} />
      <Route path='/shef/recipe/:id' element={<Detail/>}  />
      <Route path='/shef/top' element={<Top/>} />
      <Route path='/shef/menu' element={<Menu/>} />
      </Routes>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
