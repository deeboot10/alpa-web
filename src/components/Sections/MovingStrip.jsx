import Marquee from "react-fast-marquee";
import logo from "../../img/logoWhite.svg";
function MovingStrip() {
  return (
    <Marquee
      gradient={false}
      speed={100}
      style={{ backgroundColor: "#0038FF" }}
    >
      <img style={{ padding: "21px 90px" }} src={logo} alt="Logo" />
      <img style={{ padding: "21px 90px" }} src={logo} alt="Logo" />
      <img style={{ padding: "21px 90px" }} src={logo} alt="Logo" />
      <img style={{ padding: "21px 90px" }} src={logo} alt="Logo" />
      <img style={{ padding: "21px 90px" }} src={logo} alt="Logo" />
      <img style={{ padding: "21px 90px" }} src={logo} alt="Logo" />
      <img style={{ padding: "21px 90px" }} src={logo} alt="Logo" />
      <img style={{ padding: "21px 90px" }} src={logo} alt="Logo" />
      <img style={{ padding: "21px 90px" }} src={logo} alt="Logo" />
    </Marquee>
  );
}

export default MovingStrip;
