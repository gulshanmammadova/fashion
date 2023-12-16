import React, { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './UpIcon.css';

const UpIcon = () => {
  const [display, setDisplay] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
// console.clear();
  return (
    <div>
      {display ? (
        <FaAngleUp className="up-chevron-icon" style={{bottom:30,opacity:1}} onClick={scrollToTop} />
      ):
      (
        <FaAngleUp className="up-chevron-icon" style={{bottom:0,opacity:0}} onClick={scrollToTop} />
      )
    }
    </div>
  );
};

export default UpIcon;
