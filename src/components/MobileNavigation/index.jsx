import { useState, useRef } from "react";

import "./index.scss";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const navRef = useRef();

  return (
    <div className="mobile-navigation-wrapper">
      <div className="mobile-navigation">
        {open && (
          <div className="sub-menu-wrapper">
            <ul className="sub-navigation">
              <li
                className="sub-navigation-item"
                onClick={() => setOpen(false)}
              >
                Back
              </li>
              <li className="sub-navigation-item">Who We Are</li>
              <li className="sub-navigation-item">Services</li>
              <li className="sub-navigation-item">Career</li>
              <li className="sub-navigation-item">Events</li>
            </ul>
          </div>
        )}
        {!open && (
          <div ref={navRef} className="main-menu-wrapper">
            <ul className="main-navigation">
              <li
                className="main-navigation-item sub-item"
                onClick={() => setOpen(true)}
              >
                Company
              </li>
              <li className="main-navigation-item">Services</li>
              <li className="main-navigation-item">Hire Developers</li>
              <li className="main-navigation-item">Case Study</li>
              <li className="main-navigation-item">Resources</li>
              <li className="main-navigation-item">Contact Us</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
