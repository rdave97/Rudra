import React from 'react';

import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Twitter from './Components/Twitter';





function App() {
  return (
    <div className="App">
     <Header />
     <div className="row">
     <Main />
     <Nav />
     <Twitter />
     </div>
     <Footer />
    </div>
  );
}

export default App;
