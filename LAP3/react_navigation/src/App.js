import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { News, About, Home, Jokes } from './pages';
import { Header, Footer } from './layout';

import './App.css';

function App(){

  return(
    <>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/news"><News /></Route>
        <Route path="/jokes"><Jokes /></Route>
      </Switch>
      <Footer />
    </>
  );

};

export default App;
