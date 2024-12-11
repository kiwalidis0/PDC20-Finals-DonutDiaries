import React from 'react';
import { Navigate } from 'react-router-dom';

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Assets/Styles/Home.css';

import donutImage from './Assets/Images/donut-home.png';
import featuredDonut1 from './Assets/Images/korean-donut.jpg'; 
import featuredDonut2 from './Assets/Images/glazed-donuts.jpg'; 
import featuredDonut3 from './Assets/Images/butternut.png';

const Home = () => {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="home-page" style={{ backgroundColor: '#FAF6F0' }}>
            <Container className="py-5">
                <div className="row gx-4 align-items-center">
                    <div className="col-md-6">
                        <div className="me-md-2 me-lg-5">
                            <img
                                className="img-fluid rounded-3"
                                src={donutImage}
                                alt="Donut Image"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-md-2 ms-lg-5 mt-5 mt-md-0">
                            <span>Welcome to Donut Diaries</span>
                            <h1 className="display-3 fw-bold mb-0">
                                A Sweet Journey Awaits
                            </h1>
                            <h1>
                                Explore, Taste, and Share!
                            </h1>
                            <p className="lead">
                                Donut Diaries is your go-to space for discovering unique, delicious donut reviews,
                                fun stories, and a community of donut lovers. Join us as we share our passion for all
                                things sweet and fried!
                            </p>
                            <a
                                className="btn btn-lg"
                                href="/blog"
                            >
                                Explore Our Blog
                            </a>
                        </div>
                    </div>
                </div>

                <section className="featured-donuts py-5">
                    <h2 className="text-center mb-4">Top Rated Donuts</h2>
                    <Row className="gx-4">
                        <Col md={6} lg={4}>
                            <Card className="mb-4 shadow-sm">
                                <Card.Img variant="top" src={featuredDonut1} />
                                <Card.Body>
                                    <Card.Title>Korean Donut</Card.Title>
                                    <Card.Text>
                                    Korean Fried Donuts (Kkwabaegi) are a popular street food in South Korea. Made from twisted dough, these donuts are deep-fried until golden and crispy, then coated in cinnamon sugar for a sweet, aromatic finish.
                                    </Card.Text>
                                    <Button variant="outline-danger" className="w-100">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={4}>
                            <Card className="mb-4 shadow-sm">
                                <Card.Img variant="top" src={featuredDonut2} />
                                <Card.Body>
                                    <Card.Title>Glazed Donuts</Card.Title>
                                    <Card.Text>
                                    These soft, fluffy donuts are fried to perfection and topped with a sweet, glossy glaze that melts in your mouth. Their perfect balance of sweetness and texture makes them a timeless favorite for any occasion.                                    
                                    </Card.Text>
                                    <Button variant="outline-danger" className="w-100">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={4}>
                            <Card className="mb-4 shadow-sm">
                                <Card.Img variant="top" src={featuredDonut3} />
                                <Card.Body>
                                    <Card.Title>Butternut</Card.Title>
                                    <Card.Text>
                                        A bite-sized delight coated in a sweet, crunchy butternut topping. These mini treats offer a soft, fluffy texture with a perfect balance of sweetness and nutty flavor, making them an irresistible snack for any time of day.                                    </Card.Text>
                                    <Button variant="outline-danger" className="w-100">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                <section className="community py-5" style={{ backgroundColor: '#461111' }}>
                    <h2 className="text-center text-white mb-4">Join Our Community of Donut Lovers!</h2>
                    <div className="text-center">
                        <p className="lead text-white mb-4">
                            Become part of a vibrant community of donut enthusiasts. Share your reviews, find the best donut spots, and connect with fellow donut fans.
                        </p>
                        <Button variant="light" size="lg" href="/community" className="px-4 py-2">
                            Join the Fun
                        </Button>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Home;
