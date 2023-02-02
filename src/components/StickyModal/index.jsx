import { ReactComponent as PhoneIcon } from "src/assets/phone.svg";
import { ReactComponent as IndianFlag } from "src/assets/indian-flag.svg";
import { ReactComponent as AmericanFlag } from "src/assets/american-flag.svg";
import { ReactComponent as CalenderIcon } from "src/assets/calender.svg";

import "./index.scss";

export default function StickyModal() {
  function opener(event) {
    const el = event.currentTarget.parentNode;
    if (el.classList.contains("open")) {
      el.classList.remove("open");
    } else {
      el.classList.add("open");
    }
  }
  return (
    <div className="sticky-modal">
      <button onClick={opener}>
        <PhoneIcon />
      </button>
      <div className="scheduler">
        <h3 className="scheduler-title">Call Us Now</h3>
        <a href="/">
          <IndianFlag />
          <span>+91 8000 161161</span>
        </a>
        <a href="/">
          <AmericanFlag />
          <span>+1 309 791 4105</span>
        </a>
        <hr />
        <div className="clndr">
          <CalenderIcon />
          <span>Schedule Call</span>
        </div>
      </div>
    </div>
  );
}
