import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./molecules/Header";
import HamburgerMenu from "./molecules/HamburgerMenu";
import Sidebar from "./molecules/Sidebar";
import HomeListview from "./components/HomeListview";

// layout component
const Layout = ({ component: Component, restricted, ...rest }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // will trigger the screen size and set to local state
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="layout-wrapper">
      {screenWidth > 767 ? <Header /> : <HamburgerMenu />}
      <div className="d-flex">
        {screenWidth > 767 && <Sidebar />}
        <div
          className={
            screenWidth > 767
              ? "child-container"
              : "child-container-mob-responsive"
          }
        >
          <HomeListview />
        </div>
      </div>
    </div>
  );
};

export default Layout;
