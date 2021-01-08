import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Home from './pages';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  )
}
