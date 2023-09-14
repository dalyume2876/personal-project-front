import React from 'react';
import logo from './logo.svg';
import NavigationBar from './views/NavigationBar'
import Footer from './views/Footer'
import Main from './views/Main'
import './App.css';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
