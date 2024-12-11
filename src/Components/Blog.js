import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap';
import jsPDF from 'jspdf';
import './Assets/Styles/Blog.css'; 

function Blog() {
  const [posts, setPosts] = useState(() => {
    try {
      const savedPosts = JSON.parse(localStorage.getItem('blogPosts'));
      return savedPosts || [];
    } catch {
      return [];
    }
  });

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    image: null,
    rating: 0, 
  });

  const [showRecentReviews, setShowRecentReviews] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewPost((prevState) => ({
        ...prevState,
        image: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  const handleRatingChange = (value) => {
    setNewPost((prevState) => ({
      ...prevState,
      rating: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPost.title || !newPost.content) {
      alert('Please fill in all required fields');
      return;
    }

    const post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      rating: newPost.rating,
      author: 'Current User',
      date: new Date().toISOString().split('T')[0],
    };

    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    setNewPost({
      title: '',
      content: '',
      image: null,
      rating: 3, 
    });
  };

  const handleDownloadPdf = (post) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(post.title, 10, 10);
    doc.setFontSize(12);
    doc.text(`Author: ${post.author}`, 10, 20);
    doc.text(`Date: ${post.date}`, 10, 30);
    doc.text(`Rating: ${post.rating} Stars`, 10, 40);
    doc.text(post.content, 10, 50, { maxWidth: 180 });
    doc.save(`${post.title}.pdf`);
  };

  const handleOpenRecentReviews = (post) => {
    setSelectedPost(post);
    setShowRecentReviews(true);
  };

  const handleCloseRecentReviews = () => setShowRecentReviews(false);

  const handleSavePostAsPDF = (post) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(post.title, 10, 10);
    doc.setFontSize(12);
    doc.text(`Author: ${post.author}`, 10, 20);
    doc.text(`Date: ${post.date}`, 10, 30);
    doc.text(`Rating: ${post.rating} Stars`, 10, 40);
    doc.text(post.content, 10, 50, { maxWidth: 180 });
    doc.save(`${post.title}_full.pdf`);
  };

  useEffect(() => {
    const ratingElement = document.querySelector('[data-coreui-toggle="rating"]');
    if (ratingElement && window.coreui) {
      new window.coreui.Rating(ratingElement); 
    }
  }, []);

  return (
    <Container className="blog-container">
      <Row>
        <Col md={8}>
          <h3>Create New Post</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <div className="rating-container">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => handleRatingChange(value)}
                    className={`rating-star ${value <= newPost.rating ? 'rating-selected' : 'rating-unselected'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload Image (Optional)</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {newPost.image && (
                <img
                  src={newPost.image}
                  alt="Preview"
                  className="img-fluid mt-2"
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              )}
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="publish-button"
            >
              Publish Post
            </Button>
          </Form>
        </Col>

        <Col md={4}>
          <h2 className="mb-4 text-end">Recent Reviews</h2>
          {posts.map((post) => (
            <Card key={post.id} className="mb-3 blog-card">
              {post.image && (
                <Card.Img
                  variant="top"
                  src={post.image}
                  alt={post.title}
                  className="card-img-top"
                />
              )}
              <Card.Body className="card-body">
                <Card.Title className="card-title">{post.title}</Card.Title>
                <Card.Subtitle className="card-subtitle mb-2 text-muted">
                  {post.author} - {post.date}
                </Card.Subtitle>
                <Card.Text className="card-text">
                  {post.content.slice(0, 50)}...
                </Card.Text>
                <Button
                  variant="blog-outline-primary"
                  size="sm"
                  onClick={() => handleOpenRecentReviews(post)}
                >
                  View & Save as PDF
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      <Modal show={showRecentReviews} onHide={handleCloseRecentReviews} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedPost?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedPost?.content}</p>
          {selectedPost?.image && <img src={selectedPost.image} alt="Post Image" />}
        </Modal.Body>
        <Modal.Footer>
          <Button classname='blog-close' variant="secondary" onClick={handleCloseRecentReviews}>
            Close
          </Button>
          <Button
            variant="primary"
            className="view-pdf-button"
            onClick={() => handleSavePostAsPDF(selectedPost)}
          >
            Save as PDF
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Blog;
