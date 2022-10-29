import avatar1 from "../../../img/avatar1.webp";
import avatar2 from "../../../img/avatar2.webp";
import avatar3 from "../../../img/avatar3.webp";
import left from "../../../img/left-blue-arr.svg";
import right from "../../../img/right-blue-arr.svg";
import star from "../../../img/star-svg.svg";
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
    <section className="subhero">
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
          <img className="avatar" src={avatar3} alt="Avatar" />
          <span>Ivan</span>
          <div className="stars">
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
          </div>
          <p>
            “Working with Alpa has been an absolute pleasure. Their quality,
            creativeness, & speed is unmatched. They do all of our design. They
            also build our websites and smart contracts when we need it. Every
            single time we are delighted working with them. They are a diamond
            in the rough!”
          </p>
        </div>
        <div className="comment">
          <img className="avatar" src={avatar1} alt="Avatar" />
          <span></span>
          <div className="stars">
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
            <img src={star} alt="Illustration of a star" />
          </div>
          <p>
            “I couldn't help but feel thankful that I came across such
            enthusiastic, young team. Done the work with such brilliance and
            care for details. All that for reasonable price.”
          </p>
        </div>
        <div className="comment">
          <img className="avatar" src={avatar2} alt="Avatar" />
          <span>Alex</span>
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
