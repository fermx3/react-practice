import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Layout from "../../components/layout/Layout/Layout";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <div>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup">Add New Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">My Favorites</Link>
            </li>
          </ul>
        </div>
      </header>
      <Layout>
        <Outlet />
      </Layout>
    </Fragment>
  );
};

export default Navigation;
