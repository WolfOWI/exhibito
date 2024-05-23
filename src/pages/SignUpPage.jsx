import React, { useState } from "react";
import axios from 'axios';
import NavigationBar from "../components/NavigationBar";
import "../styles/signup.css";
import SignupImage from "../assets/Sign-up imagery.png";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import SecondaryBtn from "../components/buttons/SecondaryBtn";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [userType, setUserType] = useState('');
  const [artHouseId, setArtHouseId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // State for when user selects arthouse
  // const [selectedArtHouse, setSelectedArtHouse] = useState(false);


  // const handleOccupancy = (e) => {
  //   if(e.target.value === ""){

  //   }
  // }

  // When input field changes, update the newEvent state (on navbar)
  // const handleChange = (e) => {
  //   setNewEvent({
  //     ...newEvent,
  //     [e.target.id]: e.target.value,
  //   });
  // };


  const handleSubmit = async (event) => {
    console.log("Handling Submit")
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      console.log(username,
        email,
        mobile,
        userType,
        password,
        artHouseId);
      const response = await axios.post('http://localhost:3001/users/register', {
        username,
        email,
        mobile,
        userType,
        password,
        artHouseId,
      });
      setMessage('User created successfully!');
    } catch (error) {
      setMessage(`Error creating user: ${error.response ? error.response.data.message : error.message}`);
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
                  <label>Choose Your Occupation:</label>
                  <div className="dropdown">
                    <select
                      className="form-select bg-canvas-white-BASE border-1 border-canvas-white-100% rounded-full"
                      name="occupancy"
                      onChange={(e) => setUserType(e.target.value)}
                      required
                    >
                      <option value="">Select Occupation</option>
                      <option value="standard">Standard User</option>
                      <option value="house">Arthouse Director</option>
                    </select>
                  </div>
                  <label className="mt-2">Arthouse:</label>
                  <div className="dropdown">
                    <select
                      className="form-select bg-canvas-white-BASE border-1 border-canvas-white-100% rounded-full"
                      name="occupancy"
                      onChange={(e) => setArtHouseId(e.target.value)}
                      required
                    >
                      <option value="a">Select Arthouse</option>
                      <option value="a">Arthouse 1</option>
                      <option value="a">Arthouse 2</option>
                      <option value="a">Arthouse 3</option>
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
              <div>
                <PrimaryBtn label="Sign Up" onClick={handleSubmit}/>
                <Link to="/login"><SecondaryBtn label="Log In " className="m-2" /></Link>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
