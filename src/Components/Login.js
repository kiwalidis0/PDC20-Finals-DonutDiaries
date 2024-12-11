import React, { useState } from 'react';
import { Container, Card, Button} from 'react-bootstrap';
import { Navigate } from 'react-router-dom'; 

const Login = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [redirect, setRedirect] = useState(false); 

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(
        (user) => user.username === formData.username && user.password === formData.password
      );
      if (user) {
        alert('Login successful!');
        localStorage.setItem('loggedIn', 'true');
        setLoggedIn(true);
        setRedirect(true); 
      } else {
        alert('Invalid credentials');
      }
    }
  };

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <Container className="my-4 d-flex justify-content-center">
      <Card className="p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
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

          <div className="d-flex justify-content-center">
            <Button variant="success" type="submit" className="w-50">
              Login
            </Button>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
