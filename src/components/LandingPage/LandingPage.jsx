import React from "react";
import Navbar from "../Navbar/Navbar";
import LandingSectionIntro from "../LandingSectionIntro/LandingSectionIntro";
import ZapIcon from "../../assets/zap 1.png";
import SecureIcon from "../../assets/Group 457.png";
import LoaderIcon from "../../assets/loader 1.png";
import Text from "../Text/Text";

import "./LandingPage.scss";
import Card from "../Card/Card";
import OurVision from "../OurStory/OurStory";
const LandingPage = () => {
  return (
    <div>
      <div className="landing-page-wrapper">
        <Navbar />
        <LandingSectionIntro />
        <div className="section-columns">
          <Text className="text-center thick-text mb-5 l1">How It Works</Text>
          <div className="container custom-container mb-5">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Card
                  icon={ZapIcon}
                  buttonClass="btn-primary"
                  title="FAST"
                  description="Create a secure profile for your health information using intuitive user interface"
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Card
                  icon={SecureIcon}
                  buttonClass="btn-info"
                  title="SECURE"
                  description="Create a secure profile for your health information using intuitive user interface"
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Card
                  icon={LoaderIcon}
                  buttonClass="btn-purple"
                  title="EASY"
                  description="Create a secure profile for your health information using intuitive user interface"
                />
              </div>
            </div>
            <OurVision />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
