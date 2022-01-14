import React, { useContext } from "react";
import "./tryHosting.scss";
import { ThemeContext } from "../../context/ThemeContext";

const TryHosting = () => {
  const { darkTheme, changeTheme } = useContext(ThemeContext);
  const { isDarkTheme, darkThemeStyle, darkThemeAdvanceSearchStyle } =
    darkTheme;

  return (
    <section
      className="tryhosting-section-container"
      style={isDarkTheme ? darkThemeStyle : {}}
    >
      <div className="tryhosting-section container-md">
        <div className="inner-background d-flex flex-column justify-content-center">
          <h1>Try hosting</h1>
          <p>
            Earn extra income and unlock new oppurtunities by sharing your
            space.
          </p>
          <div className="tryhosting-button">
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryHosting;
