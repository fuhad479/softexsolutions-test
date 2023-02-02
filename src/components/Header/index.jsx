import { useState } from "react";

import { ReactComponent as Logo } from "src/assets/logo.svg";
import { ReactComponent as MenuIcon } from "src/assets/hamburgers.svg";
import { ReactComponent as IndianFlag } from "src/assets/indian-flag.svg";
import { ReactComponent as AmericanFlag } from "src/assets/american-flag.svg";
import { ReactComponent as BritishFlag } from "src/assets/british-flag.svg";
import { ReactComponent as MailIcon } from "src/assets/mail.svg";
import { ReactComponent as SkypeIcon } from "src/assets/skype.svg";
import { ReactComponent as FacebookIcon } from "src/assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "src/assets/twitter.svg";
import { ReactComponent as InstagramIcon } from "src/assets/instagram.svg";
import { ReactComponent as LinkedinIcon } from "src/assets/linkedin.svg";
import { ReactComponent as YoutubeIcon } from "src/assets/youtube.svg";
import { ReactComponent as HyperlinkIcon } from "src/assets/hyperlink-info-system.svg";

import MobileNavigation from "../MobileNavigation";
import TopBar from "../TopBar";

import "./index.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  function navToggler() {
    setOpen((prevState) => !prevState);
  }

  return (
    <>
      <TopBar />
      <div className="main-header">
        <div className="container">
          <div className="main-header-content">
            <div className="logo">
              <Logo />
            </div>
            <nav className="nav">
              <ul className="navigation">
                <li className="navigation-item drop-down">
                  Company
                  <div className="sub-menu">
                    <div className="column first-column">
                      <ul className="navigation">
                        <li className="navigation-item">Who we are</li>
                        <li className="navigation-item">Services</li>
                        <li className="navigation-item">Career</li>
                        <li className="navigation-item">Events</li>
                      </ul>
                    </div>
                    <div className="column second-column">
                      <ul className="navigation">
                        <li className="navigation-item">
                          <IndianFlag />
                          <a href="tel:+918000161161">+91 8000 161161</a>
                        </li>
                        <li className="navigation-item">
                          <AmericanFlag />
                          <a href="tel:+13097914105">+1 309 791 4105</a>
                        </li>
                        <li className="navigation-item">
                          <BritishFlag />
                          <a href="tel:+442081338639">+44 20 8133 8639</a>
                        </li>
                        <li className="navigation-item">
                          <MailIcon />
                          <a href="mailto:info@hyperlinkinfosystem.com">
                            info@hyperlinkinfosystem.com
                          </a>
                        </li>
                        <li className="navigation-item">
                          <SkypeIcon />
                          <a href="skype:hyperlink.infosystem">
                            hyperlink.infosystem
                          </a>
                        </li>
                      </ul>
                      <div className="social-icons">
                        <div className="social-icon">
                          <FacebookIcon />
                        </div>
                        <div className="social-icon">
                          <TwitterIcon />
                        </div>
                        <div className="social-icon">
                          <InstagramIcon />
                        </div>
                        <div className="social-icon">
                          <LinkedinIcon />
                        </div>
                        <div className="social-icon">
                          <YoutubeIcon />
                        </div>
                        <div className="social-icon">
                          <HyperlinkIcon />
                        </div>
                      </div>
                    </div>
                    <div className="column third-column">
                      <div className="link-wrapper">
                        <a href="/">
                          Discover Career Opportunities at Hyperlink InfoSystem!
                        </a>
                      </div>
                    </div>
                    <div className="column fourth-column">
                      <div className="link-wrapper">
                        <a href="/">Let's Discuss Your Requirements! </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="navigation-item">Services</li>
                <li className="navigation-item">Hire Developers</li>
                <li className="navigation-item">Case Study</li>
                <li className="navigation-item">Resources</li>
                <li className="navigation-item">Contact Us</li>
                <button type="button" className="large-button">
                  Get A Free Quote
                </button>
              </ul>
            </nav>
            <button type="button" className="menu-button" onClick={navToggler}>
              <MenuIcon width={30} height={30} />
            </button>
          </div>
        </div>
      </div>
      {open && <MobileNavigation />}
    </>
  );
}
