import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import "../styles/signup.css";
import SignupImage from "../assets/Sign-up imagery.png";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import SecondaryBtn from "../components/buttons/SecondaryBtn";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userType, setUserType] = useState("");
  const [artHouseId, setArtHouseId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeOccupation = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = async (event) => {
    console.log("Handling Submit");
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      console.log(username, email, mobile, userType, password, artHouseId);
      const response = await axios.post("http://localhost:3001/users/register", {
        username,
        email,
        mobile,
        userType,
        password,
        artHouseId,
      });
      setMessage("User created successfully!");
    } catch (error) {
      setMessage(
        `Error creating user: ${error.response ? error.response.data.message : error.message}`
      );
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
                Join our community of art enthusiasts and gain access to exclusive exhibitions and
                events.
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
                  <label>Occupation:</label>
                  <div className="dropdown">
                    <select
                      className="form-select bg-canvas-white-BASE border-1 border-canvas-white-100% rounded-full"
                      name="occupation"
                      onChange={handleChangeOccupation}
                      required
                    >
                      <option value="" disabled>
                        Select Occupation
                      </option>
                      <option value="standard">Standard User</option>
                      <option value="house">Art House Employee</option>
                    </select>
                  </div>
                  {userType === "house" && (
                    <div>
                      <select
                        className="mt-2 form-select bg-canvas-white-BASE border-1 border-canvas-white-100% rounded-full"
                        onChange={(e) => setArtHouseId(e.target.value)}
                      >
                        <option value="" disabled>
                          Select Art House
                        </option>
                        <option value="none">No Art House</option>
                        <option value="1">Art House 1</option>
                        <option value="2">Art House 2</option>
                        <option value="3">Art House 3</option>
                        <option value="4">Art House 4</option>
                        <option value="5">Art House 5</option>
                        <option value="6">Art House 6</option>
                        <option value="7">Art House 7</option>
                        <option value="8">Art House 8</option>
                        <option value="9">Art House 9</option>
                      </select>
                    </div>
                  )}
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
              {message && <p className="font-body font-bold text-scarlet-melody-BASE">{message}</p>}
              <div>
                <PrimaryBtn label="Sign Up" onClick={handleSubmit} />
                <Link to="/login">
                  <SecondaryBtn label="Log In " className="m-2" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
