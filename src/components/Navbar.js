import React,{useRef} from 'react';
import logo from '../assets/images/logo.png';
import {cart} from '../Data';
const Navbar = () => {
    const searchRef =useRef();
    const cartRef =useRef();
    const navbarRef =useRef();
    const searchHandler=()=>
    {
   searchRef.current.classList.toggle("active");
   cartRef.current.classList.remove("active"); 
   navbarRef.current.classList.remove("active");
    };

    const carthandler=()=>
    {
        cartRef.current.classList.toggle("active"); 
        navbarRef.current.classList.remove("active");
        searchRef.current.classList.remove("active");

    };

    const navbarhandler=()=>
    {
        navbarRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        cartRef.current.classList.remove("active"); 
    };
  return (
   <>
    

    <header className="header">
        <a href="#" className='logo'>
            <img src={logo} alt=""/> 
        </a>
    
    <nav className='navbar' ref={navbarRef}>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#products">Product</a>
            <a href="#contact">Contact</a>
            <a href="#Blog">Blogs</a>
    </nav>

<div className="icons">
    <div className="fas fa-search" onClick={searchHandler}></div>
    <div className="fas fa-shopping-cart" onClick={carthandler}></div>
    <div className="fa-solid fa-bars" id='menu-btn' onClick={navbarhandler}></div>
</div>
<div className='search-form' ref={searchRef}>
    <input type='search' placeholder='Search here..' id="search-box"/>
    <label htmlFor='search-box' className='fas fa-search'></label>
</div>
<div className='cart-items-container' ref={cartRef}>
{
    cart.map((item,index)=>
(
    <div className='cart-items' key={index}>
        <span className='fas fa-times'></span>
        <img src={item.img} alt=''/>
        <div className="content">
            <h3>class item 01</h3>
            <div className="price">$15.99</div>
        </div>
    </div>
))
}
<a href='#' className='btn'>checkout Now</a>
    </div>
</header>
   </>
  )
}

export default Navbar

