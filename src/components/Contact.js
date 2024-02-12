import React from 'react'

const Contact = () => {
  return (
   <>
 <section className='contact' id='contact'>

    <h1 className='heading'>Our <span>Contact</span></h1>
<div className="row">
<iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.1858038979217!2d73.0880474742116!3d33.62642404009734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfebc3329f6e07%3A0xa6f2d24a8cf87df6!2sHabib%20Public%20Secondary%20School!5e0!3m2!1sen!2s!4v1691645667358!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <form action="">
        <h4>Get in touch</h4>
        <div className="input-box">
            <span className='fas fa-user'></span>
            <input type='text' placeholder='name'/>
        </div>

       
        <div className="input-box">
            <span className='fas fa-envelope'></span>
            <input type='email' placeholder='email'/>
        </div>

       
        <div className="input-box">
            <span className='fas fa-phone'></span>
            <input type='number' placeholder='number'/>
        </div>
        <input type='submit' value="contact now" className='btn'/>
    </form>
    </div>

 </section>
   </>
  );
};

export default Contact
