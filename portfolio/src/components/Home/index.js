import "./index.scss";
import SLogo from "../../assets/images/S-Logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          {" "}
          Hi, <br /> I'm
          <img src={SLogo} alt="developer" />
          am <br />
          Web Developer
        </h1>
        <h2>Ruby / Next.js / React / Js / Css / Postgre</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
