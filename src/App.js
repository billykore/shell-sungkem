import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  )
}
