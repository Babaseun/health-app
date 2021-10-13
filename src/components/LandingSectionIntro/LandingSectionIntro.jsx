import React from "react";
import TempIcon from "../../assets/Group_456-removebg-preview.png";
import ImageFocus from "../../assets/bermix-studio-b8mwvvFs8Ak-unsplash-removebg-preview_1-removebg-preview.png";
import VectorIcon from "../../assets/Vector.png";
import Text from "../Text/Text";
import Button from "../Buttons/Button";

import "./LandingSectionInto.scss";
const LandingSectionIntro = () => {
  return (
    <div className="container">
      <section className="row mt-5">
        <div className="col-sm-6 landing-intro-content-left">
          <Text className="mb-2 black-text">Securely store & share</Text>
          <Text className="purple-text mb-5">Vital Health DATA</Text>
          <Button className="purple-button">Book an Appointment</Button>
        </div>

        <div className="col-sm-6 landing-intro-content-right">
          <div className="container">
            <div className="landing-overlay-background">
              <img className="img-responsive circle-img" src={TempIcon} alt="" />
            </div>
            <div className="landing-overlay">
              <img className="img-responsive doctor-img" src={ImageFocus} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="vector-icon-wrapper">
        <img className="img-responsive vector-icon" src={VectorIcon} alt="" />
      </div>
    </div>
  );
};

export default LandingSectionIntro;
