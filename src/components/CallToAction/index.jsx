import { ReactComponent as LongArrow } from "src/assets/long-arrow.svg";

import "./index.scss";

export default function CallToAction() {
  return (
    <div className="call-to-action">
      <div className="container">
        <div className="call-to-action-content">
          <h2 className="cta-title">Let’s Create Big Stories Together</h2>
          <p>
            Mobile is in our nerves. We don’t just build apps, we create brand.
          </p>
          <p>Choosing us will be your best decision.</p>
          <button className="cta-button">
            <span>Get A Quote</span>
            <LongArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
