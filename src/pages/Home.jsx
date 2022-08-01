import Hero from "../components/Sections/Home/Hero";
import SubHero from "../components/Sections/Home/SubHero";
import Services from "../components/Sections/Home/Services";
import Portfolio from "../components/Sections/Home/Portfolio";
import Optimization from "../components/Sections/Home/Optimization";
import AuditReport from "../components/Sections/Home/AuditReport";
import MovingStrip from "../components/Sections/Home/MovingStrip";
import Contact from "../components/Sections/Home/Contact";
function Home() {
  return (
    <div className="home">
      <Hero />
      <SubHero />
      <Services />
      <Portfolio />
      <Optimization />
      <AuditReport />
      <MovingStrip />
      <Contact />
    </div>
  );
}

export default Home;
