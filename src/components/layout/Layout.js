import React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
function Layout(props) {
  return (
    <div id="App">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
