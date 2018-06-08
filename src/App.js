import React, { Component } from 'react';

import  User from './User.js'
import Header from './header.js'
import Footer from './footer.jsx'


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <User/>
    <Footer/>
        
      </div>
    );
  }
}

export default App;
