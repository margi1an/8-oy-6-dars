import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  function handleNavigat() {
    // Validate the input fields
    let validationErrors = {};
    if (!name) validationErrors.name = "Name is required";
    if (!email) validationErrors.email = "Email address is required";
    if (!phone) validationErrors.phone = "Phone number is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // If no errors, navigate to the next step
      navigate("/step2");
    }
  }

  return (
    <div className="container">
      <div className="navbar">
        <div className="text">
          <div className="step1">
            <div className="button">
              <button>1</button>
            </div>
            <div className="texts">
              <div className="oneText">
                <h1>Step 1</h1>
              </div>
              <div className="twoText">
                <h1>Your Info</h1>
              </div>
            </div>
          </div>
          <div className="step1">
            <div className="button">
              <button>2</button>
            </div>
            <div className="texts">
              <div className="oneText">
                <h1>Step 2</h1>
              </div>
              <div className="twoText">
                <h1>Select Plan</h1>
              </div>
            </div>
          </div>
          <div className="step1">
            <div className="button">
              <button>3</button>
            </div>
            <div className="texts">
              <div className="oneText">
                <h1>Step 3</h1>
              </div>
              <div className="twoText">
                <h1>Add-Ons</h1>
              </div>
            </div>
          </div>
          <div className="step1">
            <div className="button">
              <button>4</button>
            </div>
            <div className="texts">
              <div className="oneText">
                <h1>Step 4</h1>
              </div>
              <div className="twoText">
                <h1>Summary</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="two">
        <div className="personal">
          <p>Personal info</p>
        </div>
        <div className="Please">
          <h1>Please provide your name, email address, and phone number.</h1>
        </div>
        <div className="Name">
          <div className="name">
            <h3>Name</h3>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="e.g. Stephen King"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
        </div>
        <div className="Name">
          <div className="name">
            <h3>Email Address</h3>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
        <div className="Name">
          <div className="name">
            <h3>Phone Number</h3>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>
        <div className="buttonn">
          <button onClick={handleNavigat}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Next Step</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
