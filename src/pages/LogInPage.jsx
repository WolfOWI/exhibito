import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import NavigationBar from "../components/NavigationBar";
import LoginImage from "../assets/Log-In imagery.png";
import "../styles/signup.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import SecondaryBtn from "../components/buttons/SecondaryBtn";
import { Form } from "react-bootstrap";

function LogInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
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
      const response = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });
      const token = response.data.token;
      sessionStorage.setItem("token", token); // Store the token
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.userType;
      setMessage("User successfully Logged In!");

      // Redirect based on user role
      if (userRole === "admin") {
        navigate("/admin");
      } else if (userRole === "house") {
        navigate("/home");
      } else {
        navigate("/home");
      }
    } catch (error) {
      setMessage(`Invalid email or password.`);
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex justify-between w-full">
        <div className="w-[100%] md:w-[50%] mt-24">
          <Form onSubmit={handleSubmit} className="2xl:ml-96 xl:ml-56 sm:ml-24 ml-12 mr-24 md:mr-0 py-24">
            <h1 className="font-display">Log In</h1>
            <p className="font-body md:w-[100%]">
              Log in to your account to explore the latest art exhibitions and manage your art
              experiences.
            </p>
            <p className="font-body italic mt-[-10px]">
              Not with us?{" "}
              <Link to="/signup" className="font-body fw-bold text-decoration-none text-scarlet-melody-BASE not-italic">
                Sign Up.
              </Link>
            </p>
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
            <Form.Group controlId="password" className="mb-2">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {message && <p className="font-body font-bold text-scarlet-melody-BASE">{message}</p>}
            <PrimaryBtn label="Log In" type="submit" />
            <Link to="/">
              <SecondaryBtn label="Sign Up" className="m-2" />
            </Link>
          </Form>
        </div>
        <div className="hidden md:block w-[60%]">
          <img src={LoginImage} alt="Log In Illustration" className="h-screen object-cover" />
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
