import { Link } from "react-router-dom";

function WorkTogether() {
  return (
    <section className="work-together">
      <h2>Let's Work Together!</h2>
      <p>
        Need a quote on a re-design or a new project? Give us a bit of detail
      </p>
      <p>on your project and let us help!</p>
      <Link to="/contact">
        <button className="btn-special">START A PROJECT</button>
      </Link>
    </section>
  );
}

export default WorkTogether;
