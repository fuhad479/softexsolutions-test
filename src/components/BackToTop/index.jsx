import { ReactComponent as UpArrow } from "src/assets/up-arrow.svg";

import "./index.scss";

export default function BackToTop() {
  return (
    <div className="back-to-top" onClick={() => window.scroll(0, 0)}>
      <div className="border"></div>
      <button>
        <UpArrow />
      </button>
    </div>
  );
}
