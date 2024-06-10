import React, { useState } from "react";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import "../styles/signup.css";
import SignupImage from "../assets/Sign-up imagery.png";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import SecondaryBtn from "../components/buttons/SecondaryBtn";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    userType: "standard",
    artHouseId: "none",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // Navigation when signing up successfully

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    console.log("Handling Submit");
    event.preventDefault();

    const { username, email, mobile, userType, password, confirmPassword, artHouseId } = formData;

    // Is there a password entered?
    if (password === "" || confirmPassword === "") {
      setMessage("Please enter a password in both fields.");
      return;
    }

    // Do the password match?
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      // console.log(username, email, mobile, userType, password, artHouseId);
      const response = await axios.post("http://localhost:3001/users/register", {
        username,
        email,
        mobile,
        userType,
        password,
        artHouseId,
      });

      sessionStorage.setItem("token", response.data.token);

      setMessage("User created successfully!");
      navigate("/home");
    } catch (error) {
      setMessage(
        `Error creating user: ${error.response ? error.response.data.message : error.message}`
      );
    }
  };

  return (
    <div className="background">
      <NavigationBar />
      <div className="flex justify-between w-full">
        <div className="hidden md:block w-[60%] ">
          <img src={SignupImage} alt="Signup" className="h-screen object-cover" />
        </div>
        <div className="py-16 ml-8 mr-56">
        <Form onSubmit={handleSubmit}>
              <h1 className="font-display">Sign Up</h1>
              <p className="font-body">
                Join our community of art enthusiasts and gain access to exclusive exhibitions and
                events.
              </p>
              <p className="font-body italic mt-[-10px]">
                Already with us?{" "}
                <Link to="/" className="font-body fw-bold text-decoration-none text-scarlet-melody-BASE not-italic">
                  Log in.
                </Link>
              </p>
              <Form.Group controlId="username" className="mb-2">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-2">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="mobile" className="mb-2">
                <Form.Label>Mobile Number:</Form.Label>
                <Form.Control
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="userType" className="mb-2">
                <Form.Label>Occupation:</Form.Label>
                <Form.Select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                  className="form-select bg-canvas-white-BASE border-1 border-canvas-white-100% rounded-full"
                >
                  <option value="standard" disabled>
                    Select Occupation
                  </option>
                  <option value="standard">Standard User</option>
                  <option value="house">Art House Employee</option>
                </Form.Select>
              </Form.Group>
              {formData.userType === "house" && (
                <Form.Group controlId="artHouseId" className="mb-2">
                  <Form.Label>Select Art House:</Form.Label>
                  <Form.Select
                    name="artHouseId"
                    value={formData.artHouseId}
                    onChange={handleChange}
                    className="form-select bg-canvas-white-BASE border-1 border-canvas-white-100% rounded-full"
                  >
                    <option value="none" disabled>
                      Select Art House
                    </option>
                    <option value="none">No Art House</option>
                    <option value="663de7cebb036aad91e8c5fb">The Art Loft</option>
                    <option value="664c701e7b4a225be6534cf7">The Avant-Garde Gallery</option>
                    <option value="664f5e935123636e1872046b">The Palette Pavilion</option>
                    <option value="664f5e8c5123636e1872046a">Masterpiece Manor</option>
                    <option value="664f5ddd6882bb732229f744">Spectrum Studios</option>
                    <option value="664c70707b4a225be6534cf8">Galleria Imaginarium</option>
                    <option value="664c707b7b4a225be6534cf9">Envision Art Space</option>
                    <option value="664c70847b4a225be6534cfa">Prism Gallery</option>
                    <option value="664c71217b4a225be6534cfb">Artistry Haven</option>
                  </Form.Select>
                </Form.Group>
              )}
              <Form.Group controlId="password" className="mb-2">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="confirmPassword" className="mb-2">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              {message && <p className="font-body font-bold text-scarlet-melody-BASE">{message}</p>}
              <PrimaryBtn label="Sign Up" onClick={handleSubmit} type="submit" />
              <Link to="/">
                <SecondaryBtn label="Log In " className="m-2" />
              </Link>
            </Form>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default SignUpPage;
