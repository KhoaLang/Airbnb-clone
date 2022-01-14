import React, { useContext } from "react";
import "./discoverThings.scss";
import { ThemeContext } from "../../context/ThemeContext";

const DiscoverThingsToDo = () => {
  const discoverThingsItems = [
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fdiscover%2F1.jpg&w=256&q=75",
      name: "Featured collection: Wanderlust",
      description: "Travel from with Online Experiences.",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fdiscover%2F2.jpg&w=256&q=75",
      name: "Online Experiences",
      description: "Live, interactive activities led by Hosts.",
    },
    {
      img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fdiscover%2F3.jpg&w=256&q=75",
      name: "Experiences",
      description: "Find unforgettable activities near you.",
    },
  ];

  const { darkTheme, changeTheme } = useContext(ThemeContext);
  const { isDarkTheme, darkThemeStyle, darkThemeAdvanceSearchStyle } =
    darkTheme;

  return (
    <section
      className="discoverthings-section-container"
      style={isDarkTheme ? darkThemeStyle : {}}
    >
      <div className="discoverthings-section container-md">
        <h2>Discover things to do</h2>
        <div className="container p-0">
          <div className="row">
            {discoverThingsItems.map((item, index) => (
              <div className="col" key={index}>
                <img src={item.img} alt="Image Loading" />
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverThingsToDo;
