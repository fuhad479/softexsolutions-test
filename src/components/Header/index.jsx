import { ReactComponent as Logo } from "src/assets/logo.svg";

import TopBar from "../TopBar";

import "./index.scss";

export default function Header() {
  return (
    <header className="header">
      <TopBar />
      <div className="main-header">
        <div className="container">
          <div className="main-header-content">
            <div className="logo">
              <Logo />
            </div>
            <nav className="nav">
              <ul className="navigation">
                <li className="navigation-item">Company</li>
                <li className="navigation-item">Services</li>
                <li className="navigation-item">Hire Developers</li>
                <li className="navigation-item">Case Study</li>
                <li className="navigation-item">Resources</li>
                <li className="navigation-item">Contact Us</li>
                <button type="button" className="large-button">Get A Free Quote</button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
