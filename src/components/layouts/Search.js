import React, { useState, useEffect, useContext } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import Grid from "@mui/material/Grid";
import { ThemeContext } from "../../context/ThemeContext";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e0565b",
      dark: "#e0565b",
    },
  },
  components: {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          padding: "0px",
          margin: "0px",
        },
      },
    },
  },
});

const Search = (props) => {
  const [currentDate, setCurrentDate] = useState({
    date: "",
    month: "",
    year: "",
  });
  const [date, setDate] = useState(new Date());
  const [activePickItem, setActivePickItem] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const { advanceSearch, setAdvanceSearch, wheelScroll } = props;

  // Context
  const { darkTheme, changeTheme } = useContext(ThemeContext);
  const { isDarkTheme, darkThemeStyle, darkThemeAdvanceSearchStyle } =
    darkTheme;

  const pickDate = [
    { prefix: "", title: "Today" },
    { prefix: "", title: "Yesterday" },
    { prefix: "", title: "This week" },
    { prefix: "", title: "Last week" },
    { prefix: "", title: "This month" },
    { prefix: "", title: "Last month" },
    {
      prefix: <input type="number" placeholder=" - " />,
      title: "days up to today",
    },
    {
      prefix: <input type="number" placeholder=" - " />,
      title: "days starting today",
    },
  ];

  // Take current date
  useEffect(() => {
    let today = new Date();
    let month = "";
    switch (today.getMonth()) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
    }
    setCurrentDate({
      date: today.getDay().toString(),
      month: month,
      year: today.getFullYear().toString(),
    });
  }, []);

  // Advance Search section ***********************************************
  const searchSection = advanceSearch ? (
    <div
      className="advance-search-section d-flex flex-column justify-content-center align-items-center"
      style={isDarkTheme ? darkThemeAdvanceSearchStyle : {}}
    >
      <form
        className="search-bar d-flex justify-content-between align-items-center"
        style={isDarkTheme ? darkThemeStyle : {}}
      >
        <div
          className={
            isDarkTheme && advanceSearch
              ? "advance-search-items d-flex justify-content-center align-items-center hover-dark-theme"
              : "advance-search-items d-flex justify-content-center align-items-center"
          }
        >
          <span className="d-flex flex-column justify-content-center">
            <p style={isDarkTheme ? darkThemeStyle : {}}>Location</p>
            <input
              placeholder="Where are you now?"
              style={isDarkTheme ? darkThemeStyle : {}}
            />
          </span>
        </div>
        <div
          className={
            isDarkTheme && advanceSearch
              ? "advance-search-items d-flex justify-content-center align-items-center hover-dark-theme"
              : "advance-search-items d-flex justify-content-center align-items-center"
          }
        >
          <span className="d-flex flex-column justify-content-center">
            <p style={isDarkTheme ? darkThemeStyle : {}}>Check-in</p>
            <p style={isDarkTheme ? darkThemeStyle : {}}>
              {currentDate.month +
                " " +
                currentDate.date +
                " " +
                currentDate.year}
            </p>
          </span>
        </div>
        <div
          className={
            isDarkTheme && advanceSearch
              ? "advance-search-items d-flex justify-content-center align-items-center hover-dark-theme"
              : "advance-search-items d-flex justify-content-center align-items-center"
          }
        >
          <span className="d-flex flex-column justify-content-center">
            <p style={isDarkTheme ? darkThemeStyle : {}}>Check-out</p>
            <p style={isDarkTheme ? darkThemeStyle : {}}>
              {currentDate.month +
                " " +
                currentDate.date +
                " " +
                currentDate.year}
            </p>
          </span>
        </div>
        <div
          className={
            isDarkTheme && advanceSearch
              ? "last d-flex align-items-center justify-content-between hover-dark-theme"
              : "last d-flex align-items-center justify-content-between"
          }
        >
          <span style={isDarkTheme ? darkThemeStyle : {}}>
            <p>Guest</p>
            <p
              style={
                adultCount + childrenCount > 0 && !isDarkTheme
                  ? { color: "#1e1e38", fontWeight: 800 }
                  : {}
              }
            >
              {adultCount + childrenCount > 0
                ? adultCount + childrenCount
                : "Add"}
              &nbsp; Guest
            </p>
          </span>
          <button className="d-flex justify-content-around align-items-center">
            <i class="bx bx-search"></i>
            <p>Search</p>
          </button>
        </div>
      </form>
      <div className="scrolling-section">
        <div className="pick">
          <div className="pick-title d-flex justify-content-between align-items-center">
            <h5 style={isDarkTheme ? { color: "#fff" } : {}}>
              Pick Check-in & Check-out updates
            </h5>
            <button
              onClick={() => setAdvanceSearch(false)}
              style={isDarkTheme ? { backgroundColor: "#2f1a2a" } : {}}
            >
              Close
            </button>
          </div>
          <div className="pick-content d-flex justify-content-between">
            <ul
              className="left-pick-content"
              style={isDarkTheme ? darkThemeStyle : {}}
            >
              {pickDate.map((item, index) => {
                return item.prefix !== "" ? (
                  <li
                    key={index}
                    className={
                      activePickItem === index ? "active-pick-item" : ""
                    }
                    onClick={() => setActivePickItem(index)}
                  >
                    <span>{item.prefix}</span>
                    <span>{item.title}</span>
                  </li>
                ) : (
                  <li
                    key={index}
                    className={
                      activePickItem === index ? "active-pick-item" : ""
                    }
                    onClick={() => setActivePickItem(index)}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
            <div className="right-pick-content d-flex justify-content-center">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ThemeProvider theme={theme}>
                  <Grid item xs={12} md={6}>
                    <CalendarPicker
                      date={date}
                      onChange={(newDate) => setDate(newDate)}
                    />
                  </Grid>
                </ThemeProvider>
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <div className="add-guest">
          <h5>Add guests</h5>
          <div className="content d-flex align-items-center">
            <div className="adult d-flex justify-content-between align-items-center">
              <p>Adults</p>
              <div className="button d-flex justify-content-between align-items-center">
                <button
                  className={adultCount > 0 ? "active-guest-button" : ""}
                  onClick={() =>
                    adultCount > 0
                      ? setAdultCount((prevCount) => prevCount - 1)
                      : setAdultCount(0)
                  }
                >
                  -
                </button>
                <input type="text" placeholder="0" value={adultCount} />
                <button
                  className="active-guest-button"
                  onClick={() => setAdultCount((prevCount) => prevCount + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="children d-flex justify-content-between align-items-center">
              <p>Children</p>
              <div className="button d-flex align-items-center">
                <button
                  className={childrenCount > 0 ? "active-guest-button" : ""}
                  onClick={() =>
                    childrenCount > 0
                      ? setChildrenCount((prevCount) => prevCount - 1)
                      : setChildrenCount(0)
                  }
                >
                  -
                </button>
                <input type="text" placeholder="0" value={childrenCount} />
                <button
                  className="active-guest-button"
                  onClick={() => setChildrenCount((prevCount) => prevCount + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={
        wheelScroll
          ? "search-section d-flex justify-content-center align-items-center scrolling-animation-search-section"
          : "search-section d-flex justify-content-center align-items-center"
      }
    >
      <form
        className={
          isDarkTheme && wheelScroll
            ? "search-bar d-flex justify-content-between align-items-center dark-border"
            : "search-bar d-flex justify-content-between align-items-center"
        }
        style={isDarkTheme ? darkThemeStyle : {}}
      >
        <input
          onClick={() => setAdvanceSearch(true)}
          placeholder="Where are you going?"
          style={isDarkTheme ? darkThemeStyle : {}}
        />
        <button
          className="d-flex justify-content-around align-items-center"
          style={isDarkTheme ? { border: "2px solid #1e1e38" } : {}}
        >
          <i class="bx bx-search"></i>
          <p>Search</p>
        </button>
      </form>
    </div>
  );
  //  ***********************************************

  return <div className="search-component">{searchSection}</div>;
};

export default Search;
