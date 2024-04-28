import React, { useEffect, useRef, useState } from 'react';
import Hamburger from 'hamburger-react';
import { Dropdown } from 'react-bootstrap';
import { sideMenuArr } from '../constants/sideMenu';
import { IMAGE_URL } from '../constants/config';

// hamburger menu(will trigger only if the screen is sm or xs)
function HamburgerMenu() {
    const [isOpen, setOpen] = useState(true);
    const [navItem, setNavItem] = useState(sideMenuArr);
    const ref = useRef();

    // on initial render will set the side menu first item as active
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

  // will close the menu if clicks outside of the element 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <Dropdown show={isOpen} align="end" ref={ref}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ visibility: "hidden"  }}>
                </Dropdown.Toggle>
                <Dropdown.Menu className='vh-100 p-1' style={{ transition: 'all 0.6s cubic-bezier(0, 0, 0, 1) 0s !important' }}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={IMAGE_URL} className="block dark:hidden" alt="logo" height={80} width={100} style={{ objectFit: "fill" }} />
                    </div>
                    {navItem?.map((item) =>
                        <Dropdown.Item href="#/action-1" style={item?.isActive ? { backgroundColor: "#D0ECFD", borderRadius: 10 } : {}} onClick={() => handleMenuActive(item)}>
                            <div className="d-flex p-1" style={{color: '#1652F0'}}>
                                <div>
                                    <span className="item-ico mr-1">
                                        {item?.icon}
                                    </span>
                                </div>
                                <div style={{ marginTop: 2 }}>
                                    <span>
                                        {item?.title}
                                    </span>
                                </div>
                            </div>
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default HamburgerMenu;
