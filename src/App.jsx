import Header from "./components/Fixed/Header";
import Footer from "./components/Fixed/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import ContactPage from "./pages/ContactPage";
import WebDesign from "./pages/WebDesign";
import WebDevelopment from "./pages/WebDevelopment";
import ECommerce from "./pages/ECommerce";
import Seo from "./pages/Seo";
import { isMobile } from "react-device-detect";
function App() {
  return (
    <div className={isMobile ? "mobile" : ""}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:blogKey" element={<SingleBlog />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          ></Route>
          <Route path="/services/web-design" element={<WebDesign />}></Route>
          <Route path="/services/seo" element={<Seo />}></Route>
          <Route path="/services/e-commerce" element={<ECommerce />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
