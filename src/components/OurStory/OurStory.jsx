import React from "react";
import VisionIcon from "../../assets/vision00_2-removebg-preview.png";
import Button from "../Buttons/Button";
import Text from "../Text/Text";
const OurStory = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm">
          <img className="vision-icon" src={VisionIcon} alt="visionIcon" />
        </div>
        <div className="col-sm">
          <div className="container">
            <div className="mb-5">
              <Text>OUR STORY</Text>
            </div>
            <p className="lead mb-3">
              The concept of an “Atom” was born out of the frustations of
              healthcare end-users - physicians and patients, whose most
              important goal of improved outcome is hindered by the silos of the
              system.
            </p>
            <div className="lead mb-3">
              With Atom, we move the ownership and right-to-share to the
              patients themselves, thereby empowering them with the right to
              personalized care, right to better outcomes every single time they
              seek care. We are strategically positioned to positively make a
              difference in situations that involve telemedicine, emergency
              care, chronic care and travel healthcare.
            </div>
            <Button className="purple-button">Read more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
