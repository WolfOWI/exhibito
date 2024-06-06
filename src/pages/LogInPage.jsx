import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import LoginImage from "../assets/Log-In imagery.png";
import "../styles/signup.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import SecondaryBtn from "../components/buttons/SecondaryBtn";

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
      sessionStorage.setItem("token", response.data.token); // Store the token
      setMessage("User successfully Logged In!");
      navigate("/home"); // Redirect to home page after successful login
    } catch (error) {
      setMessage(`Invalid email or password.`);
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex justify-between w-full">
        <div className="w-[100%] md:w-[50%] mt-24">
          <form className="2xl:ml-96 xl:ml-56 sm:ml-24 ml-12 mr-24 md:mr-0 py-24">
            <h1 className="font-display">Log In</h1>
            <p className="font-body md:w-[80%]">
              Log in to your account to explore the latest art exhibitions and manage your art
              experiences.
            </p>
            <p className="font-body italic mt-[-10px]">
              Not with us?{" "}
              <a
                href="/signup"
                className="font-body fw-bold text-decoration-none text-scarlet-melody-BASE not-italic"
              >
                Sign Up.
              </a>
            </p>
            <ul className="w-72">
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
            {message && <p className="font-body font-bold text-scarlet-melody-BASE">{message}</p>}
            <div>
              <PrimaryBtn label="Log In" onClick={handleSubmit} />
              <Link to="/signup">
                <SecondaryBtn label="Sign Up" className="m-2" />
              </Link> 
            </div>
          </form>
        </div>
        <div className="hidden md:block w-[60%]">
          <img src={LoginImage} alt="Log In Illustration" className="h-screen object-cover" />
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
