import React from 'react';
import './index.scss';
import Contact from './Contact';
import Footer from './Footer';
import Header from'./Header'
import Jobs from'./Jobs'





function Home() {
  return (
    <div >
  <Header />
  <Jobs />
  <Contact />
  <Footer />
    </div>
  );
}

export default Home;