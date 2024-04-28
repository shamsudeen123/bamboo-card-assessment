import React from "react";
import { IMAGE_URL } from "../constants/config";

// dashboard header component
function Header() {
  return (
    <div className="header-wrapper">
      <div className="d-flex justify-content-start">
        <div className="d-flex justify-content-start">
        <img
          src={IMAGE_URL}
          className="block dark:hidden"
          alt="logo"
          height={60}
          width={80}
          style={{ objectFit: "fill", marginLeft: 80}}
        />
        </div>
      </div>
    </div>
  );
}

export default Header;
