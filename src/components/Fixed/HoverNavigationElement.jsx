import { Link } from "react-router-dom";
import arrowDown from "../../img/arrowDown.svg";
function HoverNavigationElement({ name, url, childrenUrls, childrenNames }) {
  const childernDom = [];
  childrenUrls.forEach((child, i) => {
    childernDom.push(
      <Link key={i} to={child}>
        {childrenNames[i]}
      </Link>
    );
  });

  return (
    <div className="hoverNavigationElement" style={{ display: "inline" }}>
      <Link to={"/" + url}>
        {name} <img src={arrowDown} alt="Arrow down" />
      </Link>
      <div className="hoverDiscoverableBox">{childernDom}</div>
    </div>
  );
}

export default HoverNavigationElement;
