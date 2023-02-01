import { ReactComponent as IndianFlag } from "src/assets/indian-flag.svg";
import { ReactComponent as AmericanFlag } from "src/assets/american-flag.svg";
import { ReactComponent as BritishFlag } from "src/assets/british-flag.svg";

import "./index.scss";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-content">
          <div className="contact-numbers">
            <a href="tel:+918000161161">
              <IndianFlag />
              <span>+91 8000 161161</span>
            </a>
            <a href="tel:+13097914105">
              <AmericanFlag />
              <span>+1 309 791 4105</span>
            </a>
            <a href="tel:+442081338639">
              <BritishFlag />
              <span>+44 20 8133 8639</span>
            </a>
          </div>
          <div className="actions">
            <button type="button" className="small-button">
              Press Release
            </button>
            <button type="button" className="small-button">
              Our Fresh Work
            </button>
            <button type="button" className="small-button">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
