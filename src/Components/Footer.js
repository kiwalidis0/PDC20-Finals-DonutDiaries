import React from 'react';
import { useLocation } from 'react-router-dom'; 
import donutLogo from './Assets/Images/DonutDiaries.png';
import './Assets/Styles/Footer.css';

const Footer = () => {
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/register') {
    return null; 
  }

  return (
    <footer className="py-4 footer">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-12 text-center mb-3">
            <img 
              alt="Donut Diaries Logo" 
              className="img-fluid footer-logo" 
              src={donutLogo} 
              width="150" 
            />
          </div>

          <div className="col-12 text-center">
            <section className="mb-4">
              <p className="footer-p">A PDC20 Final Project using ReactJS, Bootstrap, and CSS</p>
            </section>
          </div>
        </div>

        <div className="row pb-3">
          <div className="col-12 text-center text-muted">
            <div className="d-block d-lg-inline mx-1 footer-privacy fw-bold"> 
              © 2024 Andreas N. Luy AUF BSIT 3A
            </div> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
