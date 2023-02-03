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

  const windowHeight = window.innerHeight;

  useEffect(() => {
    setTotalHeight(document.lastElementChild.offsetHeight - windowHeight);
  }, []);

  window.onscroll = () => {
    let y = totalHeight - window.scrollY;
    let per = (y / document.lastElementChild.offsetHeight) * 100;
    console.log(per);
  };

  return (
    <>
      <Header />
      <ScheduleCall />
      <SocialMedia />
      <CallToAction />
      <Footer />
      <StickyModal />
      <BackToTop />
    </>
  );
}

export default App;
