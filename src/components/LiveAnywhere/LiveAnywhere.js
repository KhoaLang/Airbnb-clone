import React, { useContext } from "react";
import "./liveAnywhere.scss";
import { ThemeContext } from "../../context/ThemeContext";

const LiveAnywhere = () => {
  const liveAnywhereItems = [
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Flive%2F1.jpg&w=256&q=75",
      name: "Outdoor getaway",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Flive%2F2.jpg&w=256&q=75",
      name: "Unique stays",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Flive%2F3.jpg&w=256&q=75",
      name: "Entire homes",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Flive%2F4.jpg&w=256&q=75",
      name: "Pets allowed",
    },
  ];

  //Context
  const { darkTheme, changeTheme } = useContext(ThemeContext);
  const { isDarkTheme, darkThemeStyle, darkThemeAdvanceSearchStyle } =
    darkTheme;

  return (
    <section
      className="liveanywhere-section-container"
      style={isDarkTheme ? darkThemeStyle : {}}
    >
      <div className="liveanywhere-section container-md">
        <h2>Live anywhere</h2>
        <div className="container p-0">
          <div className="row">
            {liveAnywhereItems.map((item, index) => (
              <div className="col" key={index}>
                <img src={item.img} alt="Image Loading" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAnywhere;
