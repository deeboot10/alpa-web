import placeholder from "../../img/subHeroImg.png";
import mainBg from "../../img/mainBg.svg";

function SubHero() {
  return (
    <section className="subhero" style={{ backgroundImage: `url(${mainBg})` }}>
      <div className="img">
        <img src={placeholder} alt="Placeholder" />
      </div>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>
      </div>
    </section>
  );
}

export default SubHero;
