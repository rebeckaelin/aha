// type Props = {}
import "../pages/styles/LandingPage.css";
import ahaLogo from "../assets/Aha!.svg";
import yellow from "../assets/char.svg";
import { useNavigate } from "react-router-dom";
import React from "react";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/todos");
  };
  return (
    <>
      <section className="landing-page">
        <div className="landing-page__logo">
          <img
            src={ahaLogo}
            alt="aha-logo"
            className="landing-page__img"
            onClick={() => handleClick()}
          />
          <p className="landing-page__text">A Todo App</p>
        </div>
        <div className="landing-page__footer">
          <img src={yellow} alt="smiley" />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
