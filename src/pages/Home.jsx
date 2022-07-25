import Hero from "../components/Sections/Hero";
import SubHero from "../components/Sections/SubHero";
import Services from "../components/Sections/Services";
import Portfolio from "../components/Sections/Portfolio";
import Optimization from "../components/Sections/Optimization";
import AuditReport from "../components/Sections/AuditReport";
import MovingStrip from "../components/Sections/MovingStrip";
import Contact from "../components/Sections/Contact";
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
