import React, { useState } from "react";
import axios from 'axios';
import NavigationBar from "../components/NavigationBar";
import "../styles/signup.css";
import SignupImage from "../assets/Sign-up imagery.png";
import PrimaryBtn from "../components/buttons/PrimaryBtn";

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [userType, setUserType] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/users/register', {
        username,
        email,
        mobile,
        userType,
        password,
      });
      setMessage('User created successfully!');
    } catch (error) {
      setMessage(`Error creating user. Username: ${username} Email: ${email} Mobile: ${mobile} userType: ${userType} Password: ${password}`);
    }
  };

  return (
    <div className="background">
      <NavigationBar />
      <div className="content">
        <div className="row">
          <div className="col-7">
            <img src={SignupImage} alt="Signup" className="signupImage" />
          </div>
          <div className="col-4">
            <form className="form1 py-5" onSubmit={handleSubmit}>
              <h1 className="font-display">Sign Up</h1>
              <p>
                Join our community of art enthusiasts and gain access to exclusive exhibitions and events.
              </p>
              <ul>
                <li>
                  <label>
                    Username:
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Email address:
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Mobile Number:
                    <input
                      type="text"
                      name="mobile"
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </label>
                </li>
                <li>
                  <label>Choose Your Occupancy:</label>
                  <div className="dropdown">
                    <select
                      className="form-select bg-canvas-white-BASE border-1 border-canvas-white-100% rounded-full"
                      name="occupancy"
                      onChange={(e) => setUserType(e.target.value)}
                      required
                    >
                      <option value="">Select Occupation</option>
                      <option value="standard">Standard User</option>
                      <option value="admin">Admin User</option>
                      <option value="house">Art House Director</option>
                    </select>
                  </div>
                </li>
                <li>
                  <label>
                    Password:
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Confirm Password:
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </label>
                </li>
              </ul>
              <PrimaryBtn label="Sign Up" type="submit" onClick={handleSubmit} />
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
