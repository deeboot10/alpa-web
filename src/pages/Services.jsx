import Hero from "../components/Sections/Services/Hero";
import SubHero from "../components/Sections/Services/SubHero";
import BannerOne from "../components/Sections/Services/BannerOne";
import AllServices from "../components/Sections/Services/AllServices";
import BannerTwo from "../components/Sections/Services/BannerTwo";
import WebDesignServices from "../components/Sections/Services/WebDesignServices";
function Services() {
  return (
    <div className="services">
      <Hero></Hero>
      <SubHero></SubHero>
      <BannerOne></BannerOne>
      <AllServices></AllServices>
      <BannerTwo></BannerTwo>
      <WebDesignServices></WebDesignServices>
    </div>
  );
}

export default Services;
