import React, { useEffect } from "react";
import ProtoTypes from "prop-types";
import { useState } from "react";
import { sideMenuArr } from "../constants/sideMenu";

// sidebar component
function Sidebar() {
  const [navItem, setNavItem] = useState(sideMenuArr);

  // handle active menu on rendering
  useEffect(() => {
    navItem.map((data, index) => {
      if (index === 0) data[`isActive`] = true;
      else data[`isActive`] = false;
    })
    setNavItem([...navItem])
  }, [])

  // handle active menu
  function handleMenuActive(item) {
    navItem.map((data) => {
      if (item.id === data.id) data[`isActive`] = true;
      else data[`isActive`] = false;
    })
    setNavItem([...navItem])
  }

  return (
    <>
      <div className="sidebar-wrapper">
        <div className="nav-wrapper">
          <div className="item-wrapper mb-5">
            <ul className="mt-1">
              {navItem?.map((item) =>
                <div className="mb-1"
                  style={item?.isActive ? { backgroundColor: "#D0ECFD", borderRadius: 10 } : {}}
                >
                    <div className="d-flex p-2" onClick={() => handleMenuActive(item)}>
                      <div>
                        <span className="item-ico mr-1">
                          {item?.icon}
                        </span>
                      </div>
                      <div style={{marginTop: 2}}>
                        <span>
                          {item?.title}
                        </span>
                      </div>
                    </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

Sidebar.propTypes = {
  handleActive: ProtoTypes.func,
};

export default Sidebar;
