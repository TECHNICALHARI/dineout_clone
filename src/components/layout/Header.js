import React from "react";
import styles from "../../assets/styles/layout.module.css";
import { LocationIcon } from "../../utils/icons";
import Container from "../common/Container";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerMain}>
          <div className={styles.logo}>
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2023/Jun/19/swiggy_dineout_logo.png"
              alt="Swiggy Dineout"
              title="Swiggy Dineout"
            />
          </div>
          <div className={styles.locationSec}>
            <span className={styles.locationIcon}>
              <LocationIcon />
            </span>
            <span className={styles.cityName}>Delhi</span>
          </div>
          <div className={styles.navLinks}>
            <ul>
              <li className={location.pathname === "/" ? styles.active : ""}>
                <Link to="/">Home</Link>
              </li>
              <li
                className={
                  location.pathname === "/delhi-restaurants"
                    ? styles.active
                    : ""
                }
              >
                <Link to="/book-table">Book a Table</Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  rel="noopener noreferrer"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.login}>
            <button className={`fillBtn ${styles.loginBtn}`}>Login</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
