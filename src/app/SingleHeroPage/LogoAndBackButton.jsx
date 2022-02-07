import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LogoAndBackButton.css";

const LogoAndBackButton = () => {
  return (
    <div className="d-flex justify-content-between pb-3 align-items-center">
      <div className="d-flex align-items-center">
        <Image src="../images/marvel-logo.png" />
        <h3 className="ps-2">Marvel Heros</h3>
      </div>

      <Link to="/marvel-heroes-team/" className="text-decoration-none text-dark">
        <h5 className="back-to-homepage" variant="outline-dark">
          Homepage
        </h5>
      </Link>
    </div>
  );
};

export default LogoAndBackButton;
