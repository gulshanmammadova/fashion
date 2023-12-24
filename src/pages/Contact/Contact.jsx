import React from 'react';
import './Contact.css';
import { MdOutlinePhone } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdMailOutline } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import UpIcon from '../../components/Up/UpIcon.jsx';
const Contact = () => {
  return (
    <div className=''>
      <div className='contact-fullName'>
        <div className='col-lg-12 ' style={{textAlign:'center'}}>
          <h2 className='col-lg-2 col-md-3 col-sm-4'>Contact Us</h2>
        </div>
      </div>
      <div className='App my-container row d-flex container mx-auto'>
        <div className='d col-lg-5 col-md-12 col-sm-12 container'>
          <h4>We’re here to help you!</h4>
          <p>
            Have a question, comment, or brilliant idea you'd like to share? Send us a little note below - we love to hear from you and will always reply!
          </p>
          <div className='x col-lg-12 col-md-8  row d-flex'>
            <div className='iconsp col-lg-5 col-sm-6'>
              <MdOutlinePhone className='icon' />
              <h6>Phone Number</h6>
              <p>Call Us: 800-123-4567</p>
            </div>
            <div className='iconsp col-lg-5 col-sm-6'>
              <MdMailOutline className='icon' />
              <h6>Email:</h6>
              <p>demo@demo.com</p>
            </div>
          </div>
          <div className='x col-lg-12 col-md-8  row d-flex'>
            <div className='iconsp col-lg-5 col-sm-6'>
              <MdOutlineLocationOn className='icon' />
              <h6>Location</h6>
              <p>
                2972 Westheimer Rd. Santa <br /> Ana, Illinois 85486
              </p>
            </div>
            <div className='iconsp col-lg-5 col-sm-6 last-icon'>
              <IoTimeOutline className='icon' />
              <h6>Opening Hours</h6>
              <p>
                Mon-Fri: 9:00 am - 6:00 pm <br />
                Sat: 9:00 am - 4:00 pm <br />
                Sun: 9:00 am - 2:00 pm
              </p>
            </div>
          </div>
        </div>
        <div className='d second-div col-lg-5 col-md-12 col-sm-12 container'>
          <h4>Do you want to get in touch?</h4>
          <p>Let us know how we can help you.</p>
          <div className='x col-lg-12 col-md-8  row d-flex'>
            <form action='' className='form form-control'>
              <label htmlFor='name' className='w-100 my-1'>
                Name
              </label>
              <input type='text' name='name' id='' className='w-100 p-1 m-1' placeholder='Name' />
              <label htmlFor='email' className='w-100 my-1'>
                Email
              </label>
              <input type='email' name='email' placeholder='Email' id='' className='w-100 p-1 m-1' />
              <label htmlFor='textarea' className='w-100 my-1'>
                Message
              </label>
              <textarea name='textarea' id='' cols='30' rows='4' className='w-100 p-1 m-1' placeholder='Message'></textarea>
              <button className='btn btn-large w-100 py-2 mx-auto my-2 submit-btn-contact'> SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
      <UpIcon />
    </div>
  );
};

export default Contact;
