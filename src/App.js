import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Home from './pages';
import SignInPage from './pages/signin';
import NotFoundPage from './pages/404';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/404" exact component={NotFoundPage}></Route>
      </Switch>
    </Router>
  )
}
