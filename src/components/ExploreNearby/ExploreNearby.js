import React, { useContext } from "react";
import "./exploreNearby.scss";
import { ThemeContext } from "../../context/ThemeContext";
const ExploreNearby = () => {
  const exploreItems = [
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F1.jpg&w=128&q=75",
      name: "Bengaluru",
      description: "3-hour drive",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F2.jpg&w=128&q=75",
      name: "Puducherry",
      description: "3-hour drive",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F3.jpg&w=128&q=75",
      name: "Kodaikannal",
      description: "3.5-hour drive",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F4.jpg&w=128&q=75",
      name: "Mysuru",
      description: "4-hour drive",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F5.jpg&w=128&q=75",
      name: "Chennai",
      description: "4.5-hour drive",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F6.jpg&w=128&q=75",
      name: "Kochi",
      description: "6-hour drive",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F7.jpg&w=128&q=75",
      name: "Ooti",
      description: "3.5-hour drive",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F8.jpg&w=128&q=75",
      name: "Trivandrum",
      description: "7.5-hour drive",
    },
  ];

  //Contexts
  const { darkTheme, changeTheme } = useContext(ThemeContext);
  const { isDarkTheme, darkThemeStyle } = darkTheme;

  return (
    <section
      className="explore-nearby-section-container"
      style={isDarkTheme ? darkThemeStyle : {}}
    >
      <div className="explore-nearby-section container-md">
        <div className="places">
          <h2>Explore nearby</h2>
          <div className="container">
            <div className="row mt-4">
              {exploreItems.map((item, index) => {
                if (index < 4) {
                  return (
                    <div
                      className={
                        isDarkTheme
                          ? "col p-0 d-flex align-items-center darktheme"
                          : "col p-0 d-flex align-items-center"
                      }
                      key={index}
                    >
                      <img src={item.img} alt="Image Loading" />
                      <div className="title">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="row mt-4">
              {exploreItems.map((item, index) => {
                if (index >= 4) {
                  return (
                    <div
                      className={
                        isDarkTheme
                          ? "col p-0 d-flex align-items-center darktheme"
                          : "col p-0 d-flex align-items-center"
                      }
                      key={index}
                    >
                      <img src={item.img} alt="Image Loading" />
                      <div className="title">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className="nearby-banner container-md d-flex flex-column justify-content-center mt-5">
          <h2>Not sure where to go? Perfect.</h2>
          <div className="button-container">
            <a href="#">I'm flexible</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreNearby;
