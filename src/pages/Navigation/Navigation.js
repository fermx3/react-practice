import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Layout from "../../components/layout/Layout/Layout";

import FavoritesContext from "../../store/favorites-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const { favorites } = useContext(FavoritesContext);

  const { header, logo, badge } = classes;

  return (
    <Fragment>
      <header className={header}>
        <div className={logo}>React Meetups</div>
        <div>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup">Add New Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">
                My Favorites
                <span className={badge}>{favorites && favorites.length}</span>
              </Link>
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
