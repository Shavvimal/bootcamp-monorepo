import React, { Component } from 'react';

import { News } from './pages';
import { Header, Footer } from './layout';
import './App.css';

function App() {
  return(
    <>
      <Header />
      <News />
      <Footer />
    </>
  );
};

export default App;
