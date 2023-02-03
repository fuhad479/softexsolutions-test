/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as FacebookIcon } from "src/assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "src/assets/twitter.svg";
import { ReactComponent as InstagramIcon } from "src/assets/instagram.svg";
import { ReactComponent as LinkedinIcon } from "src/assets/linkedin.svg";
import { ReactComponent as YoutubeIcon } from "src/assets/youtube.svg";
import { ReactComponent as HyperlinkInfoSystemIcon } from "src/assets/hyperlink-info-system.svg";

import "./index.scss";

export default function SocialMedia() {
  return (
    <div className="social-media">
      <div className="container">
        <div className="social-media-content">
          <div className="left-content">
            <h3 className="stroked-title">Social Media</h3>
            <p className="social-media-brief">
              Don't Miss To Follow Us On Our Social Networks Accounts.
            </p>
          </div>
          <div className="right-content">
            <a href="#" target="_blank" className="social-icon">
              <FacebookIcon />
            </a>
            <a href="#" target="_blank" className="social-icon">
              <TwitterIcon />
            </a>
            <a href="#" target="_blank" className="social-icon">
              <InstagramIcon />
            </a>
            <a href="#" target="_blank" className="social-icon">
              <LinkedinIcon />
            </a>
            <a href="#" target="_blank" className="social-icon">
              <YoutubeIcon />
            </a>
            <a href="#" target="_blank" className="social-icon">
              <HyperlinkInfoSystemIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
