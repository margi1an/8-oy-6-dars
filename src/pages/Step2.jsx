import React from "react";
import "./Step2.css";
import oneImage from "../assets/one.png";
import twoImage from "../assets/two.png";
import threeImage from "../assets/three.png";
import { useNavigate } from "react-router-dom";

function Step2() {
    const navigate = useNavigate()

    function handleNavigate () {
        navigate('/step3')
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
          <p>Select Your Plan</p>
        </div>
        <div className="Please">
          <h1>You have the option of monthly or yearly billing.</h1>
        </div>
        <div className="cards">
          <div className="oneCard">
            <div className="img">
              <img src={oneImage} alt="" />
            </div>
            <div className="textt">
              <h1>Arcade</h1>
              <h3>$9/mo</h3>
            </div>
          </div>
          <div className="oneCard">
            <div className="img">
              <img src={twoImage} alt="" />
            </div>
            <div className="textt">
              <h1>Advanced</h1>
              <h3>$12/mo</h3>
            </div>
          </div>
          <div className="oneCard">
            <div className="img">
              <img src={threeImage} alt="" />
            </div>
            <div className="textt">
              <h1>Pro</h1>
              <h3>$15/mo</h3>
            </div>
          </div>
        </div>
        <div className="toggle">
          <div className="texttt"><h1>Monthlyy</h1></div>
          <label class="switch-button" for="switch">
            <div class="switch-outer">
              <input id="switch" type="checkbox" />
              <div class="button">
                <span class="button-toggle"></span>
                <span class="button-indicator"></span>
              </div>
            </div>
          </label>
          <div className="texttt"><h2>Yearlyy</h2></div>
        </div>
        <div className="btn">
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

export default Step2;
