// Sign Up Page

// Import
import NavigationBar from "../components/NavigationBar";
import "../styles/signup.css";
import SignupImage from "../assets/Sign-up imagery.png";
import React, { useState } from "react";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import SecondaryBtn from "../components/buttons/SecondaryBtn";

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
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
      name: "",
      description: "",
      location: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      image: null,
    });
  };

  return (
    <div className="background">
      <NavigationBar />
      {/* <h1 className="font-display">Sign up Page</h1> */}
      <div className="content">
        <div className="row">
          <div className="col-7">
            <img src={SignupImage} alt="blackandwhite" className="signupImage"></img>
          </div>
          <div className="col-4 ">
            {/* Sign Up Form */}

            <form onSubmit={handleSubmit} className="form1 py-5">
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
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.mobile} 
                      onChange={handleChange}
                      required
                    />
                  </label>
                </li>
                <li>
                  <label>Choose Your Occupancy:</label>
                  <div className="dropdown    ">
                    <select
                      className="form-select bg-canvas-white-BASE border-1 border-canvas-white-100% rounded-full"
                      name="occupancy"
                      value={formData.occupancy}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Occupation</option>
                      <option value="Student">Standard User</option>
                      <option value="Professional">Admin User</option>
                      <option value="Other">Art House Director</option>
                    </select>
                  </div>
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
                <li>
                  <label>
                    Confirm Password:
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </li>
              </ul>
              <div>
                <PrimaryBtn label="Sign Up" />
                <SecondaryBtn label="Log In " className="m-2" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
