import React from 'react';
import food2 from '../assets/images/food2.jpg';

const About = () => {
  return (
  <>
  <section className='About' id='about'>
    <h1 className='heading'>
        <span>About</span> Us
    </h1>
    <div className='row'>
        <div className='image'>
     <img src={food2} alt=""/>
        </div>
        <div className="content">
            <h3>What Makes Our Food Special?</h3>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?</p>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?</p>
            <a href='#' className='btn'>learn more</a>
        </div>
    </div>
  </section>
  </>
  )
}

export default About
