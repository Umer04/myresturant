import React from 'react'
import umer from "../assets/images/umer2.jpg";
import { coffee } from '../Data';
const Blog = () => {
  return (
    <>
      <section className='Blog' id='Blog'>
        <h1 className='heading'>Our <span>Blogs</span></h1>
        <div className="box-container">
            {
coffee.map((item,index)=>
(
<div className="box" key={index}>
<div className="images">
    <img src={item.img} alt=''/>
</div>
<h1>Liked by</h1>
<div className="myImage">
<img src={umer} alt=''/>
</div>
<h2>Umer Haroon</h2>
</div>
)
)
            }
        </div>
      </section>
    </>
  );
};

export default Blog
