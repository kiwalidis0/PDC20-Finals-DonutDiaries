import React, { useState } from 'react';
import { Tabs, Tab, Button, Container, ProgressBar, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Assets/Styles/Register.css'

const Register = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('personalInfo');

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.additionalDetails) newErrors.additionalDetails = 'Additional details are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        additionalDetails: '',
      });
      setErrors({});
      setActiveTab('personalInfo');
      navigate('/login'); 
    }
  };

  const handleNext = () => {
    const tabOrder = ['personalInfo', 'contactInfo', 'accountInfo', 'additionalDetails'];
    const currentTabIndex = tabOrder.indexOf(activeTab);
    if (currentTabIndex < tabOrder.length - 1) {
      setActiveTab(tabOrder[currentTabIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const tabOrder = ['personalInfo', 'contactInfo', 'accountInfo', 'additionalDetails'];
    const currentTabIndex = tabOrder.indexOf(activeTab);
    if (currentTabIndex > 0) {
      setActiveTab(tabOrder[currentTabIndex - 1]);
    }
  };

  const handleDiscard = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      confirmPassword: '',
      additionalDetails: '',
    });
    setErrors({});
    setActiveTab('personalInfo');
  };

  const calculateProgress = () => {
    const tabOrder = ['personalInfo', 'contactInfo', 'accountInfo', 'additionalDetails'];
    const currentTabIndex = tabOrder.indexOf(activeTab);
    return ((currentTabIndex + 1) / tabOrder.length) * 100;
  };

  return (
    <Container className="my-4">
      <Card className="p-4 shadow-sm">
        <h1 className="text-center mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <Tabs
            id="register-tabs"
            activeKey={activeTab}
            onSelect={(tab) => setActiveTab(tab)}
            className="mb-3"
            unmountOnExit
          >
            <Tab eventKey="personalInfo" title="Personal Information">
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
              </div>
            </Tab>

            <Tab eventKey="contactInfo" title="Contact Information">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>
            </Tab>

            <Tab eventKey="accountInfo" title="Account Information">
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                />
                {errors.username && <small className="text-danger">{errors.username}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                />
                {errors.confirmPassword && (
                  <small className="text-danger">{errors.confirmPassword}</small>
                )}
              </div>
            </Tab>

            <Tab eventKey="additionalDetails" title="Additional Details">
              <div className="mb-3">
                <label className="form-label">Additional Details</label>
                <textarea
                  className="form-control"
                  value={formData.additionalDetails}
                  onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                />
                {errors.additionalDetails && (
                  <small className="text-danger">{errors.additionalDetails}</small>
                )}
              </div>
            </Tab>
          </Tabs>

          <div className="mb-3">
            <ProgressBar now={calculateProgress()} label={`${Math.round(calculateProgress())}%`} />
          </div>

          <div className="d-flex justify-content-between">
            <Button
              variant="secondary"
              onClick={handlePrevious}
              disabled={activeTab === 'personalInfo'}
            >
              Previous
            </Button>

            <div className="d-flex gap-2">
              <Button variant="outline-danger" onClick={handleDiscard}>
                Cancel
              </Button>

              {activeTab !== 'additionalDetails' ? (
                <Button variant="primary" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button variant="success" type="submit">
                  Register
                </Button>
              )}
            </div>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
