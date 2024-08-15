import React from "react";
import "./Step4.css";
import sank from '../assets/sank.png'
import { useNavigate } from "react-router-dom";
function Step4() {
    const navigate = useNavigate();

    function handleNavigate (){
        navigate('/')
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
        <div className="sank">
            <div className="imgg">
                <img src={sank} alt="image" />
            </div>
        <div className="tex">
            <p>Thank You</p>
        </div>
        <div className="text2">
            <h1>
            Thanks for confirming your subscription! We hope you have <br /> fun using our platform. If you ever need support, please feel <br /> free to email us at support@loremgaming.com.

            </h1>
        </div>
        <button className="btnn" onClick={handleNavigate}>Go Back</button>
        </div>
    </div>
  );
}

export default Step4;
