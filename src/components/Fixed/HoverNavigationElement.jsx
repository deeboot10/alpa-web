import { Link } from "react-router-dom";
import arrowDown from "../../img/arrowDown.svg";
import plus from "../../img/plus.svg";
import { isMobile } from "react-device-detect";
import { useState } from "react";
function HoverNavigationElement({
  name,
  url,
  childrenUrls,
  childrenNames,
  setMenu,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const handleChangeUrl = () => {
    setMobileMenu(false);
  };

  const handleClick = () => {
    setIsClicked((state) => !state);
  };
  const childernDom = [];
  childrenUrls.forEach((child, i) => {
    childernDom.push(
      <Link onClick={handleChangeUrl} key={i} to={"/services/" + child}>
        {childrenNames[i]}
      </Link>
    );
  });
  return (
    <div className="hoverNavigationElement" style={{ display: "inline" }}>
      {isMobile ? (
        <div className="flexy">
          <Link onClick={handleChangeUrl} to={"/" + url}>
            {name}
          </Link>
          <img
            onClick={handleClick}
            className={"plus-sign"}
            src={plus}
            alt="plus sign"
          ></img>
        </div>
      ) : (
        <Link onClick={handleChangeUrl} to={"/" + url}>
          {name} <img src={arrowDown} alt="Arrow down" />
        </Link>
      )}
      <div className={"hoverDiscoverableBox " + `${isClicked ? "open" : ""}`}>
        {childernDom}
      </div>
    </div>
  );
}

export default HoverNavigationElement;
