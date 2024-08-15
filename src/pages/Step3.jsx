import React from "react";
import "./Step3.css";
import { useNavigate } from "react-router-dom";

function Step3() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/step4");
  }
  function handlecolor() {}
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
                <h1> Step 1</h1>
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
                <h1> Step 2</h1>
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
                <h1> Step 3</h1>
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
                <h1> Step 4</h1>
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
          <p>Pick add-ons</p>
        </div>
        <div className="Please">
          <h1>Add-ons help enhance your gaming experience.</h1>
        </div>
        <div className="carts">
          <div className="carrt">
            <div className="textss">
              <div className="input">
                <input type="checkbox" />
              </div>
              <div className="online">
                <h1>Online service</h1>
                <h2>Access to multiplayer games</h2>
              </div>
              <div className="price">
                <h1>+$1/mo</h1>
              </div>
            </div>
          </div>
          <div className="carrt">
            <div className="textss">
              <div className="input">
                <input type="checkbox" />
              </div>
              <div className="online">
                <h1>Online service</h1>
                <h2>Access to multiplayer games</h2>
              </div>
              <div className="price">
                <h1>+$1/mo</h1>
              </div>
            </div>
          </div>
          <div className="carrt">
            <div className="textss">
              <div className="input">
                <input type="checkbox" />
              </div>
              <div className="online">
                <h1>Online service</h1>
                <h2>Access to multiplayer games</h2>
              </div>
              <div className="price">
                <h1>+$1/mo</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="btnnn">
          <div className="buttonn">
            <button onClick={handleNavigate}>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
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
    </div>
  );
}

export default Step3;
