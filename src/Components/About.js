import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import './Assets/Styles/About.css';
import aboutImage from './Assets/Images/about-me.png';

const About = () => {
  return (
    <Container className="my-5">

      <section className="py-5" style={{backgroundColor: "#FAF6F0"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center">
                <span className="fw-bold">Welcome to Donut Diaries</span>
                <h2 className="display-4 fw-bold">About</h2>
                <p className="lead">Your go-to place for detailed reviews, blogs, and everything donut-related!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#FAF6F0" }}>
        <div className="container">
          <div className="row gy-4 gy-md-5 align-items-center">
            <div className="col-lg-6">
              <img className="img-fluid rounded shadow custom-img-size" src={aboutImage} alt="About Us Image" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-3 fw-bold">Who Am I?</h2>
              <p className="lead fs-4 mb-3">Hello! I’m Andreas N. Luy, an Information Technology student from AUF, with a deep love for donuts!</p>
              <p className="mb-4">At Donut Diaries, I share my thoughts and experiences on the world of donuts. From the classics to the most unique flavors. Join me as I discover and review the best donuts!!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#FAF6F0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <span className="fw-bold">My Story</span>
              <h2 className="display-5 fw-bold">My Journey</h2>
              <p className="lead">From a simple love for donuts to an obsession with tasting and reviewing them. My journey is as sweet as the treats I explore.</p>
              <a className="btn" style={{ backgroundColor: "#A13333", color: "#FFFFFF" }} href="/login">Explore my Blog</a>
            </div>
            <div className="col-md-6 offset-md-1">
              <p className="lead">Donut Diaries started with one goal: to share the joy of donuts. Whether it’s a local donut shop or a famous store, my goal is to taste and review them all!</p>
              <p className="lead">Join me on this tasty journey, and together, let's discover the best donuts! From classic glazed to innovative flavors, there’s always something new to try.</p>
            </div>
          </div>
        </div>
      </section>

    </Container>
  );
};

export default About;
