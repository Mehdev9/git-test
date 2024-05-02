import { Link } from "react-router-dom";

const NavbarView = () => {
  return (
    <nav>
        <Link to="/" style={{ padding: "5px", fontSize: "30px" }}>
        home
        </Link>
        <Link to="/favoris" style={{ padding: "5px", fontSize: "30px" }}>
        favoris
        </Link>
    </nav>
  );
};

export default NavbarView;