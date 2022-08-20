import avatar from "../../../img/avatar-review.png";
import left from "../../../img/left-blue-arr.svg";
import right from "../../../img/right-blue-arr.svg";
import star from "../../../img/star-svg.svg";
import mainBg from "../../../img/mainBg.svg";
import { useState } from "react";

const numberOfComments = 3;

function SubHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleLeftClick = () => {
    setActiveSlide((state) => {
      console.log(state);
      if (state > 0) {
        return state - 1;
      } else {
        return numberOfComments - 1;
      }
    });
  };
  const handleRightClick = () => {
    setActiveSlide((state) => {
      console.log(state);
      if (state < numberOfComments - 1) {
        return state + 1;
      } else {
        return 0;
      }
    });
  };
  console.log(activeSlide);

  return (
    <section className="subhero" style={{ backgroundImage: `url(${mainBg})` }}>
      <div className="arrows">
        <button onClick={handleLeftClick}>
          <img src={left} alt="Left arrow" />
        </button>
        <button onClick={handleRightClick}>
          <img src={right} alt="Right arrow" />
        </button>
      </div>
      <div className="comments" style={{ left: `-${activeSlide * 100}%` }}>
        <div className="comment">
          <img src={avatar} alt="Avatar" />
          <span>John Dick 1</span>
          <div className="stars">
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
          </div>
          <p>
            “Alpa Digital did an amazing job with website for my agency, I would
            defenetly work with them again.”
          </p>
        </div>
        <div className="comment">
          <img src={avatar} alt="Avatar" />
          <span>John Dick 2</span>
          <div className="stars">
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
          </div>
          <p>
            “Alpa Digital did an amazing job with website for my agency, I would
            defenetly work with them again.”
          </p>
        </div>
        <div className="comment">
          <img src={avatar} alt="Avatar" />
          <span>John Dick 3</span>
          <div className="stars">
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
          </div>
          <p>
            “Alpa Digital did an amazing job with website for my agency, I would
            defenetly work with them again.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default SubHero;
