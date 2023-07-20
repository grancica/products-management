import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/" className={classes.logo}>
          Products
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
