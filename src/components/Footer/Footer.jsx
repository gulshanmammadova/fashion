import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import img3 from '../../images/logo/logo.png'
import './Footer.css'
import About from '../../pages/About/About';
import Blog from '../../pages/Blog/Blog';
// import Shop from '../../pages/Shop/Shop'
import HomePage from '../../pages/Home/HomePage';
export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
   
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 p'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{textAlign:'center'}}>
                {/* <MDBIcon icon="gem" className="me-3" /> */}
              <img src={img3} alt="" style={{width:66}} />
              </h6>
              <p>
              Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link className='text-reset' to='/'>
             Home
                </Link>
              </p>
              <p>

                <Link className='text-reset' to='/about'>
              About Us 
                </Link>
              </p>
              <p>
                <Link className='text-reset' to='/blog'>
          Blog
                </Link>
              </p>
              <p>
                <Link className='text-reset' to='/shop'>
           Shop
                </Link>
              </p>
              <p>
                <Link className='text-reset' to='/contact'>
             Contact
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
              fashion@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold ms-2' href='https://github.com/gulshanmammadova'>
          GulshanMammadova
        </a>
      </div>
    </MDBFooter>
  );
}