import React from 'react';
import './assets/css/style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Product from './components/Product';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';



function App() {
  return (
 <>  
<Navbar/>
<Home/>
<About/>
<Menu/>
<Product/>
<Contact/>
<Blog/>
<Footer/>
    </>
  );
};

export default App;
