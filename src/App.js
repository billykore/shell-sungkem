import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Maintenance from './components/Maintenance';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Maintenance />
    </div>
  );
}