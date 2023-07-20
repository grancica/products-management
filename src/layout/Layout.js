import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigations";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation>
        <main className={classes.main}>{props.children}</main>
      </MainNavigation>
    </Fragment>
  );
};

export default Layout;
