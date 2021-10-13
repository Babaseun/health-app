import React from "react";
import RoundedIcons from "../Icons/RoundedIcons";
import Text from "../Text/Text";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/arrow-right 1.png";
import "./Card.scss";
const Card = ({ icon, buttonClass, title, description }) => {
  return (
    <div class="card hover-shadow">
      <div class="card-body">
        <div className="card-contents">
          <div className="icon mt-2">
            <RoundedIcons className={buttonClass} icon={icon} />
          </div>
          <div className="text">
            <Text>{title}</Text>
          </div>
          <p className="lead text-center">{description}</p>
          <div className="text">
            <Link to="/{description}">
              See More <img src={RightArrow} alt="right-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
