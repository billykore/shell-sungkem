import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyle from './globalStyle';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}