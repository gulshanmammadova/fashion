import React from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='news-part'>
<div className='container d-flex all-news'>
    <div className='col-lg-6 col-md-6 col-sm'>
<p className='news-header'>newsletter</p>
<p>	Receive a 10% discount code via email when you sign up for our Store offers & updates.</p>
    </div>

    <div className='col-lg-6 col-md-6 col-sm'>
      <form action="">

      <input type="email" className='inp-for-news-letter mx-auto ' placeholder='Email Address' />
<button className='btn btn-large w-25' > SUBMIT</button>
      </form>

    </div>
    </div>        
    </div>
  )
}

export default NewsLetter