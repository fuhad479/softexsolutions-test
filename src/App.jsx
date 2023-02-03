import { useEffect, useState } from "react";
import Header from "src/components/Header";
import ScheduleCall from "src/components/ScheduleCall";
import SocialMedia from "src/components/SocialMedia";
import CallToAction from "src/components/CallToAction";
import Footer from "src/components/Footer";
import StickyModal from "src/components/StickyModal";
import BackToTop from "src/components/BackToTop";

function App() {
  const [totalHeight, setTotalHeight] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setTotalHeight(document.lastElementChild.offsetHeight - window.innerHeight);
  }, []);

  // console.log(totalHeight);

  window.onscroll = () => {
    setScrollPercentage((window.scrollY / totalHeight) * 100);
    if (window.scrollY > 51) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  return (
    <>
      <Header />
      <ScheduleCall />
      <SocialMedia />
      <CallToAction />
      <Footer />
      <StickyModal />
      {visibility && <BackToTop percentage={scrollPercentage} />}
    </>
  );
}

export default App;
