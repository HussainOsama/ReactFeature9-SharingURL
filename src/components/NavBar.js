// Styling
import { ThemeButton } from "../styles";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Link to="/">
        <h4 className="navbar-brand">MyLogo</h4>
      </Link>
      <div className="navbar-nav ml-auto">
        <Link
          to="/products"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Products
        </Link>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
