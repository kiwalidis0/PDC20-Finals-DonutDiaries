import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Assets/Styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <Container>
        <Row className="justify-content-center text-center mb-3 mb-lg-5">
          <Col lg={8} xxl={7}>
            <span className='contact-span'>I'd Love to Hear From You</span>
            <h2 className="display-5 fw-bold mb-3 contact-h2">Contact Us</h2>
            <p className="lead">
              At Donut Diaries, I am passionate about bringing the latest news, reviews, and insights
              about everything related to donuts and the world of desserts! Whether you have a question,
              suggestion, or just want to chat about your favorite donut, I am here for you!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form>
              <Row>
                <Col xs={12}>
                  <div className="mb-3">
                    <Form.Control className="bg-light" placeholder="Full name" type="text" />
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="mb-3">
                    <Form.Control className="bg-light" placeholder="Email address" type="email" />
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="mb-3">
                    <Form.Control
                      className="bg-light"
                      placeholder="Your message"
                      as="textarea"
                      rows={5}
                    />
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="d-grid">
                    <Button variant="primary" type="submit" className='send-message btn-lg'>
                      Send message
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md={6}>
            <div className="mt-4 mt-md-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.215701098452!2d120.59555713470152!3d15.146494199375592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2402dee0d49%3A0x6ccb1574d15b576d!2sAngeles%20University%20Foundation!5e0!3m2!1sen!2sph!4v1733904773037!5m2!1sen!2sph"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            <div className="mt-3">
              <p className='contact-p'>
                If you ever find yourself in the area, feel free to visit and share your favorite donut spot with me!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
