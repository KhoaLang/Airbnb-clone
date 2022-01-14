import React, { useContext } from "react";
import "./footer.scss";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const aboutItems = [
    "ABOUT",
    "How Airbnb works",
    "Newsroom",
    "Airbnb 2021",
    "Investors",
    "Airbnb Plus",
    "Airbnb Luxe",
  ];

  const communityItems = [
    "COMMUNITY",
    "Diversity & Belonging",
    "Accessibility",
    "Airbnb Associates",
    "Frontline Stays",
    "Guest Referrals",
    "Airbnb.org",
  ];

  const hostItems = [
    "HOST",
    "Host your home",
    "Host an Online Experience",
    "Host an Experience",
    "Responsible hosting",
    "Resource Centre",
    "Community Centre",
  ];

  const supportItems = [
    "SUPPORT",
    "Our COVID-19 Response",
    "Help Centre",
    "Cancellation options",
    "Neighborhood Support",
    "Trust & Safety",
  ];

  const { darkTheme, changeTheme } = useContext(ThemeContext);
  const { isDarkTheme, darkThemeStyle, darkThemeAdvanceSearchStyle } =
    darkTheme;

  return (
    <footer
      className="footer p-5"
      style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
    >
      <div className="inner-footer container-md">
        <div className="container">
          <div className="row">
            <ul className="col">
              {aboutItems.map((item, index) => {
                if (index === 0) {
                  return (
                    <li
                      key={index}
                      className="active"
                      style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
                    >
                      {item}
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className="item"
                      style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
                    >
                      {item}
                    </li>
                  );
                }
              })}
            </ul>
            <ul className="col">
              {communityItems.map((item, index) => {
                if (index === 0) {
                  return (
                    <li
                      key={index}
                      className="active"
                      style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
                    >
                      {item}
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className="item"
                      style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
                    >
                      {item}
                    </li>
                  );
                }
              })}
            </ul>
            <ul className="col">
              {hostItems.map((item, index) => {
                if (index === 0) {
                  return (
                    <li
                      key={index}
                      className="active"
                      style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
                    >
                      {item}
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className="item"
                      style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
                    >
                      {item}
                    </li>
                  );
                }
              })}
            </ul>
            <ul className="col">
              {supportItems.map((item, index) => {
                if (index === 0) {
                  return (
                    <li
                      key={index}
                      className="active"
                      style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
                    >
                      {item}
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className="item"
                      style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
                    >
                      {item}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className="below-items d-flex justify-content-between align-items-center mt-5">
          <div
            className="d-flex align-items-center"
            style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
          >
            <i class="bx bx-copyright"></i>
            <p>
              &nbsp;2022&nbsp;
              <span>
                <a
                  href="https://github.com/KhoaLang"
                  className="active-github-link"
                  style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
                >
                  KLaHD
                </a>
              </span>
            </p>
          </div>
          <div
            className="d-flex align-items-center"
            style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
          >
            <span className="d-flex align-items-center">
              <i
                class="bx bx-globe"
                style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
              ></i>
              <p>English</p>
            </span>
            <span className="d-flex align-items-center">
              <i
                class="bx bx-dollar"
                style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
              ></i>
              <p>USD</p>
            </span>
            <span className="d-flex align-items-center">
              <i
                class="bx bxl-facebook"
                style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
              ></i>
            </span>
            <span className="d-flex align-items-center">
              <i
                class="bx bxl-twitter"
                style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
              ></i>
            </span>
            <span className="d-flex align-items-center">
              <i
                class="bx bxl-instagram"
                style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
              ></i>
            </span>
          </div>
          <div
            className="change-theme"
            style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
            onClick={() => changeTheme()}
          >
            Switch Theme
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
