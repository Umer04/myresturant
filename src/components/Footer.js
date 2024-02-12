import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='footer'>
        <div className="share">
            <a href="#" className='fab fa-facebook-f'></a>
            <a href="#" className='fab fa-twitter'></a>
            <a href="#" className='fab fa-instagram'></a>
            <a href="#" className='fab fa-linkedin'></a>
            <a href="#" className='fab fa-pinterest'></a>
        </div>
        <div className='links'>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#products">Product</a>
            <a href="#contact">Contact</a>
            <a href="#Blog">Blogs</a>
        </div>
        <div className='credit'>
            created by <span>codding circulate</span>| All rights reserved
        </div>
        </section> 
    </>
  );
}

export default Footer
