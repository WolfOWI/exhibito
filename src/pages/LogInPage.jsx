// Log In Page

// Import
import NavigationBar from "../components/NavigationBar"
import React, { useState } from 'react';
import LoginImage from "../assets/Log-In imagery.png"
import '../styles/signup.css'

function LogInPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send data to backend)
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      description: '',
      location: '',
      price: '',
      bedrooms: '',
      bathrooms: '',
      image: null,
    });
  };

  return (
    <div className="background">
      <NavigationBar />
      {/* <h1 className="font-display">Sign up Page</h1> */}
      <div className="content">
        <div className="row">
          <div className="col-5">
          <form onSubmit={handleSubmit} className="form2 py-5">
              <h1 className="font-display">Log In</h1>
              <p>Log in to your account to explore the latest art exhibitions and manage your art experiences.</p>
              <ul>
                <li>
                  <label>
                    Email address:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </label>
                </li>
                <li>
                  <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                  </label>
                </li>
              </ul>
              <button type="submit" className="btn btn-primary btn-lg px-4 me-md-2">
                Sign Up
              </button>
            </form>
            
          </div>

          <div className="col-7">
            <img src={LoginImage} alt="blackandwhite" className="signupImage"></img>

          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LogInPage;
