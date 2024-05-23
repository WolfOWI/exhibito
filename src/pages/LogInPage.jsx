import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from "../components/NavigationBar";
import LoginImage from "../assets/Log-In imagery.png";
import '../styles/signup.css';
import PrimaryBtn from '../components/buttons/PrimaryBtn';
import SecondaryBtn from "../components/buttons/SecondaryBtn";

function LogInPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;

    try {
      console.log("trying axios")
      
      const response = await axios.post('http://localhost:3001/users/login', {
        email,
        password,
      });
      setMessage('User successfully Logged In!');
      navigate('/');  // Redirect to a dashboard or home page after successful login
    } catch (error) {
      setMessage(`Invalid email or password ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div className="background">
      <NavigationBar />
      <div className="content">
        <div className="row">
          <div className="col-5">
            <form className="form2 py-5" >
              <h1 className="font-display">Log In</h1>
              <p>Log in to your account to explore the latest art exhibitions and manage your art experiences.</p>
              <ul>
                <li>
                  <label>
                    Email address:
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Password:
                    <input 
                      type="password" 
                      name="password" 
                      value={formData.password} 
                      onChange={handleChange} 
                      required 
                    />
                  </label>
                </li>
              </ul>
              {message && <p>{message}</p>}
              <div>
                <PrimaryBtn label="Log In" onClick={handleSubmit} />
                <Link to="/signup">
                  <SecondaryBtn label="Sign Up" className="m-2" />
                </Link>
              </div>
            </form>
          </div>
          <div className="col-7">
            <img src={LoginImage} alt="Log In Illustration" className="signupImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
