import React from 'react';
import logo from './logo.svg';
import Sidebar from './pages/Layout/sidebar/Sidebar';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter basename='/'>
            <Sidebar/>
       </BrowserRouter>
    </div>
  );
}

export default App;
